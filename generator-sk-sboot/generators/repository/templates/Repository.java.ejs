package <%= domainClass.parentPackageName %>.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import <%= domainClass.fullyQualifiedName %>;
<%_ domainClass.attributes.forEach(function(attr, index) { -%>
	<%_ if(attr.isTypeList) { -%>
import <%= attr.relationship.fullyQualifiedName %>;	
	<%_ } -%>
	<%_ if (index === 0) { -%>
import org.springframework.data.jpa.repository.Query;       
import java.util.List;
	<%_ } -%>
<%_ }) -%>

@Repository
public interface <%= domainClass.name %>Repository extends JpaRepository<<%= domainClass.name %>, <%= domainClass.idAttribute.type %>> {
	
    <%_ domainClass.attributes.forEach(function(attr) { -%>
		<%_ if(attr.isTypeList) { -%>
	@Query(" select <%= attr.singularizedName %> from <%= domainClass.name %> <%= domainClass.instanceName %> join <%= domainClass.instanceName %>.<%= attr.name %> <%= attr.singularizedName %> where <%= domainClass.instanceName %>.id = ?1 ")
	List<<%= attr.relationship.name %>> find<%= _.upperFirst(attr.name) %>(<%= domainClass.idAttribute.type %> id);
		<%_ } -%>
	<%_ }) -%>
}