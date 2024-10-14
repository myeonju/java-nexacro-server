package com.example.demo.employees;


import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

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
//@ToString
@Builder
public class Employees {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "emp_seq")
	@SequenceGenerator(name = "emp_seq", sequenceName = "EMPLOYEE_SEQ", allocationSize = 1, initialValue = 200)
	private Integer employeeId;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "email")
	private String email;

	@Column(name = "phone")
	private String phone;

	@Column(name = "hire_date")
	private LocalDate hireDate;

	@ManyToOne
	@JoinColumn(name = "manager_id")
	private Employees managerId;

	@Column(name = "job_title")
	private String jobTitle;

	public Employees toEntity(EmployeesDto employeesDto) {
		return Employees.builder()
				.employeeId(employeesDto.getEmployeeId())
				.firstName(employeesDto.getFirstName())
				.lastName(employeesDto.getLastName())
				.email(employeesDto.getEmail())
				.phone(employeesDto.getPhone())
				.hireDate(employeesDto.getHireDate())
				.managerId(employeesDto.getManagerId())
				.jobTitle(employeesDto.getJobTitle())
				.build();
	}

}
