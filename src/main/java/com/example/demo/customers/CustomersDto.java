package com.example.demo.customers;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class CustomersDto {
	private Integer customerId;

	private String name;

	private String address;

	private String website;

	private String creditLimit; // 신용한도
}
