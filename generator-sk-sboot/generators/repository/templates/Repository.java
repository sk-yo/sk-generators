package <%= domainClass.parentPackageName %>.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import <%= domainClass.fullyQualifiedName %>;
import java.util.List;
import org.springframework.data.jpa.repository.Query;       
<%_ domainClass.attributes.forEach(function(attr) { -%>
	<%_ if(attr.hasMultiplicity) { -%>
import <%= attr.relationship.fullyQualifiedName %>;	
	<%_ } -%>
<%_ }) -%>

@Repository
public interface <%= domainClass.name %>Repository extends JpaRepository<<%= domainClass.name %>, <%= domainClass.idAttribute.type %>> {
	
    <%_ domainClass.attributes.forEach(function(attr) { -%>
		<%_ if(attr.hasMultiplicity) { -%>
	@Query(" select <%= attr.singularizedName %> from <%= domainClass.name %> <%= domainClass.instanceName %> join <%= domainClass.instanceName %>.<%= attr.name %> <%= attr.singularizedName %> where <%= domainClass.instanceName %>.id = ?1 ")
	List<<%= attr.genericEntity.name %>> find<%= _.upperFirst(attr.name) %>(<%= domainClass.idAttribute.type %> id);
		<%_ } -%>
	<%_ }) -%>
}