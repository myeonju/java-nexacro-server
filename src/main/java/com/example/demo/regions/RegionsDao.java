package com.example.demo.regions;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionsDao extends JpaRepository<Regions, Integer> {

	//지역 이름 리스트 조회
	@Query("SELECT r FROM Regions r")
	List<Regions> findByRegionIdAndRegionName();
	

}
