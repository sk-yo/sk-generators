package <%= domainClass.classPackage.classParentPackageName %>.rest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import <%= domainClass.classPackage.classParentPackageName %>.domain.<%= domainClass.name %>;

@Repository
public interface <%= domainClass.name %>Repository extends JpaRepository<<%= domainClass.name %>, <%= domainClass.idAttribute.shortType %>> {
	
}