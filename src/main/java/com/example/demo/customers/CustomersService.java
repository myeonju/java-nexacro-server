package com.example.demo.customers;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class CustomersService {

	private final CustomersDao customersDao;

	// 이름으로 검색
	public ArrayList<Customers> getCustomers(String name) {
		return customersDao.findByName(name);
	}

	// 이름으로 로그인
	public boolean isCustomerExist(String name) {
		// 해당 이름으로 검색하여 결과가 비어있지 않으면 true, 비어있으면 false
		return !customersDao.findByName(name).isEmpty();
	}

	// customers 조회
	public Customers getAllcustomers(Integer customerId) {
		return customersDao.findByCustomerId(customerId);
	}

}
