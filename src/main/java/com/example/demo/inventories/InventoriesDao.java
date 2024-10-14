package com.example.demo.inventories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoriesDao extends JpaRepository<Inventories, InventoriesId> {

	// 조건조회
	@Query("SELECT i FROM Inventories i " +
				"JOIN i.product p " +
				"JOIN p.productCategory pc " +
				"JOIN i.warehouse w " +
				"JOIN w.locations l " +
				"JOIN l.countries c " +
				"JOIN c.regions r " +
		   "WHERE (:categoryId IS 0 OR pc.categoryId = :categoryId) " +
		   		"AND (:productName IS NULL OR LOWER(p.productName) LIKE LOWER(CONCAT('%', :productName, '%'))) " +
		   		"AND (:regionId IS 0 OR r.regionId = :regionId) " +
		   		"AND (:countryId IS NULL OR c.countryId = :countryId) " +
		   		"AND (:locationId IS 0 OR l.locationId = :locationId) " +
		   		"AND (:warehouseName IS NULL OR LOWER(w.warehouseName) LIKE LOWER(CONCAT('%', :warehouseName, '%'))) " +
		   "ORDER BY LOWER(i.product.productName) ASC")
	List<Inventories> findByConditions(Integer categoryId, String productName, Integer regionId, String countryId, Integer locationId, String warehouseName);

	// 프로시저
	@Modifying
	@Query(value = "CALL SP_BICITEM_INS(:productId, :amount)", nativeQuery = true)
	void callsBicitemIns(Integer productId, Integer amount);

	// productId 존재 여부 확인
	@Query("SELECT CASE WHEN COUNT(i) > 0 THEN true ELSE false END " + 
		   "FROM Inventories i "+ 
		   "WHERE i.product.id = :productId")
	boolean existsByProductId(Integer productId);

	// 카테고리 이름으로 제품 NAME과 재고 수량 조회
	@Query("SELECT p.productName, i.quantity " + 
		   "FROM Inventories i " + 
				"JOIN i.product p "+ 
				"JOIN p.productCategory pc " + 
		   "WHERE pc.categoryName = :categoryName")
	List<Object[]> findProductNamesAndQuantitiesByCategoryName(String categoryName);

	// productId, maxQuantity, minQuantity 조회
	@Query("SELECT MAX(i.quantity) AS maxQuantity, MIN(i.quantity) AS minQuantity " + 
		   "FROM Inventories i "+ 
		   "WHERE i.product.productId = :productId")
	List<Object[]> findMinMaxQuantityByProductId(Integer productId);

	// 주문 목록에 포함된 PENDING 상품 조회
	@Query("SELECT DISTINCT oi.product.id " + 
		   "FROM OrderItems oi " + 
		   		"JOIN oi.order o " + 
		   "WHERE o.status = 'PENDING'")
	List<Integer> findDistinctProductIdsByPendingStatus();

}
