package com.example.demo.employees;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeesDao extends JpaRepository<Employees, Integer> {

	// 관리자 리스트 조회
	@Query("SELECT DISTINCT e.managerId.employeeId" +
			", CONCAT(m.firstName, ' ', m.lastName) AS fullName "  +
		  "FROM Employees e " + "INNER JOIN e.managerId m " +
		  "GROUP BY e.managerId.employeeId, m.firstName, m.lastName " + "HAVING COUNT(e.employeeId) > 0 " +
		  "ORDER BY e.managerId.employeeId ASC")
	List<Object[]> findManagerNamesByManagerId();

	List<Employees> findAllByOrderByEmployeeIdAsc();

	// 조건 조회
	@Query("SELECT e + "+ 
		   "FROM Employees e " +
		       "LEFT JOIN e.managerId m " +
		   "WHERE (:fullName IS NULL OR UPPER(CONCAT(e.firstName, ' ', e.lastName)) LIKE UPPER(CONCAT('%', :fullName, '%')) " +
		       "OR UPPER(e.firstName) LIKE UPPER(CONCAT('%', :fullName, '%')) " +
		       "OR UPPER(e.lastName) LIKE UPPER(CONCAT('%', :fullName, '%'))) " +  
		       "AND (:dateFrom IS NULL OR e.hireDate >= :dateFrom) " +
		       "AND (:dateTo IS NULL OR e.hireDate <= :dateTo) " +
		       "AND (:managerId IS NULL OR :managerId IS 0 OR e.managerId.employeeId = :managerId) " +
		   "ORDER BY e.employeeId ASC")
	List<Employees> findByConditions(String fullName, LocalDate dateFrom, LocalDate dateTo, Integer managerId);
	
	// 직책 리스트 조회
	@Query("SELECT DISTINCT jobTitle FROM Employees")
	List<Object[]> findByJobTitle();

}
