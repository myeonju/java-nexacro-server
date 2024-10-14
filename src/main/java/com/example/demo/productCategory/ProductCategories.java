package com.example.demo.productCategory;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
@Table(name = "PRODUCT_CATEGORIES")
public class ProductCategories {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pC_seq")
	@SequenceGenerator(name = "pC_seq", sequenceName = "PRODUCT_CATEGORIES_SEQ", allocationSize = 1, initialValue = 10)
    private Integer categoryId;

    @Column(name = "CATEGORY_NAME", nullable = false, length = 255)
    private String categoryName;
    
    public ProductCategories toEntity(ProductCategoriesDto productCategoriesDto) {
    	return ProductCategories.builder()
    			.categoryId(productCategoriesDto.getCategoryId())
    			.categoryName(productCategoriesDto.getCategoryName())
    			.build();
    }
}
