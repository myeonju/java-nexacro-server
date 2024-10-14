package com.example.demo.product;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.example.demo.productCategory.ProductCategories;

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
@Table(name = "PRODUCTS")
public class Products {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productId;

    @Column(name = "PRODUCT_NAME", nullable = false, length = 255)
    private String productName;

    @Column(name = "DESCRIPTION", length = 2000)
    private String description;

    @Column(name = "STANDARD_COST", precision = 9, scale = 2)
    private Double standardCost;

    @Column(name = "LIST_PRICE", precision = 9, scale = 2)
    private Double listPrice;

    @ManyToOne
    @JoinColumn(name = "CATEGORY_ID", nullable = false)
    private ProductCategories productCategory;
    
    public Products toEntity(ProductsDto productsDto) {
		return Products.builder()
				.productId(productsDto.getProductId())
				.productName(productsDto.getProductName())
				.description(productsDto.getDescription())
				.standardCost(productsDto.getStandardCost())
				.listPrice(productsDto.getListPrice())
				.productCategory(productsDto.getProductCategory())
				.build();
	}
}
