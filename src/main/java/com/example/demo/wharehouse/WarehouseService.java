package com.example.demo.wharehouse;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.countries.Countries;
import com.example.demo.countries.CountriesDao;
import com.example.demo.locations.Locations;
import com.example.demo.locations.LocationsDao;
import com.example.demo.regions.Regions;
import com.example.demo.regions.RegionsDao;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class WarehouseService {
	private final WarehouseDao warehouseDao;
	private final RegionsDao regionsDao;
	private final CountriesDao countriesDao;
	private final LocationsDao locationsDao;
	private final sequenceService sequenceService;

	// 전체 조회
	public List<Warehouse> getAll() {
		return warehouseDao.findAll();
	}

	// 지역 리스트 조회
	public List<Regions> getAllRegions() {
		return regionsDao.findByRegionIdAndRegionName();
	}

	// 국가 리스트 조회
	public List<Countries> getAllCountries() {
		return countriesDao.findByContryIdAndCountryName();
	}

	// 위치 리스트 조회
	public List<Locations> getAllLocations(){
		return locationsDao.findLocationIdAndAddress();
	}

	// 조건 조회
	public List<Warehouse> findByConditions(Integer regionId, String countryId, Integer locationId) {
		
		return warehouseDao.findByConditions(regionId, countryId, locationId);

	}

	//pk로 검색
	public WarehouseDto getWarehouse(String warehouseId) {
		Warehouse w = warehouseDao.findById(warehouseId).orElse(null);
		if(w==null) {
			return null;
		}else {
			return new WarehouseDto().toDto(w);
		}
	}
	
	// 시퀀스 값 가져오기
	public Long getNextSequenceValue() {
		return sequenceService.getNextSequenceValue(); 
	}

	// 등록, 수정
	@Transactional
	public WarehouseDto save(WarehouseDto warehouseDto) {
		if (warehouseDto.getWarehouseId() == null) {
	        // 삽입 로직
	        Long sequenceValue = getNextSequenceValue();

	        Warehouse warehouse = Warehouse.builder()
	            .warehouseId(generateWarehouseId(sequenceValue, warehouseDto))
	            .warehouseName(warehouseDto.getWarehouseName())
	            .locations(warehouseDto.getLocations())
	            .sequenceValue(sequenceValue)
	            .build();

	        Warehouse savedWarehouse = warehouseDao.save(warehouse);
	        return WarehouseDto.toDto(savedWarehouse);
	    } else {
	        // 수정 로직
	        Warehouse existingWarehouse = warehouseDao.findById(warehouseDto.getWarehouseId())
	            .orElseThrow(() -> new IllegalArgumentException("해당 ID의 창고를 찾을 수 없습니다."));

	        existingWarehouse.setWarehouseName(warehouseDto.getWarehouseName());
	        existingWarehouse.setLocations(warehouseDto.getLocations());

	        Warehouse updatedWarehouse = warehouseDao.save(existingWarehouse);
	        return WarehouseDto.toDto(updatedWarehouse);
	    }
	}
	
	// wharehouseId
	private String generateWarehouseId(Long sequenceValue, WarehouseDto warehouseDto) {
		// 지역ID, 국가ID, 위치ID를 가져옴
		String regionId = warehouseDto.getLocations().getCountries().getRegions().getRegionId().toString();
		String countryId = warehouseDto.getLocations().getCountries().getCountryId();
		String locationId = warehouseDto.getLocations().getLocationId().toString();

		return regionId + "_" + countryId + "_" + locationId + "_" + sequenceValue;
	}
	
	// 삭제
	public void warehouseDel(String warehouseId) throws Exception {
		try {
			warehouseDao.deleteById(warehouseId);
		} catch (Exception e) {
			throw new Exception("Error occurred while deleting warehouse with ID " + warehouseId, e);
		}
	}
	
}
