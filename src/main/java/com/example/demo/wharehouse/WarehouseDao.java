package com.example.demo.wharehouse;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface WarehouseDao extends JpaRepository<Warehouse, String> {

	// 조건 조회
	@Query("SELECT w " +
		   "FROM Warehouse w " +
		   		"JOIN w.locations l " +
		   		"JOIN l.countries c " +
		   		"JOIN c.regions r " +
		   "WHERE (:regionId IS 0 OR r.regionId = :regionId) " +
		   		"AND (:countryId IS NULL OR c.countryId = :countryId) " +
		   		"AND (:locationId IS 0 OR l.locationId = :locationId) " +
		   "ORDER BY w.warehouseId ASC")
	List<Warehouse> findByConditions(Integer regionId, String countryId, Integer locationId);

	//시퀀스
	@Query(value = "SELECT WAREHOUSE_SEQ.NEXTVAL FROM DUAL", nativeQuery = true)
    Long getNextSequenceValue();
}
