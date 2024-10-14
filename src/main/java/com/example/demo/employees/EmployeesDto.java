package com.example.demo.employees;



import java.time.LocalDate;

import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmployeesDto {
	private Integer employeeId;

	private String firstName;

	private String lastName;

	private String email;

	private String phone;

	private LocalDate hireDate;

	private Employees managerId;

	private String jobTitle;

	
	 public static EmployeesDto toDto(Employees e) {
	        return EmployeesDto.builder()
	        		.employeeId(e.getEmployeeId())
					.firstName(e.getFirstName())
					.lastName(e.getLastName())
					.email(e.getEmail())
					.phone(e.getPhone())
					.hireDate(e.getHireDate())
					.managerId(e.getManagerId())
					.jobTitle(e.getJobTitle())
					.build();
	    }
}
