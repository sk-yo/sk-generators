package <%= domainClass.classPackage.classParentPackageName %>.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import <%= domainClass.classPackage.classParentPackageName %>.domain.<%= domainClass.name %>;
<%_ domainClass.attributes.forEach(function(attr) { -%>
	<%_ if (attr.shortType == 'List') { -%>
import <%= domainClass.classPackage.classParentPackageName %>.domain.<%= attr.genericTypes[0] %>;     
    <%_ } -%>
<%_ }) -%>
import <%= domainClass.classPackage.classParentPackageName %>.service.<%= domainClass.name %>Service;

@RestController
public class <%= domainClass.name %>Rest {

	private Logger log = LoggerFactory.getLogger(<%= domainClass.name %>Rest.class);

	@Autowired
	private <%= domainClass.name %>Service <%= domainClass.instanceName %>Service;

	/**
	 * Endpoint para buscar todas as instâncias de <%= domainClass.name %>.
	 *
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/api/<%= domainClass.instanceName %>s")
	public ResponseEntity<?> findAll(Pageable pageable) {
		log.debug("[findAll] Requisição para buscar todos <%= domainClass.instanceName %>s");
		Page<<%= domainClass.name %>> <%= domainClass.instanceName %>s = <%= domainClass.instanceName %>Service.findAll(pageable);
		return ResponseEntity.ok(<%= domainClass.instanceName %>s);
	}

	<%_ domainClass.attributes.forEach(function(attr) { -%>
		<%_ if (attr.shortType == 'List') { -%>
	/**
	 * Endpoint para buscar as instâncias de <%= attr.genericTypes[0] %> em <%= domainClass.name %>.
	 *
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/api/<%= domainClass.instanceName %>s/{id}/<%= attr.name %>")
	public ResponseEntity<?> find<%= _.upperFirst(attr.name) %>(@PathVariable("id") <%= domainClass.idAttribute.shortType %> id) {
		List<<%= attr.genericTypes[0] %>> <%= attr.name %> = <%= domainClass.instanceName %>Service.find<%= _.upperFirst(attr.name) %>(id);
		return ResponseEntity.ok(<%= attr.name %>);
	}
		<%_ } -%>
	<%_ }) -%>

	/**
	 * Endpoint para buscar 1 (uma) instância de <%= domainClass.name %>.
	 *
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/api/<%= domainClass.instanceName %>s/{id}")
	public ResponseEntity<?> find(@PathVariable("id") <%= domainClass.idAttribute.shortType %> id) {
		log.debug("[find] Requisição para buscar <%= domainClass.instanceName %>. id={}", id);
		boolean exists = <%= domainClass.instanceName %>Service.exists(id);
		if (exists) {
			log.debug("[find] <%= domainClass.instanceName %> encontrado.");
			return ResponseEntity.ok(<%= domainClass.instanceName %>Service.findOne(id));
		}
		log.debug("[find] <%= domainClass.instanceName %> NÃO encontrado.");
		return ResponseEntity.notFound().build();
	}

	/**
	 * Endpoint para deleção de <%= domainClass.name %>.
	 *
	 */
	@RequestMapping(method = RequestMethod.DELETE, path = "/api/<%= domainClass.instanceName %>s/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") <%= domainClass.idAttribute.shortType %> id) {
		log.debug("[delete] Requisição para deletar <%= domainClass.instanceName %>. id={}", id);
		boolean exists = <%= domainClass.instanceName %>Service.exists(id);
		if (exists) {
			log.debug("[delete] <%= domainClass.instanceName %> encontrado.");
			<%= domainClass.instanceName %>Service.delete(id);
			log.debug("[delete] <%= domainClass.instanceName %> deletado com sucesso.");
			return ResponseEntity.ok().build();
		}
		log.debug("[delete] <%= domainClass.instanceName %> NÃO encontrado.");
		return ResponseEntity.notFound().build();
	}

	/**
	 * Endpoint para inserção de <%= domainClass.name %>.
	 *
	 */
	@RequestMapping(method = RequestMethod.POST, path = "/api/<%= domainClass.instanceName %>s")
	public ResponseEntity<?> insert(@RequestBody <%= domainClass.name %> <%= domainClass.instanceName %>) {
		log.debug("[insert] Requisição para inserir <%= domainClass.instanceName %>...");
		<%= domainClass.name %> inserted<%= domainClass.name %> = <%= domainClass.instanceName %>Service.insert(<%= domainClass.instanceName %>);
		log.debug("[insert] <%= domainClass.name %> inserido com sucesso. id={}", inserted<%= domainClass.name %>.getId());
		return ResponseEntity.ok(inserted<%= domainClass.name %>);
	}

	/**
	 * Endpoint para atualização de <%= domainClass.name %>.
	 *
	 */
	@RequestMapping(method = RequestMethod.PUT, path = "/api/<%= domainClass.instanceName %>s/{id}")
	public ResponseEntity<?> update(@PathVariable("id") <%= domainClass.idAttribute.shortType %> id, @RequestBody <%= domainClass.name %> <%= domainClass.instanceName %>) {
		log.debug("[update] Requisição para atualizar de <%= domainClass.instanceName %>...");
		boolean exists = <%= domainClass.instanceName %>Service.exists(id);
		if (exists) {
			log.debug("[update] <%= domainClass.instanceName %> encontrado.");
			<%= domainClass.name %> updated<%= domainClass.name %> = <%= domainClass.instanceName %>Service.update(<%= domainClass.instanceName %>);
			log.debug("[update] <%= domainClass.instanceName %> atualizado com sucesso.");
			return ResponseEntity.ok(updated<%= domainClass.name %>);
		}
		log.debug("[update] <%= domainClass.instanceName %> NÃO encontrado.");
		return ResponseEntity.notFound().build();
	}

}
