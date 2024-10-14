package com.example.demo.orders;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.example.demo.customers.Customers;
import com.example.demo.employees.Employees;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
@Table(name = "ORDERS")
public class Orders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer orderId;

	@ManyToOne
	@JoinColumn(name = "CUSTOMER_ID")
	private Customers customer;

	@Column(name = "STATUS", length = 20, nullable = false)
	private String status;

	@ManyToOne
	@JoinColumn(name = "SALESMAN_ID")
	private Employees salesman;

	@Column(name = "ORDER_DATE", nullable = false)
	private Date orderDate;

}
