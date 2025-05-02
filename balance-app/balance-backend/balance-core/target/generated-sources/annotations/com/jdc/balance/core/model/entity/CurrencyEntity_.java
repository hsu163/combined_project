package com.jdc.balance.core.model.entity;

import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(CurrencyEntity.class)
public abstract class CurrencyEntity_ extends com.jdc.balance.core.model.entity.audit.AuditorMetadata_ {

	public static final String COUNTRY = "country";
	public static final String CODE = "code";
	public static final String NAME = "name";
	public static final String ID = "id";

	
	/**
	 * @see com.jdc.balance.core.model.entity.CurrencyEntity#country
	 **/
	public static volatile SingularAttribute<CurrencyEntity, String> country;
	
	/**
	 * @see com.jdc.balance.core.model.entity.CurrencyEntity#code
	 **/
	public static volatile SingularAttribute<CurrencyEntity, String> code;
	
	/**
	 * @see com.jdc.balance.core.model.entity.CurrencyEntity#name
	 **/
	public static volatile SingularAttribute<CurrencyEntity, String> name;
	
	/**
	 * @see com.jdc.balance.core.model.entity.CurrencyEntity#id
	 **/
	public static volatile SingularAttribute<CurrencyEntity, Long> id;
	
	/**
	 * @see com.jdc.balance.core.model.entity.CurrencyEntity
	 **/
	public static volatile EntityType<CurrencyEntity> class_;

}

