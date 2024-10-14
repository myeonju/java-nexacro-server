package com.example.demo.productCategory;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductCategoriesDao extends JpaRepository<ProductCategories, Long> {

	// 카테고리 이름 검색
	ArrayList<ProductCategories> findByCategoryName(String categoryName);
	
	// 카테고리 리스트 조회
	@Query("SELECT pC FROM ProductCategories pC")
	List<ProductCategories> findByCategoryIdAndCategoryName();

	@Query("SELECT pc.categoryId " +
		   "FROM ProductCategories pc " +
		   "WHERE pc.categoryName = :categoryName")
	Integer findByCategoryIdByCategoryName(String categoryName);
	
	
}
