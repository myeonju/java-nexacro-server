package com.example.demo.product;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.inventories.InventoriesDao;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductsService {

	private final ProductsDao productsDao;
	private final InventoriesDao inventoriesDao;

	// pk로 검색
	public ProductsDto getProductById(int productId) {
		Products e = productsDao.findById(productId).orElse(null);
		if (e == null) {
			return null;
		} else {
			return new ProductsDto().todto(e);
		}
	}

	// 저장
	@Transactional
	public ProductsDto save(ProductsDto productsDto) {
		Products e = productsDao.save(new Products().toEntity(productsDto));
	
		return new ProductsDto().todto(e);

	}

	// 삭제
	public void productDel(Integer productId) throws Exception {
		try {
			productsDao.deleteById(productId);
		} catch (Exception e) {
			throw new Exception("Error occurred while deleting warehouse with ID " + productId, e);
		}
	}
	
	// 상품명, 개수 리스트 조회
	public List<Object[]> getAllProductCount(){
		return productsDao.findProductCountByCategory();
	}
	
	// 상품 목록 조회
	public List<Object[]> getAllProductWithInventory(){
		return productsDao.findProductsWithInventory();
	}
}
