package com.example.demo.locations;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationsDao extends JpaRepository<Locations, Integer> {

	// 위치 주소 리스트 조회
	@Query("SELECT l FROM Locations l")
	List<Locations> findLocationIdAndAddress();

	// address값으로 조회
	Locations findByAddress(String address);
}
