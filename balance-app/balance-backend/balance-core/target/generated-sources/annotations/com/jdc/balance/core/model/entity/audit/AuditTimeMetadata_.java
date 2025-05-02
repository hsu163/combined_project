package com.jdc.balance.core.model.entity.audit;

import jakarta.persistence.metamodel.MappedSuperclassType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.time.LocalDateTime;

@StaticMetamodel(AuditTimeMetadata.class)
public abstract class AuditTimeMetadata_ {

	public static final String CREATED_AT = "createdAt";
	public static final String MODIFIED_AT = "modifiedAt";

	
	/**
	 * @see com.jdc.balance.core.model.entity.audit.AuditTimeMetadata#createdAt
	 **/
	public static volatile SingularAttribute<AuditTimeMetadata, LocalDateTime> createdAt;
	
	/**
	 * @see com.jdc.balance.core.model.entity.audit.AuditTimeMetadata#modifiedAt
	 **/
	public static volatile SingularAttribute<AuditTimeMetadata, LocalDateTime> modifiedAt;
	
	/**
	 * @see com.jdc.balance.core.model.entity.audit.AuditTimeMetadata
	 **/
	public static volatile MappedSuperclassType<AuditTimeMetadata> class_;

}

