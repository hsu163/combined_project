package com.jdc.balance.core.model.entity;

import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.ListAttribute;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(CategoryEntity.class)
public abstract class CategoryEntity_ extends com.jdc.balance.core.model.entity.audit.AuditTimeMetadata_ {

	public static final String INCOME = "income";
	public static final String NAME = "name";
	public static final String ICON = "icon";
	public static final String ID = "id";
	public static final String TRANSACTIONS = "transactions";
	public static final String USER = "user";

	
	/**
	 * @see com.jdc.balance.core.model.entity.CategoryEntity#income
	 **/
	public static volatile SingularAttribute<CategoryEntity, Boolean> income;
	
	/**
	 * @see com.jdc.balance.core.model.entity.CategoryEntity#name
	 **/
	public static volatile SingularAttribute<CategoryEntity, String> name;
	
	/**
	 * @see com.jdc.balance.core.model.entity.CategoryEntity#icon
	 **/
	public static volatile SingularAttribute<CategoryEntity, IconEntity> icon;
	
	/**
	 * @see com.jdc.balance.core.model.entity.CategoryEntity#id
	 **/
	public static volatile SingularAttribute<CategoryEntity, Long> id;
	
	/**
	 * @see com.jdc.balance.core.model.entity.CategoryEntity#transactions
	 **/
	public static volatile ListAttribute<CategoryEntity, TransactionEntity> transactions;
	
	/**
	 * @see com.jdc.balance.core.model.entity.CategoryEntity
	 **/
	public static volatile EntityType<CategoryEntity> class_;
	
	/**
	 * @see com.jdc.balance.core.model.entity.CategoryEntity#user
	 **/
	public static volatile SingularAttribute<CategoryEntity, UserEntity> user;

}

