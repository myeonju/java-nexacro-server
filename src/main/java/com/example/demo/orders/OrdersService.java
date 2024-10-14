package com.example.demo.orders;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrdersService {
	private final OrdersDao ordersDao;

	@Transactional
    public Integer createOrder(Integer customerId) {
       
        return ordersDao.callInsertOrderProcedure(customerId);
    }
}
