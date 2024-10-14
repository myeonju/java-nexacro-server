package com.example.demo.wharehouse;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.example.demo.locations.Locations;

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
@Table(name = "WAREHOUSES")
public class Warehouse {

	@Id
	@Column(name = "WAREHOUSE_ID", nullable = false, length = 255)
	private String warehouseId;

	@Column(name = "WAREHOUSE_NAME")
	private String warehouseName;

	@ManyToOne
	@JoinColumn(name = "LOCATION_ID", nullable = false)
	private Locations locations;
	
	@Transient
    private Long sequenceValue;
	

	public Warehouse toEntity(WarehouseDto warehouseDto) {
		return Warehouse.builder()
				.warehouseId(warehouseDto.getWarehouseId())
				.warehouseName(warehouseDto.getWarehouseName())
				.locations(warehouseDto.getLocations())
				.build();
	}

}
