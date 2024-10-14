package com.example.demo.orders;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersDao extends JpaRepository<Orders, Integer> {

	Integer callInsertOrderProcedure(Integer customerId);
}
