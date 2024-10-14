package com.example.demo;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.employees.Employees;
import com.example.demo.employees.EmployeesDto;
import com.example.demo.employees.EmployeesService;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataTypes;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.HttpPlatformRequest;
import com.nexacro.java.xapi.tx.HttpPlatformResponse;
import com.nexacro.java.xapi.tx.PlatformException;
import com.nexacro.java.xapi.tx.PlatformType;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class HelloController {

	private final EmployeesService employeesService;

	@GetMapping("/base")
	public String welcome() {
		return "redirect:/np0819/index.html";
	}

	@PostMapping("/search")
	public void handlePostRequest(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");
		System.out.print(inds);

		String fullName = inds.getString(0, "FULLNAME");
		String fromDate = inds.getString(0, "FROMDATE");
		String toDate = inds.getString(0, "TODATE");
		Integer manager = inds.getInt(0, "MANAGER");


		List<Employees> receivedEmployee;
		if (fullName != null && !fullName.trim().isEmpty() || (fromDate != null) || (toDate != null)
				|| (manager != null && manager != 0)) {
			receivedEmployee = employeesService.findByConditions(fullName, fromDate, toDate, manager);
		} else {
			receivedEmployee = employeesService.getAll();
		}

		DataSet outds = new DataSet("outDataset");

		outds.addColumn("EMPLOYEE_ID", DataTypes.STRING, 4);
		outds.addColumn("JOB_TITLE", DataTypes.STRING, 16);
		outds.addColumn("FIRST_NAME", DataTypes.STRING, 32);
		outds.addColumn("LAST_NAME", DataTypes.STRING, 32);
		outds.addColumn("EMAIL", DataTypes.STRING, 32);
		outds.addColumn("HIRE_DATE", DataTypes.STRING, 32);
		outds.addColumn("MANAGER_ID", DataTypes.STRING, 32);
		outds.addColumn("PHONE", DataTypes.STRING, 32);

		for (Employees employee : receivedEmployee) {
			int row = outds.newRow();
			outds.set(row, "EMPLOYEE_ID", employee.getEmployeeId());
			outds.set(row, "JOB_TITLE", employee.getJobTitle());
			outds.set(row, "FIRST_NAME", (employee.getFirstName() + " " + employee.getLastName()));
			outds.set(row, "LAST_NAME", (employee.getLastName()));
			outds.set(row, "EMAIL", employee.getEmail());
			outds.set(row, "HIRE_DATE", employee.getHireDate());
			outds.set(row, "PHONE", employee.getPhone());

			if (employee.getManagerId() != null) {
				outds.set(row, "MANAGER_ID",
						employee.getManagerId().getFirstName() + " " + employee.getManagerId().getLastName());
			} else {
				outds.set(row, "MANAGER_ID", employee.getManagerId());
			}

		}

		PlatformData respdata = new PlatformData();
		VariableList resVarList = respdata.getVariableList();

		respdata.addDataSet(outds);
		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "SUCC");

		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respdata);
		res.sendData();
	}

	// 관리자, 직업 콤보박스 리스트 조회
	@GetMapping("/empComboBox")
	public void handlePostRequest1(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		// 1.HttpServletRequest를 이용하여 HttpPlatformRequest 생성
		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();

		// 2.PlatformData 획득
		PlatformData pdata = req.getData();

		// 4. 데이터 처리
		List<Object[]> receivedManager = employeesService.getAllManager();
		List<Object[]> receivedJob = employeesService.getAllJobTitle();

		// 5. Output Dataset과 Variable List 생성
		DataSet outds = new DataSet("outDataset");
		outds.addColumn("MANAGER_ID", DataTypes.STRING, 32);
		outds.addColumn("MANAGER_NAME", DataTypes.STRING, 32);

		for (Object[] row : receivedManager) {

			String managerId = row[0].toString();
			String managerName = (String) row[1];
			int newRow = outds.newRow();

			outds.set(newRow, "MANAGER_ID", managerId);
			outds.set(newRow, "MANAGER_NAME", managerName);
		}

		DataSet outds2 = new DataSet("outDataset2");
		outds2.addColumn("JOB_TITLE", DataTypes.STRING, 32);
		System.out.print(receivedJob);

		for (Object[] row : receivedJob) {

			String jobTitle = row[0].toString();
			int newRow2 = outds2.newRow();

			outds2.set(newRow2, "JOB_TITLE", jobTitle);
		}

		// 6. PlatformData 추가
		PlatformData respdata = new PlatformData();
		VariableList resVarList = respdata.getVariableList();

		respdata.addDataSet(outds);
		respdata.addDataSet(outds2);

		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "SUCC");

		// 7. HttpServletResponse를 이용하여 HttpPlatformResponse 생성
		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respdata);
		res.sendData();
	}

	// 관리자 콤보박스 리스트 조회
	@GetMapping("/managersearch")
	public void managerSearch(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		// 1.HttpServletRequest를 이용하여 HttpPlatformRequest 생성
		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();

		// 2.PlatformData 획득
		PlatformData pdata = req.getData();

		// 4. 데이터 처리
		List<Object[]> receivedManager = employeesService.getAllManager();

		// 5. Output Dataset과 Variable List 생성
		DataSet outds = new DataSet("outDataset");
		outds.addColumn("MANAGER_ID", DataTypes.STRING, 32);
		outds.addColumn("MANAGER_NAME", DataTypes.STRING, 32);

		for (Object[] row : receivedManager) {

			String managerId = row[0].toString();
			String managerName = (String) row[1];
			int newRow = outds.newRow();

			outds.set(newRow, "MANAGER_ID", managerId);
			outds.set(newRow, "MANAGER_NAME", managerName);
		}

		// 6. PlatformData 추가
		PlatformData respdata = new PlatformData();
		VariableList resVarList = respdata.getVariableList();

		respdata.addDataSet(outds);

		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "SUCC");

		// 7. HttpServletResponse를 이용하여 HttpPlatformResponse 생성
		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respdata);
		res.sendData();
	}

	// 저장
	@PostMapping("/save")
	public void handlePostRequest3(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		// 데이터셋 출력
		Integer managerId = inds.getInt(0, "MANAGER");
		String firstName = inds.getString(0, "FIRSTNAME");
		String lastName = inds.getString(0, "LASTNAME");
		String jobTitle = inds.getString(0, "JOBTITLE");
		String email = inds.getString(0, "EMAIL");
		String emailDomain = inds.getString(0, "EMAILDOMAIN");
		Date hireDate = inds.getDateTime(0, "HIREDATE");
		String phone = inds.getString(0, "PHONE");

		String fullEmail = email + "@" + emailDomain;

		// Date를 LocalDate로 변환
		LocalDate hireDateLocalDate = hireDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

		// Employees 객체 생성 (Manager 설정을 위해)
		Employees manager1 = new Employees();
		manager1.setEmployeeId(managerId); // Manager ID 설정

		// EmployeesDto 객체 생성
		EmployeesDto employeeDto = new EmployeesDto();

		if (managerId != 0) {
			employeeDto.setManagerId(manager1);
		}
		
		employeeDto.setFirstName(firstName);
		employeeDto.setLastName(lastName);
		employeeDto.setJobTitle(jobTitle);
		employeeDto.setEmail(fullEmail);
		employeeDto.setHireDate(hireDateLocalDate);
		employeeDto.setPhone(phone);

		// 데이터 저장
		EmployeesDto savedEmployee = employeesService.save(employeeDto);

		DataSet outds = new DataSet("outDataset");
		outds.addColumn("JOB_TITLE", DataTypes.STRING, 10);
		outds.addColumn("FIRST_NAME", DataTypes.STRING, 2);
		outds.addColumn("EMAIL", DataTypes.STRING, 10);
		outds.addColumn("HIRE_DATE", DataTypes.DATE, 8);
		outds.addColumn("MANAGER_ID", DataTypes.STRING, 2);
		outds.addColumn("LAST_NAME", DataTypes.STRING, 256);
		outds.addColumn("PHONE", DataTypes.STRING, 256);

		int row = outds.newRow();
		outds.set(row, "JOB_TITLE", jobTitle);
		outds.set(row, "FIRST_NAME", firstName);
		outds.set(row, "EMAIL", email);
		outds.set(row, "HIRE_DATE", hireDate.toString());
		outds.set(row, "MANAGER_ID", manager1);
		outds.set(row, "LAST_NAME", lastName);
		outds.set(row, "PHONE", phone);

		// Response 데이터 생성
		PlatformData respdata = new PlatformData();
		VariableList resVarList = respdata.getVariableList();

		respdata.addDataSet(outds);
		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "SUCC");

		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respdata);
		res.sendData();
	}

	// 수정
	@PostMapping("/edit")
	public void handlePostRequest4(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		// 데이터셋 출력
		Integer employeesId = inds.getInt(0, "EMPLOYEESID");
		Integer manager = inds.getInt(0, "MANAGER");
		String firstName = inds.getString(0, "FIRSTNAME");
		String lastName = inds.getString(0, "LASTNAME");
		String jobTitle = inds.getString(0, "JOBTITLE");
		String email = inds.getString(0, "EMAIL");
		String emailDomain = inds.getString(0, "EMAILDOMAIN");
		Date hireDate = inds.getDateTime(0, "HIREDATE");
		String phone = inds.getString(0, "PHONE");

		String fullEmail = email + "@" + emailDomain;

		// Date를 LocalDate로 변환
		LocalDate hireDateLocalDate = hireDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

		// SimpleDateFormat을 사용하여 날짜 포맷팅
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
		String formattedHireDate = dateFormat.format(hireDate);

		// EmployeesDto 객체 생성
		EmployeesDto employeeDto = new EmployeesDto();

		if (manager == 0) {

			employeeDto.setEmployeeId(employeesId);
			employeeDto.setManagerId(null);
			employeeDto.setFirstName(firstName);
			employeeDto.setLastName(lastName);
			employeeDto.setJobTitle(jobTitle);
			employeeDto.setEmail(fullEmail);
			employeeDto.setHireDate(hireDateLocalDate);
			employeeDto.setPhone(phone);

			// 데이터 저장
			EmployeesDto savedEmployee = employeesService.save(employeeDto);

			DataSet outds = new DataSet("outDataset");
			outds.addColumn("EMPLOYEESID", DataTypes.STRING, 5);
			outds.addColumn("JOBTITLE", DataTypes.STRING, 10);
			outds.addColumn("FIRSTNAME", DataTypes.STRING, 2);
			outds.addColumn("EMAIL", DataTypes.STRING, 10);
			outds.addColumn("EMAILDOMAIN", DataTypes.STRING, 10);
			outds.addColumn("HIREDATE", DataTypes.DATE, 8);
			outds.addColumn("MANAGER", DataTypes.STRING, 2);
			outds.addColumn("LASTNAME", DataTypes.STRING, 256);
			outds.addColumn("PHONE", DataTypes.STRING, 256);

			int row = outds.newRow();
			outds.set(row, "EMPLOYEESID", employeesId.toString());
			outds.set(row, "JOBTITLE", jobTitle);
			outds.set(row, "FIRSTNAME", firstName);
			outds.set(row, "EMAIL", email);
			outds.set(row, "EMAILDOMAIN", emailDomain);
			outds.set(row, "HIREDATE", formattedHireDate.toString());

			outds.set(row, "MANAGER", manager);
			outds.set(row, "LASTNAME", lastName);
			outds.set(row, "PHONE", phone);

			// Response 데이터 생성
			PlatformData respdata = new PlatformData();
			VariableList resVarList = respdata.getVariableList();

			respdata.addDataSet(outds);
			resVarList.add("ErrorCode", 0);
			resVarList.add("ErrorMsg", "SUCC");

			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
			res.setData(respdata);
			res.sendData();

		} else {
			Employees manager1 = new Employees();
			manager1.setEmployeeId(manager); // Manager ID 설정

			employeeDto.setEmployeeId(employeesId);
			employeeDto.setManagerId(manager1);
			employeeDto.setFirstName(firstName);
			employeeDto.setLastName(lastName);
			employeeDto.setJobTitle(jobTitle);
			employeeDto.setEmail(fullEmail);
			employeeDto.setHireDate(hireDateLocalDate);
			employeeDto.setPhone(phone);

			// 데이터 저장
			EmployeesDto savedEmployee = employeesService.save(employeeDto);

			DataSet outds = new DataSet("outDataset");
			outds.addColumn("EMPLOYEESID", DataTypes.STRING, 5);
			outds.addColumn("JOBTITLE", DataTypes.STRING, 10);
			outds.addColumn("FIRSTNAME", DataTypes.STRING, 2);
			outds.addColumn("EMAIL", DataTypes.STRING, 10);
			outds.addColumn("EMAILDOMAIN", DataTypes.STRING, 10);
			outds.addColumn("HIREDATE", DataTypes.DATE, 8);
			outds.addColumn("MANAGER", DataTypes.STRING, 2);
			outds.addColumn("LASTNAME", DataTypes.STRING, 256);
			outds.addColumn("PHONE", DataTypes.STRING, 256);

			int row = outds.newRow();
			outds.set(row, "EMPLOYEESID", employeesId.toString());
			outds.set(row, "JOBTITLE", jobTitle);
			outds.set(row, "FIRSTNAME", firstName);
			outds.set(row, "EMAIL", email);
			outds.set(row, "EMAILDOMAIN", emailDomain);
			outds.set(row, "HIREDATE", formattedHireDate.toString());
			outds.set(row, "MANAGER", manager.toString());
			outds.set(row, "LASTNAME", lastName);
			outds.set(row, "PHONE", phone);

			// Response 데이터 생성
			PlatformData respdata = new PlatformData();
			VariableList resVarList = respdata.getVariableList();

			respdata.addDataSet(outds);
			resVarList.add("ErrorCode", 0);
			resVarList.add("ErrorMsg", "SUCC");

			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
			res.setData(respdata);
			res.sendData();

		}

	}

	// 삭제
	@PostMapping("/delete")
	public void handlePostRequest5(HttpServletRequest request, HttpServletResponse response) throws Exception {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		Integer employeeId = inds.getInt(0, "EMPLOYEESID");

		employeesService.del(employeeId);

		PlatformData respdata = new PlatformData();
		VariableList resVarList = respdata.getVariableList();

		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "SUCC");

		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respdata);
		res.sendData();
	}

}
