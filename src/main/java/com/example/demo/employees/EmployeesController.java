package com.example.demo.employees;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/employees") 
public class EmployeesController {
	@Autowired
	private EmployeesService service;
	

	// HelloController.java
	
}
