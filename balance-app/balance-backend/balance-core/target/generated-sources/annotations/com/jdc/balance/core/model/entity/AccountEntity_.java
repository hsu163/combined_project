package com.jdc.balance.core.model.entity;

import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.ListAttribute;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.math.BigDecimal;

@StaticMetamodel(AccountEntity.class)
public abstract class AccountEntity_ extends com.jdc.balance.core.model.entity.audit.AuditTimeMetadata_ {

	public static final String INCOMING_TRANSACTIONS = "incomingTransactions";
	public static final String AMOUNT = "amount";
	public static final String NAME = "name";
	public static final String ICON = "icon";
	public static final String ID = "id";
	public static final String TRANSACTIONS = "transactions";
	public static final String USER = "user";

	
	/**
	 * @see com.jdc.balance.core.model.entity.AccountEntity#incomingTransactions
	 **/
	public static volatile ListAttribute<AccountEntity, TransactionEntity> incomingTransactions;
	
	/**
	 * @see com.jdc.balance.core.model.entity.AccountEntity#amount
	 **/
	public static volatile SingularAttribute<AccountEntity, BigDecimal> amount;
	
	/**
	 * @see com.jdc.balance.core.model.entity.AccountEntity#name
	 **/
	public static volatile SingularAttribute<AccountEntity, String> name;
	
	/**
	 * @see com.jdc.balance.core.model.entity.AccountEntity#icon
	 **/
	public static volatile SingularAttribute<AccountEntity, IconEntity> icon;
	
	/**
	 * @see com.jdc.balance.core.model.entity.AccountEntity#id
	 **/
	public static volatile SingularAttribute<AccountEntity, Long> id;
	
	/**
	 * @see com.jdc.balance.core.model.entity.AccountEntity#transactions
	 **/
	public static volatile ListAttribute<AccountEntity, TransactionEntity> transactions;
	
	/**
	 * @see com.jdc.balance.core.model.entity.AccountEntity
	 **/
	public static volatile EntityType<AccountEntity> class_;
	
	/**
	 * @see com.jdc.balance.core.model.entity.AccountEntity#user
	 **/
	public static volatile SingularAttribute<AccountEntity, UserEntity> user;

}

