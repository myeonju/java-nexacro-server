package com.example.demo.inventories;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.example.demo.product.Products;
import com.example.demo.wharehouse.Warehouse;

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
@Table(name = "INVENTORIES")
public class Inventories {

	@EmbeddedId
	private InventoriesId id;	

	@ManyToOne
	@MapsId("productId")
	@JoinColumn(name = "PRODUCT_ID", nullable = false)
	private Products product;

	@ManyToOne
	@MapsId("warehouseId")
	@JoinColumn(name = "WAREHOUSE_ID", nullable = false)
	private Warehouse warehouse;

	@Column(name = "QUANTITY", nullable = false)
	private Integer quantity;

	
	public Inventories toEntity(InventoriesDto inventoriesDto) {
	    // InventoriesDto에서 productId와 warehouseId를 추출하여 InventoriesId를 생성
	    InventoriesId inventoriesId = new InventoriesId(
	        inventoriesDto.getProduct().getProductId(),
	        inventoriesDto.getWarehouse().getWarehouseId()
	    );

	    return Inventories.builder()
	            .id(inventoriesId)
	            .product(inventoriesDto.getProduct())
	            .warehouse(inventoriesDto.getWarehouse())
	            .quantity(inventoriesDto.getQuantity())
	            .build();
	}
}
