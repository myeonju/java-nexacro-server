package com.example.demo.inventories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.product.Products;
import com.example.demo.product.ProductsDao;
import com.example.demo.productCategory.ProductCategories;
import com.example.demo.productCategory.ProductCategoriesDao;
import com.example.demo.wharehouse.Warehouse;
import com.example.demo.wharehouse.WarehouseDao;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InventoriesService {

	private final InventoriesDao inventoriesDao;
	private final ProductCategoriesDao productCategoriesDao;
	private final ProductsDao productsDao;
	private final WarehouseDao warehouseDao;

	// 전체 조회
	public List<Inventories> getAll() {
		return inventoriesDao.findAll();
	}

	// 카테고리 리스트 조회
	public List<ProductCategories> getAllCategories() {
		return productCategoriesDao.findByCategoryIdAndCategoryName();
	}

	// 상품 리스트 조회
	public List<Products> getAllProducts() {
		return productsDao.findByProductIdAndProductName();
	}

	// 조건 조회
	public List<Inventories> findByConditions(Integer categoryId, String productName, Integer regionId,
			String countryId, Integer locationId, String warehouseName) {

		return inventoriesDao.findByConditions(categoryId, productName, regionId, countryId, locationId, warehouseName);
	}

	// 프로시저를 통한 일괄 저장
	@Transactional
	public Integer inventoryBulkRegistration(Integer amount, Integer productId) {
		boolean exists = inventoriesDao.existsByProductId(productId);

		// exists가 false일때 실행
		if (!exists) {
			System.out.println("상품을 가지고 있는 창고가 존재하지 않습니다.");
			return 1;
		}

		// 현재 productId의 최대 수량을 조회
		List<Object[]> minMaxQuantities = inventoriesDao.findMinMaxQuantityByProductId(productId);
		if (minMaxQuantities.isEmpty()) {
			System.out.println("해당 상품의 재고 정보를 찾을 수 없습니다.");
			return 1;
		}

		Integer maxQuantity = (Integer) minMaxQuantities.get(0)[0]; 
		System.out.println("Max Quantity: " + maxQuantity);

		// AMOUNT가 음수일 경우 최대 수량과 비교
		if (amount < 0 && maxQuantity < Math.abs(amount)) {
			System.out.println("음수 값이 최대 수량보다 큽니다. 처리할 수 없습니다.");
			return 1;
		}

		// 프로시저 저장 로직으로 변경
		inventoriesDao.callsBicitemIns(productId, amount);
		return 0;

	}

	// warehouseId로 조회
	@Transactional
	public Warehouse findHouseById(String warehouseId) {
		return warehouseDao.findById(warehouseId).orElseThrow(() -> new RuntimeException("해당하는 ID를 찾을 수 없습니다."));
	}

	// 등록, 수정
	public InventoriesDto save(InventoriesDto inventoriesDto) {

		Inventories entity = new Inventories().toEntity(inventoriesDto);
		Inventories savedEntity = inventoriesDao.save(entity);
		return InventoriesDto.todto(savedEntity);
	}

	// warehouseId 및 productId로 인벤토리 업데이트
	@Transactional
	public void updateInventory(String warehouseId, Integer productId, Integer quantity) {
		InventoriesId inventoriesId = new InventoriesId(productId, warehouseId);
		Inventories existingInventories = inventoriesDao.findById(inventoriesId).orElse(null);

		if (existingInventories != null) {
			// 인벤토리가 존재할 경우 수량 업데이트
			existingInventories.setQuantity(quantity);
			inventoriesDao.save(existingInventories);

			System.out.println("인벤토리 업데이트 완료: " + existingInventories);
		} else {
			// 인벤토리가 존재하지 않을 경우 RuntimeException 발생
			throw new RuntimeException("인벤토리가 존재하지 않습니다: " + inventoriesId);
		}
	}

	// maxQuantity, minQuantity
	public List<Object[]> findMinMaxQuantityByProductId(Integer productId) {
		return inventoriesDao.findMinMaxQuantityByProductId(productId);
	}

	// 주문 목록에 포함된 PENDING 상품 조회
	public boolean isProductPending(Integer productId) {
		List<Integer> pendingProductIds = inventoriesDao.findDistinctProductIdsByPendingStatus();
		return pendingProductIds.contains(productId);
	}
}
