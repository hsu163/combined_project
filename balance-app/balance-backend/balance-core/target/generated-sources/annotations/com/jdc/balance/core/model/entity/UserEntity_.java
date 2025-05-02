package com.jdc.balance.core.model.entity;

import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(UserEntity.class)
public abstract class UserEntity_ extends com.jdc.balance.core.model.entity.audit.AuditorMetadata_ {

	public static final String PASSWORD = "password";
	public static final String NAME = "name";
	public static final String ADMIN = "admin";
	public static final String ID = "id";
	public static final String USERNAME = "username";

	
	/**
	 * @see com.jdc.balance.core.model.entity.UserEntity#password
	 **/
	public static volatile SingularAttribute<UserEntity, String> password;
	
	/**
	 * @see com.jdc.balance.core.model.entity.UserEntity#name
	 **/
	public static volatile SingularAttribute<UserEntity, String> name;
	
	/**
	 * @see com.jdc.balance.core.model.entity.UserEntity#admin
	 **/
	public static volatile SingularAttribute<UserEntity, Boolean> admin;
	
	/**
	 * @see com.jdc.balance.core.model.entity.UserEntity#id
	 **/
	public static volatile SingularAttribute<UserEntity, Long> id;
	
	/**
	 * @see com.jdc.balance.core.model.entity.UserEntity
	 **/
	public static volatile EntityType<UserEntity> class_;
	
	/**
	 * @see com.jdc.balance.core.model.entity.UserEntity#username
	 **/
	public static volatile SingularAttribute<UserEntity, String> username;

}

