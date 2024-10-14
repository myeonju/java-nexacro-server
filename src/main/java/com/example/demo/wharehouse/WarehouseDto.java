package com.example.demo.wharehouse;

import com.example.demo.locations.Locations;

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
public class WarehouseDto {
	private String warehouseId;

	private String warehouseName;

	private Locations locations;
	
	public static WarehouseDto toDto(Warehouse w) {
		return WarehouseDto.builder()
				.warehouseId(w.getWarehouseId())
				.warehouseName(w.getWarehouseName())
				.locations(w.getLocations())
				.build();
	}
	
	public Warehouse toEntity() {
		return Warehouse.builder()
				.warehouseId(this.getWarehouseId())
				.warehouseName(this.getWarehouseName())
				.locations(this.getLocations())
				.build();
	}


}
