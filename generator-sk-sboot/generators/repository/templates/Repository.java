package <%= domainClass.classPackage.classParentPackageName %>.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import <%= domainClass.classPackage.classParentPackageName %>.domain.<%= domainClass.name %>;
import java.util.List;
import org.springframework.data.jpa.repository.Query;       
<%_ domainClass.collectionAttributes.forEach(function(attr) { -%>
import <%= domainClass.classPackage.classParentPackageName %>.domain.<%= attr.genericTypes[0] %>;     
<%_ }) -%>

@Repository
public interface <%= domainClass.name %>Repository extends JpaRepository<<%= domainClass.name %>, <%= domainClass.idAttribute.shortType %>> {
	
    <%_ domainClass.collectionAttributes.forEach(function(attr) { -%>
	@Query(" select <%= attr.name.slice(0,-1) %> from <%= domainClass.name %> <%= domainClass.instanceName %> join <%= domainClass.instanceName %>.<%= attr.name %> <%= attr.name.slice(0,-1) %> where <%= domainClass.instanceName %>.id = ?1 ")
	List<<%= attr.genericTypes[0] %>> find<%= _.upperFirst(attr.name) %>(<%= domainClass.idAttribute.shortType %> id);

	<%_ }) -%>
}