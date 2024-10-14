package com.example.demo.productCategory;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class ProductCategoriesDto {

	private Integer categoryId;
	private String categoryName;
	
	public static ProductCategoriesDto toDto(ProductCategories pC) {
		return ProductCategoriesDto.builder()
				.categoryId(pC.getCategoryId())
				.categoryName(pC.getCategoryName())
				.build();
	}
}
