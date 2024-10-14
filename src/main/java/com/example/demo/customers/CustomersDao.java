package com.example.demo.customers;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomersDao extends JpaRepository<Customers, Integer>{
	
	// 이름으로 로그인
	ArrayList<Customers> findByName(String name);
	
	//id
	Customers findByCustomerId(Integer customerId);
}
