package <%= domainClass.classPackage.classParentPackageName %>.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import <%= domainClass.classPackage.classParentPackageName %>.domain.<%= domainClass.name %>;
import <%= domainClass.classPackage.classParentPackageName %>.repository.<%= domainClass.name %>Repository;
<%_ domainClass.collectionAttributes.forEach(function(attr) { -%>
import <%= domainClass.classPackage.classParentPackageName %>.domain.<%= attr.genericTypes[0] %>;
import <%= domainClass.classPackage.classParentPackageName %>.repository.<%= _.upperFirst(attr.name.slice(0,-1)) %>Repository;	
<%_ }) -%>

@Service
public class <%= domainClass.name %>Service {

	@Autowired
	private <%= domainClass.name %>Repository <%= domainClass.instanceName %>Repository;

	<%_ domainClass.collectionAttributes.forEach(function(attr) { -%>
	@Autowired
	private <%= _.upperFirst(attr.name.slice(0,-1))%>Repository <%= attr.name.slice(0,-1) %>Repository;	
		
	<%_ }) -%>

	public Page<<%= domainClass.name %>> findAll(Pageable pageable) {
		return <%= domainClass.instanceName %>Repository.findAll(pageable);
	}

	<%_ domainClass.collectionAttributes.forEach(function(attr) { -%>
	public List<Bar> find<%= _.upperFirst(attr.name) %>(Long id) {
		return <%= domainClass.instanceName %>Repository.find<%= _.upperFirst(attr.name) %>(id);
	}		
	<%_ }) -%>

	public <%= domainClass.name %> findOne(<%= domainClass.idAttribute.shortType %> id) {
		return <%= domainClass.instanceName %>Repository.findOne(id);
	}

	public boolean exists(<%= domainClass.idAttribute.shortType %> id) {
		return <%= domainClass.instanceName %>Repository.exists(id);
	}

	@Transactional
	public void delete(<%= domainClass.idAttribute.shortType %> id) {
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
			<%_ if (!attr.collectionAttribute) { -%>
		<%= domainClass.instanceName %>.set<%= _.upperFirst(attr.name) %>(new<%= domainClass.name %>.get<%= _.upperFirst(attr.name) %>());
			<%_ } -%>
		<%_ }) -%>
		<%_ domainClass.collectionAttributes.forEach(function(attr) { -%>
			<%_ if (_.find(attr.annotations, (ann) => { return ann.name === 'javax.persistence.OneToMany' }) == undefined) { -%>
		new<%= domainClass.name %>.get<%= _.upperFirst(attr.name) %>().stream().forEach(<%= attr.name.slice(0,-1) %> -> foo.get<%= _.upperFirst(attr.name) %>().add(<%= attr.name.slice(0,-1) %>Repository.findOne(<%= attr.name.slice(0,-1) %>.getId())));		
			<%_ } -%>
		<%_ }) -%>
	}

}
