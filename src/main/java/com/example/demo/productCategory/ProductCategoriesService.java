package com.example.demo.productCategory;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductCategoriesService {
	private final ProductCategoriesDao productCategoriesDao;

	// 카테고리 이름
	public boolean isProductCategory(String categoryName) {
		return !productCategoriesDao.findByCategoryName(categoryName).isEmpty();
	}
	
	// 카테고리 등록
	public ProductCategoriesDto save(ProductCategoriesDto productCategoriesDto) {
		ProductCategories pC = productCategoriesDao.save(new ProductCategories().toEntity(productCategoriesDto));
		return new ProductCategoriesDto().toDto(pC);
	}

	// 상품명, 개수 리스트 조회
	public Integer getCategoryId(String categoryName) {
		return productCategoriesDao.findByCategoryIdByCategoryName(categoryName);
	}
	
	
}
