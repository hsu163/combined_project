package com.jdc.balance.controller.admin;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.balance.core.payload.input.CurrencyInput;
import com.jdc.balance.core.payload.output.CurrencyOutput;
import com.jdc.balance.service.CurrencyService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("admin/currencies")
public class AdminCurrencyController {
	
	private final CurrencyService currencyService;
	
	@PostMapping
	public ResponseEntity<CurrencyOutput> createCurrency(
			@Validated @RequestBody CurrencyInput input, BindingResult result) {
		return new ResponseEntity<CurrencyOutput>(
				currencyService.create(input), 
				HttpStatus.CREATED);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<CurrencyOutput> updateCurrency(
			@PathVariable Long id,
			@Validated @RequestBody CurrencyInput input,
			BindingResult result
		) {
		return new ResponseEntity<CurrencyOutput>(
				currencyService.update(id, input), 
				HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Boolean> deleteCurrency(@PathVariable Long id) {
		return new ResponseEntity<Boolean>(
				currencyService.delete(id),
				HttpStatus.OK);
	}

}