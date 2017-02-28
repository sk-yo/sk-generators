package <%= domainClass.classPackage.classParentPackageName %>.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import <%= domainClass.classPackage.classParentPackageName %>.domain.<%= domainClass.name %>;
import java.util.List;
import org.springframework.data.jpa.repository.Query;       
<%_ domainClass.attributes.forEach(function(attr) { -%>
	<%_ if (attr.shortType == 'List') { -%>
import <%= domainClass.classPackage.classParentPackageName %>.domain.<%= attr.genericTypes[0] %>;     
    <%_ } -%>
<%_ }) -%>

@Repository
public interface <%= domainClass.name %>Repository extends JpaRepository<<%= domainClass.name %>, <%= domainClass.idAttribute.shortType %>> {
	
    <%_ domainClass.attributes.forEach(function(attr) { -%>
		<%_ if (attr.shortType == 'List') { -%>
	@Query(" select <%= attr.name.slice(0,-1) %> from <%= domainClass.name %> <%= domainClass.instanceName %> join <%= domainClass.name %>.<%= attr.name %> <%= attr.name.slice(0,-1) %> where <%= domainClass.instanceName %>.id = ?1 ")
	List<<%= attr.genericTypes[0] %>> find<%= _.upperFirst(attr.name) %>(<%= domainClass.idAttribute.shortType %> id);		
		<%_ } -%>
	<%_ }) -%>
}