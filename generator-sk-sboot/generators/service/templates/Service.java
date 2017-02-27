package <%= domainClass.classPackage.classParentPackageName %>.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import <%= domainClass.classPackage.classParentPackageName %>.domain.<%= domainClass.name %>;
import <%= domainClass.classPackage.classParentPackageName %>.repository.<%= domainClass.name %>Repository;

@Service
public class <%= domainClass.name %>Service {

	@Autowired
	private <%= domainClass.name %>Repository <%= domainClass.instanceName %>Repository;

	public Page<<%= domainClass.name %>> findAll(Pageable pageable) {
		return <%= domainClass.instanceName %>Repository.findAll(pageable);
	}

	public <%= domainClass.name %> findOne(<%= domainClass.idAttribute.shortType %> id) {
		return <%= domainClass.instanceName %>Repository.findOne(id);
	}

	public void delete(<%= domainClass.idAttribute.shortType %> id) {
		<%= domainClass.instanceName %>Repository.delete(id);
	}

	public boolean exists(<%= domainClass.idAttribute.shortType %> id) {
		return <%= domainClass.instanceName %>Repository.exists(id);
	}

	public <S extends <%= domainClass.name %>> S save(S <%= domainClass.instanceName %>) {
		return <%= domainClass.instanceName %>Repository.save(<%= domainClass.instanceName %>);
	}

}
