package com.example.demo.orderItems;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemsDao extends JpaRepository<OrderItems, OrderItemsId> {

	@Query("SELECT p.productName, " +
				"COALESCE((SELECT SUM(i.quantity) FROM Inventories i WHERE i.product = p), 0) AS inventoryQuantity, " +
				"COALESCE(TRUNC(SUM(oi.quantity)), 0) AS orderItemQuantity, " +
				"COALESCE(SUM(oi.quantity * oi.unitPrice), 0) AS sumUnitPrice " +
		   "FROM Products p " +
		   		"LEFT JOIN OrderItems oi ON p = oi.product " +
		   "WHERE p.productCategory.categoryId = :categoryId " +
		   "GROUP BY p.productId, p.productName " +
		   "ORDER BY p.productName")
	List<Object[]> findProductDetailsByCategoryId(Integer categoryId);


	@Modifying
	@Query(value = "BEGIN " +
                   "insert_order_item(:orderId, :itemId, :productId, :amount, :listPrice); " +
                   "END;", 
           nativeQuery = true)
	void callInsertOrderItemProcedure(Integer orderId, Integer itemId, Integer productId, Integer amount, Double listPrice);
	
	
	// 카테고리별 주문 목록
	@Query("SELECT pc.categoryName, " +
	              "p.productName, " +
	              "TO_CHAR(o.orderDate, 'YYYY-MM') AS orderYearMonth, " +
	              "COUNT(p.productName) AS productCount " +
             "FROM ProductCategories pc " +
             	  "JOIN Products p ON pc.categoryId = p.productCategory.categoryId " +
             	  "JOIN OrderItems oi ON p.productId = oi.product.productId " +
             	  "JOIN Orders o ON oi.order.orderId = o.orderId " +
            "WHERE (:category IS Null OR :category IS 0  OR pc.categoryId = :category) " + // category 조건
              "AND (:product IS NULL OR UPPER(p.productName) LIKE UPPER(CONCAT('%', :product, '%'))) " + // productName 조건 수정
              "AND (:fromDate IS NULL OR o.orderDate >= TO_DATE(:fromDate, 'YYYYMMDD')) " + // fromDate 조건
              "AND (:toDate IS NULL OR o.orderDate <= TO_DATE(:toDate, 'YYYYMMDD')) " + // toDate 조건
            "GROUP BY pc.categoryName, p.productName, TO_CHAR(o.orderDate, 'YYYY-MM') " +
            "ORDER BY pc.categoryName, p.productName, orderYearMonth")
	List<Object[]> findProductOrdersGroupedByCategoryAndDate(@Param("category") Integer category,
	                                                         @Param("product") String product,
	                                                         @Param("fromDate") String fromDate,
	                                                         @Param("toDate") String toDate);
	    
}
