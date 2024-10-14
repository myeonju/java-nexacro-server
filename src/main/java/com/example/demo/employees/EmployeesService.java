package com.example.demo.employees;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class EmployeesService {

	private final EmployeesDao employeesDao;

	// 전체 조회
	public List<Employees> getAll() {
	
		return employeesDao.findAllByOrderByEmployeeIdAsc();
	}

	// 관리자 리스트 조회
	public List<Object[]> getAllManager() {
		return employeesDao.findManagerNamesByManagerId();
	}

	// 직책 리스트 조회
	public List<Object[]> getAllJobTitle() {
		return employeesDao.findByJobTitle();
	}

	// 조건 조회
	@Transactional
	public List<Employees> findByConditions(String firstName, String dateFrom, String dateTo, Integer managerId) {
		LocalDate fromDate = parseDate(dateFrom);
		LocalDate toDate = parseDate(dateTo);
		return employeesDao.findByConditions(firstName, fromDate, toDate, managerId);
	}

	// pk로 검색
	public EmployeesDto getEmployees(int employeesId) {
		Employees e = employeesDao.findById(employeesId).orElse(null);
		if (e == null) {
			return null;
		} else {
			return new EmployeesDto().toDto(e);
		}
	}

	// 날짜 파싱 함수
	private LocalDate parseDate(String dateStr) {
		if (dateStr == null || dateStr.trim().isEmpty()) {
			return null;
		}
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
		try {
			return LocalDate.parse(dateStr, formatter);
		} catch (Exception e) {
			throw new IllegalArgumentException("Invalid date format: " + dateStr);
		}
	}

	// 직원 등록, 수정
	public EmployeesDto save(EmployeesDto employeesDto) {
		Employees e = employeesDao.save(new Employees().toEntity(employeesDto));
		return new EmployeesDto().toDto(e);
	}


	// 삭제
	public void del(int employeesId) throws Exception {
		try {
			employeesDao.deleteById(employeesId);
		} catch (Exception e) {
			throw new Exception("Error occurred while deleting employee with ID " + employeesId, e);
		}
	}
}
