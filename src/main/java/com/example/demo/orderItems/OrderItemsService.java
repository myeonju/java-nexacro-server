package com.example.demo.orderItems;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.inventories.InventoriesDao;
import com.example.demo.product.Products;
import com.example.demo.product.ProductsDao;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderItemsService {
	private final OrderItemsDao orderItemsDao;
	private final ProductsDao productsDao;
	private final InventoriesDao inventoriesDao;

	// 전체 조회
	public List<OrderItems> getAll() {
		return orderItemsDao.findAll();
	}

	// 카테고리별 주문 목록 상품명 조회
	public List<Products> getOrderProductName(String categoryName) {
		return productsDao.findProductNamesByCategoryName(categoryName);
	}

	// 카테고리별 주문 목록 상품 Name 상품개수 조회
	public List<Object[]> getProductNameAndQuantity(String categoryName) {
		return inventoriesDao.findProductNamesAndQuantitiesByCategoryName(categoryName);
	}

	// 카테고리별 주문 목록 조회
	public List<Object[]> getOrderListByCategory(Integer categoryId) {
		return orderItemsDao.findProductDetailsByCategoryId(categoryId);
	}

	// 프로시저를 통한 주문
	@Transactional
	public Integer insertOrderWithItem(Integer orderId, Integer itemId, Integer productId, Integer amount,
			Double listPrice) {
		orderItemsDao.callInsertOrderItemProcedure(orderId, itemId, productId, amount, listPrice);
		return 0;
	}

	// 주문 리스트 조회
	public List<Object[]> findProductOrdersGroupedByCategoryAndDate(Integer category, String product, String fromDate, String toDate) {
	    return orderItemsDao.findProductOrdersGroupedByCategoryAndDate(category, product, fromDate, toDate);
	}
}
