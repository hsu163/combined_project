package com.jdc.balance.core.model.entity;

import com.jdc.balance.core.model.entity.consts.CurrencyPosition;
import com.jdc.balance.core.model.entity.consts.DecimalPlace;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(SettingEntity.class)
public abstract class SettingEntity_ extends com.jdc.balance.core.model.entity.audit.AuditTimeMetadata_ {

	public static final String CURRENCY = "currency";
	public static final String ID = "id";
	public static final String USER = "user";
	public static final String CURRENCY_POSITION = "currencyPosition";
	public static final String DECIMAL_PLACE = "decimalPlace";

	
	/**
	 * @see com.jdc.balance.core.model.entity.SettingEntity#currency
	 **/
	public static volatile SingularAttribute<SettingEntity, CurrencyEntity> currency;
	
	/**
	 * @see com.jdc.balance.core.model.entity.SettingEntity#id
	 **/
	public static volatile SingularAttribute<SettingEntity, Long> id;
	
	/**
	 * @see com.jdc.balance.core.model.entity.SettingEntity
	 **/
	public static volatile EntityType<SettingEntity> class_;
	
	/**
	 * @see com.jdc.balance.core.model.entity.SettingEntity#user
	 **/
	public static volatile SingularAttribute<SettingEntity, UserEntity> user;
	
	/**
	 * @see com.jdc.balance.core.model.entity.SettingEntity#currencyPosition
	 **/
	public static volatile SingularAttribute<SettingEntity, CurrencyPosition> currencyPosition;
	
	/**
	 * @see com.jdc.balance.core.model.entity.SettingEntity#decimalPlace
	 **/
	public static volatile SingularAttribute<SettingEntity, DecimalPlace> decimalPlace;

}

