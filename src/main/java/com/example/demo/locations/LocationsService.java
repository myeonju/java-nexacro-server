package com.example.demo.locations;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class LocationsService {
	private final LocationsDao locationsDao;
	
	//address로 조회
	public Locations findByAddress(String address) {
		return locationsDao.findByAddress(address);	
	}
	
	
}
