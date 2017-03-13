package <%= domainClass.parentPackageName %>.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import <%= domainClass.fullyQualifiedName %>;
import <%= domainClass.parentPackageName %>.repository.<%= domainClass.name %>Repository;
<%_ domainClass.attributes.forEach(function(attr, index) { -%>
	<%_ if (attr.isTypeList) { -%>
import <%= domainClass.parentPackageName %>.domain.<%= attr.relationship.name %>;
import <%= domainClass.parentPackageName %>.repository.<%= attr.relationship.name %>Repository;	
	<%_ } -%>
	<%_ if (index === 0) { -%>
import java.util.List;
	<%_ } -%>
<%_ }) -%>

@Service
public class <%= domainClass.name %>Service {

	@Autowired
	private <%= domainClass.name %>Repository <%= domainClass.instanceName %>Repository;

	<%_ domainClass.attributes.forEach(function(attr) { -%>
		<%_ if (attr.isTypeList) { -%>
	@Autowired
	private <%=  attr.relationship.name %>Repository <%= _.lowerFirst(attr.relationship.name) %>Repository;	
		 <%_ } -%>
	<%_ }) -%>

	public Page<<%= domainClass.name %>> findAll(Pageable pageable) {
		return <%= domainClass.instanceName %>Repository.findAll(pageable);
	}

	<%_ domainClass.attributes.forEach(function(attr) { -%>
		<%_ if (attr.isTypeList) { -%>
	public List<<%= attr.relationship.name %>> find<%= _.upperFirst(attr.name) %>(Long id) {
		return <%= domainClass.instanceName %>Repository.find<%= _.upperFirst(attr.name) %>(id);
	}
		 <%_ } -%>
	<%_ }) -%>

	public <%= domainClass.name %> findOne(<%= domainClass.idAttribute.type %> id) {
		return <%= domainClass.instanceName %>Repository.findOne(id);
	}

	public boolean exists(<%= domainClass.idAttribute.type %> id) {
		return <%= domainClass.instanceName %>Repository.exists(id);
	}

	@Transactional
	public void delete(<%= domainClass.idAttribute.type %> id) {
		<%= domainClass.instanceName %>Repository.delete(id);
	}
	
	@Transactional
	public <%= domainClass.name %> insert(<%= domainClass.name %> new<%= domainClass.name %>) {
		<%= domainClass.name %> <%= domainClass.instanceName %> = new <%= domainClass.name %>();
		this.updateAttributes(<%= domainClass.instanceName %>, new<%= domainClass.name %>);
		return <%= domainClass.instanceName %>Repository.save(<%= domainClass.instanceName %>);
	}
	
	@Transactional
	public <%= domainClass.name %> update(<%= domainClass.name %> new<%= domainClass.name %>) {
		<%= domainClass.name %> <%= domainClass.instanceName %> = <%= domainClass.instanceName %>Repository.findOne(new<%= domainClass.name %>.getId());
		this.updateAttributes(<%= domainClass.instanceName %>, new<%= domainClass.name %>);
		return <%= domainClass.instanceName %>Repository.save(<%= domainClass.instanceName %>);
	}

	private void updateAttributes(<%= domainClass.name %> <%= domainClass.instanceName %>, <%= domainClass.name %> new<%= domainClass.name %>) {
		<%_ domainClass.attributes.forEach(function(attr) { -%>
			<%_ if (!attr.hasMultiplicity && !attr.isId && !attr.isStatic) { -%>
		<%= domainClass.instanceName %>.<%= attr.setterName %>(new<%= domainClass.name %>.<%= attr.getterName %>());
			<%_ } -%>
		<%_ }) -%>
		<%_ domainClass.attributes.forEach(function(attr) { -%>
			<%_ if (attr.hasMultiplicity) { -%>
				<%_ if (attr.multiplicity === 'OneToMany' && attr.navegability === 'unidirectional' && !attr.hasCascade) { -%>
		update<%= _.upperFirst(attr.name) %>(<%= domainClass.instanceName %>, new<%= domainClass.name %>);
				<%_ } -%>		
			<%_ } -%>
		<%_ }) -%>
	}

	<%_ domainClass.attributes.forEach(function(attr) { -%>
		<%_ if (attr.hasMultiplicity) { -%>
			<%_ if (attr.multiplicity === 'OneToMany' && attr.navegability === 'unidirectional' && !attr.hasCascade) { -%>
	
	/**
	 * Atualiza o relacionamento unidirecional OneToMany entre <%= domainClass.name %> e <%= attr.relationship.name %>
	 *
	 */
	private void update<%= _.upperFirst(attr.name) %>(<%= domainClass.name %> <%= domainClass.instanceName %>, <%= domainClass.name %> new<%= domainClass.name %>) {
		// @formatter:off
		new<%= domainClass.name %>.<%= attr.getterName %>().stream()
			.forEach(<%= attr.singularizedName %> ->  <%= domainClass.instanceName %>.<%= attr.getterName %>().add(<%= _.lowerFirst(attr.relationship.name) %>Repository.findOne(<%= attr.singularizedName %>.getId())));
		// @formatter:on				
	}
			<%_ } -%>		
		<%_ } -%>
	<%_ }) -%>

}
