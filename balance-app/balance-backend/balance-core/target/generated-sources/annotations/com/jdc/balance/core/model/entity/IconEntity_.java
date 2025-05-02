package com.jdc.balance.core.model.entity;

import com.jdc.balance.core.model.entity.consts.CategoryIconFilter;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(IconEntity.class)
public abstract class IconEntity_ extends com.jdc.balance.core.model.entity.audit.AuditorMetadata_ {

	public static final String FILTER = "filter";
	public static final String PATH = "path";
	public static final String NAME = "name";
	public static final String ID = "id";
	public static final String ACCOUNT = "account";

	
	/**
	 * @see com.jdc.balance.core.model.entity.IconEntity#filter
	 **/
	public static volatile SingularAttribute<IconEntity, CategoryIconFilter> filter;
	
	/**
	 * @see com.jdc.balance.core.model.entity.IconEntity#path
	 **/
	public static volatile SingularAttribute<IconEntity, String> path;
	
	/**
	 * @see com.jdc.balance.core.model.entity.IconEntity#name
	 **/
	public static volatile SingularAttribute<IconEntity, String> name;
	
	/**
	 * @see com.jdc.balance.core.model.entity.IconEntity#id
	 **/
	public static volatile SingularAttribute<IconEntity, Long> id;
	
	/**
	 * @see com.jdc.balance.core.model.entity.IconEntity
	 **/
	public static volatile EntityType<IconEntity> class_;
	
	/**
	 * @see com.jdc.balance.core.model.entity.IconEntity#account
	 **/
	public static volatile SingularAttribute<IconEntity, Boolean> account;

}

