package com.jdc.balance.core.model.entity;

import com.jdc.balance.core.model.entity.audit.AuditTimeMetadata;
import com.jdc.balance.core.model.entity.consts.CurrencyPosition;
import com.jdc.balance.core.model.entity.consts.DecimalPlace;
import com.jdc.balance.core.util.BalanceConstant;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@Entity(name = BalanceConstant.EntityName.SETTING)
@Table(name = BalanceConstant.TABLE_PREFIX_MASTER + "settings")
public class SettingEntity extends AuditTimeMetadata {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "decimal_place", nullable = false)
	private DecimalPlace decimalPlace;

	@Column(name = "currency_position", nullable = false)
	private CurrencyPosition currencyPosition;

	@OneToOne(optional = false)
	private UserEntity user;

	@ManyToOne(optional = false)
	private CurrencyEntity currency;

}
