package com.jdc.balance.core.model.entity.audit;

import jakarta.persistence.metamodel.MappedSuperclassType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(AuditorMetadata.class)
public abstract class AuditorMetadata_ extends com.jdc.balance.core.model.entity.audit.AuditTimeMetadata_ {

	public static final String CREATED_BY = "createdBy";
	public static final String MODIFIED_BY = "modifiedBy";

	
	/**
	 * @see com.jdc.balance.core.model.entity.audit.AuditorMetadata#createdBy
	 **/
	public static volatile SingularAttribute<AuditorMetadata, String> createdBy;
	
	/**
	 * @see com.jdc.balance.core.model.entity.audit.AuditorMetadata#modifiedBy
	 **/
	public static volatile SingularAttribute<AuditorMetadata, String> modifiedBy;
	
	/**
	 * @see com.jdc.balance.core.model.entity.audit.AuditorMetadata
	 **/
	public static volatile MappedSuperclassType<AuditorMetadata> class_;

}

