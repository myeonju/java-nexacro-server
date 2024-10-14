package com.example.demo.inventories;

import com.example.demo.product.Products;
import com.example.demo.wharehouse.Warehouse;

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
public class InventoriesDto {
	private Products product;

	private Warehouse warehouse;

	private Integer quantity;

	public static InventoriesDto todto(Inventories i) {
		return InventoriesDto.builder()
				.product(i.getProduct())
				.warehouse(i.getWarehouse())
				.quantity(i.getQuantity())
				.build();
	}
	
}
