package com.example.demo.wharehouse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class sequenceService {
	@Autowired
    private WarehouseDao warehouseDao; 

    public Long getNextSequenceValue() {
        // 시퀀스 값을 가져오는 로직
        return warehouseDao.getNextSequenceValue();
    }

}
