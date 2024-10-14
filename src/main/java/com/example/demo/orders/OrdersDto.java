package com.example.demo.orders;

import java.util.Date;

import com.example.demo.customers.Customers;
import com.example.demo.employees.Employees;

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
public class OrdersDto {
	private Integer orderId;

	private Customers customer;

	private String status;

	private Employees salesman;

	private Date orderDate;

}
