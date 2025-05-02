package com.jdc.balance.core.model.entity;

import com.jdc.balance.core.model.entity.consts.TransactionType;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@StaticMetamodel(TransactionEntity.class)
public abstract class TransactionEntity_ extends com.jdc.balance.core.model.entity.audit.AuditTimeMetadata_ {

	public static final String NOTE = "note";
	public static final String AMOUNT = "amount";
	public static final String TARGET_ACCOUNT = "targetAccount";
	public static final String ID = "id";
	public static final String ISSUED_AT = "issuedAt";
	public static final String TYPE = "type";
	public static final String CATEGORY = "category";
	public static final String ACCOUNT = "account";

	
	/**
	 * @see com.jdc.balance.core.model.entity.TransactionEntity#note
	 **/
	public static volatile SingularAttribute<TransactionEntity, String> note;
	
	/**
	 * @see com.jdc.balance.core.model.entity.TransactionEntity#amount
	 **/
	public static volatile SingularAttribute<TransactionEntity, BigDecimal> amount;
	
	/**
	 * @see com.jdc.balance.core.model.entity.TransactionEntity#targetAccount
	 **/
	public static volatile SingularAttribute<TransactionEntity, AccountEntity> targetAccount;
	
	/**
	 * @see com.jdc.balance.core.model.entity.TransactionEntity#id
	 **/
	public static volatile SingularAttribute<TransactionEntity, Long> id;
	
	/**
	 * @see com.jdc.balance.core.model.entity.TransactionEntity#issuedAt
	 **/
	public static volatile SingularAttribute<TransactionEntity, LocalDateTime> issuedAt;
	
	/**
	 * @see com.jdc.balance.core.model.entity.TransactionEntity#type
	 **/
	public static volatile SingularAttribute<TransactionEntity, TransactionType> type;
	
	/**
	 * @see com.jdc.balance.core.model.entity.TransactionEntity#category
	 **/
	public static volatile SingularAttribute<TransactionEntity, CategoryEntity> category;
	
	/**
	 * @see com.jdc.balance.core.model.entity.TransactionEntity
	 **/
	public static volatile EntityType<TransactionEntity> class_;
	
	/**
	 * @see com.jdc.balance.core.model.entity.TransactionEntity#account
	 **/
	public static volatile SingularAttribute<TransactionEntity, AccountEntity> account;

}

