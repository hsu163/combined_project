package com.jdc.balance.core.model.entity;

import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.math.BigDecimal;
import java.time.LocalDate;

@StaticMetamodel(BudgetEntity.class)
public abstract class BudgetEntity_ extends com.jdc.balance.core.model.entity.audit.AuditTimeMetadata_ {

	public static final String MONTH = "month";
	public static final String LIMIT_AMOUNT = "limitAmount";
	public static final String ID = "id";
	public static final String CATEGORY = "category";

	
	/**
	 * @see com.jdc.balance.core.model.entity.BudgetEntity#month
	 **/
	public static volatile SingularAttribute<BudgetEntity, LocalDate> month;
	
	/**
	 * @see com.jdc.balance.core.model.entity.BudgetEntity#limitAmount
	 **/
	public static volatile SingularAttribute<BudgetEntity, BigDecimal> limitAmount;
	
	/**
	 * @see com.jdc.balance.core.model.entity.BudgetEntity#id
	 **/
	public static volatile SingularAttribute<BudgetEntity, Long> id;
	
	/**
	 * @see com.jdc.balance.core.model.entity.BudgetEntity#category
	 **/
	public static volatile SingularAttribute<BudgetEntity, CategoryEntity> category;
	
	/**
	 * @see com.jdc.balance.core.model.entity.BudgetEntity
	 **/
	public static volatile EntityType<BudgetEntity> class_;

}

