package com.example.demo.countries;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CountriesDao extends JpaRepository<Countries, String> {
	
	// 국가 이름 리스트 조회
	@Query("SELECT c FROM Countries c")
	List<Countries> findByContryIdAndCountryName();
	
}
