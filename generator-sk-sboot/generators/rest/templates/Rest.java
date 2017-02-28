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

	@RequestMapping(method = RequestMethod.GET, path = "/api/<%= domainClass.instanceName %>s")
	public ResponseEntity<?> findAll(Pageable pageable) {
		Page<<%= domainClass.name %>> <%= domainClass.instanceName %>s = <%= domainClass.instanceName %>Service.findAll(pageable);
		return ResponseEntity.ok(<%= domainClass.instanceName %>s);
	}

	<%_ domainClass.attributes.forEach(function(attr) { -%>
		<%_ if (attr.shortType == 'List') { -%>
	@RequestMapping(method = RequestMethod.GET, path = "/api/<%= domainClass.instanceName %>s/{id}/<%= attr.name %>")
	public ResponseEntity<?> fin<%= _.upperFirst(attr.name) %>(@PathVariable("id") <%= domainClass.idAttribute.shortType %> id) {
		List<<%= attr.genericTypes[0] %>> <%= attr.name %> = <%= domainClass.instanceName %>Service.find<%= _.upperFirst(attr.name) %>(id);
		return ResponseEntity.ok(<%= attr.name %>);
	}
		<%_ } -%>
	<%_ }) -%>

	@RequestMapping(method = RequestMethod.GET, path = "/api/<%= domainClass.instanceName %>s/{id}")
	public ResponseEntity<?> find(@PathVariable("id") <%= domainClass.idAttribute.shortType %> id) {
		boolean exists = <%= domainClass.instanceName %>Service.exists(id);
		if (exists) {
			return ResponseEntity.ok(<%= domainClass.instanceName %>Service.findOne(id));
		}
		return ResponseEntity.notFound().build();
	}

	@RequestMapping(method = RequestMethod.DELETE, path = "/api/<%= domainClass.instanceName %>s/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") <%= domainClass.idAttribute.shortType %> id) {
		boolean exists = <%= domainClass.instanceName %>Service.exists(id);
		if (exists) {
			<%= domainClass.instanceName %>Service.delete(id);
			return ResponseEntity.ok().build();
		}
		return ResponseEntity.notFound().build();
	}

	@RequestMapping(method = RequestMethod.POST, path = "/api/<%= domainClass.instanceName %>s")
	public ResponseEntity<?> insert(@RequestBody <%= domainClass.name %> <%= domainClass.instanceName %>) {
		<%= domainClass.name %> inserted<%= domainClass.name %> = <%= domainClass.instanceName %>Service.insert(<%= domainClass.instanceName %>);
		return ResponseEntity.ok(inserted<%= domainClass.name %>);
	}

	@RequestMapping(method = RequestMethod.PUT, path = "/api/<%= domainClass.instanceName %>s/{id}")
	public ResponseEntity<?> udpate(@PathVariable("id") <%= domainClass.idAttribute.shortType %> id, @RequestBody <%= domainClass.name %> <%= domainClass.instanceName %>) {
		boolean exists = <%= domainClass.instanceName %>Service.exists(id);
		if (exists) {
			<%= domainClass.name %> updated<%= domainClass.name %> = <%= domainClass.instanceName %>Service.update(<%= domainClass.instanceName %>);
			return ResponseEntity.ok(updated<%= domainClass.name %>);
		}
		return ResponseEntity.notFound().build();
	}

}
