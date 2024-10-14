package com.example.demo.product;

import com.example.demo.productCategory.ProductCategories;

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
public class ProductsDto {

	private Integer productId;

	private String productName;

	private String description;

	private Double standardCost;

	private Double listPrice;

	private ProductCategories productCategory;

	public static ProductsDto todto(Products p) {
		return ProductsDto.builder().productId(p.getProductId()).productName(p.getProductName())
				.description(p.getDescription()).standardCost(p.getStandardCost()).listPrice(p.getListPrice())
				.productCategory(p.getProductCategory()).build();
	}
	
	public Products toEntity() {
	    return Products.builder()
	            .productId(this.productId)
	            .productName(this.productName)
	            .description(this.description)
	            .standardCost(this.standardCost)
	            .listPrice(this.listPrice)
	            .productCategory(this.productCategory)
	            .build();
	}
}
