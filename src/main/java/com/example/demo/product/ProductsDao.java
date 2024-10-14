package com.example.demo.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsDao extends JpaRepository<Products, Integer> {

	// 카테고리 리스트 조회
	@Query("SELECT p FROM Products p")
	List<Products> findByProductIdAndProductName();

	boolean existsByProductName(String productName);

	// 상품명, 개수 조회
	@Query("SELECT c.categoryName, COUNT(p) AS productCount " +
		   "FROM Products p " +
		   		"RIGHT JOIN p.productCategory c " +
		   "GROUP BY c.categoryId, c.categoryName " +
		   "ORDER BY c.categoryName ASC")
	List<Object[]> findProductCountByCategory();

	// 카테고리별 주문 목록 상품명 조회
	@Query("SELECT p FROM Products p " +
				"JOIN p.productCategory pc " +
		   "WHERE pc.categoryName = :categoryName")
	List<Products> findProductNamesByCategoryName(String categoryName);

	// 상품 목록 조회
	@Query("SELECT p.productId, p.productName, p.listPrice, " +
				"COALESCE(SUM(i.quantity), 0) AS totalQuantity " +
		   "FROM Products p " +
		   		"LEFT JOIN Inventories i ON p.productId = i.id.productId " +
		   "GROUP BY p.productId, p.productName, p.listPrice " +
		   "ORDER BY p.productName ASC")
	List<Object[]> findProductsWithInventory();

}
