package com.example.demo.wharehouse;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.countries.Countries;
import com.example.demo.locations.Locations;
import com.example.demo.locations.LocationsService;
import com.example.demo.regions.Regions;
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
public class WarehouseController {

	private final WarehouseService warehouseService;
	private final LocationsService locationService;

	// 조회
	@PostMapping("/warehouseSearch")
	public void handlePostRequest(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");
		System.out.print(inds);

		Integer regionId = inds.getInt(0, "REGIONS");
		String countryId = inds.getString(0, "COUNTRIES");
		Integer locationId = inds.getInt(0, "LOCATIONS");

		System.out.println("1::" + regionId);
		System.out.println("2::" + countryId);
		System.out.println("3:;" + locationId);

		List<Warehouse> receivedWarehouse;
		if (regionId != 0 || countryId != null || locationId != 0) {
			System.out.print("조건 받음!");
			receivedWarehouse = warehouseService.findByConditions(regionId, countryId, locationId);
		} else {
			System.out.print("전체 조회!");
			receivedWarehouse = warehouseService.getAll();
		}

		DataSet outds = new DataSet("outDataset");

		outds.addColumn("WAREHOUSE_ID", DataTypes.STRING, 4);
		outds.addColumn("REGIONS", DataTypes.STRING, 16);
		outds.addColumn("COUNTRIES", DataTypes.STRING, 32);
		outds.addColumn("LOCATIONS", DataTypes.STRING, 32);
		outds.addColumn("WAREHOUSE_NAME", DataTypes.STRING, 32);
		outds.addColumn("CHECK", DataTypes.STRING, 32);
		
		System.out.println("@@!:" + receivedWarehouse);
		for (Warehouse warehouse : receivedWarehouse) {
			int row = outds.newRow();
			outds.set(row, "WAREHOUSE_ID", warehouse.getWarehouseId());
			outds.set(row, "REGIONS", warehouse.getLocations().getCountries().getRegions().getRegionName());
			outds.set(row, "COUNTRIES", (warehouse.getLocations().getCountries().getCountryName()));
			outds.set(row, "LOCATIONS", (warehouse.getLocations().getAddress()));
			outds.set(row, "WAREHOUSE_NAME", warehouse.getWarehouseName());
			outds.set(row, "CHECK", "");
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

	// 콤보박스 리스트 조회
	@GetMapping("/warehouseCombobox")
	public void handlePostRequest1(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		// 1.HttpServletRequest를 이용하여 HttpPlatformRequest 생성
		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();

		// 2.PlatformData 획득
		PlatformData pdata = req.getData();

		// 4. 데이터 처리
		List<Regions> receivedRegion = warehouseService.getAllRegions();
		List<Countries> receivedCountries = warehouseService.getAllCountries();
		List<Locations> receivedLocations = warehouseService.getAllLocations();

		// 5. Output Dataset과 Variable List 생성
		DataSet outds = new DataSet("outDataset");
		outds.addColumn("REGION_ID", DataTypes.STRING, 32);
		outds.addColumn("REGION_NAME", DataTypes.STRING, 32);
		System.out.print("receivedRegion@@@@@@@@@:::::" + receivedRegion);

		for (Regions region : receivedRegion) {
			int newRow = outds.newRow();
			outds.set(newRow, "REGION_ID", region.getRegionId());
			outds.set(newRow, "REGION_NAME", region.getRegionName());
		}

		DataSet outds2 = new DataSet("outDataset2");
		outds2.addColumn("COUNTRY_ID", DataTypes.STRING, 32);
		outds2.addColumn("COUNTRY_NAME", DataTypes.STRING, 32);
		outds2.addColumn("REGION_ID", DataTypes.STRING, 32);
		System.out.println("receivedCountries@@@@@@@@@:::::" + receivedCountries);

		for (Countries country : receivedCountries) {
			int newRow2 = outds2.newRow();
			outds2.set(newRow2, "COUNTRY_ID", country.getCountryId());
			outds2.set(newRow2, "COUNTRY_NAME", country.getCountryName());
			outds2.set(newRow2, "REGION_ID", country.getRegions().getRegionId());
		}

		DataSet outds3 = new DataSet("outDataset3");
		outds3.addColumn("LOCATION_ID", DataTypes.STRING, 32);
		outds3.addColumn("ADDRESS", DataTypes.STRING, 32);
		outds3.addColumn("COUNTRY_ID", DataTypes.STRING, 32);
		System.out.println("receivedLocation@@@@@@@@@:::::" + receivedLocations);

		for (Locations location : receivedLocations) {
			int newRow3 = outds3.newRow();

			outds3.set(newRow3, "LOCATION_ID", location.getLocationId());
			outds3.set(newRow3, "ADDRESS", location.getAddress());
			outds3.set(newRow3, "COUNTRY_ID", location.getCountries().getCountryId());
		}

		// 6. PlatformData 추가
		PlatformData respdata = new PlatformData();
		VariableList resVarList = respdata.getVariableList();

		respdata.addDataSet(outds);
		respdata.addDataSet(outds2);
		respdata.addDataSet(outds3);

		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "SUCC");

		// 7. HttpServletResponse를 이용하여 HttpPlatformResponse 생성
		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respdata);
		res.sendData();
	}

	// 저장, 수정
	@PostMapping("/warehouseSave")
	public void handlePostRequest2(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		System.out.println("@@@@@@handlePostRequest2 호출됨");

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		if (inds == null) {
			System.out.println("@@@@@@DataSet 'inDataset' is null.");
			return;
		}

		// 전체 행(Row) 수를 가져옴
		int rowCount = inds.getRowCount();

		// 출력 데이터셋 생성
		DataSet outds = new DataSet("outDataset");
		outds.addColumn("WAREHOUSE_ID", DataTypes.STRING, 10);
		outds.addColumn("REGIONS", DataTypes.STRING, 10);
		outds.addColumn("COUNTRIES", DataTypes.STRING, 2);
		outds.addColumn("LOCATIONS", DataTypes.STRING, 10);
		outds.addColumn("WAREHOUSE_NAME", DataTypes.STRING, 100);

		// Response 데이터 생성
		PlatformData respdata = new PlatformData();
		VariableList resVarList = respdata.getVariableList();

		for (int i = 0; i < rowCount; i++) {
			String warehouseId = inds.getString(i, "WAREHOUSE_ID");
			String regions = inds.getString(i, "REGIONS");
			String countries = inds.getString(i, "COUNTRIES");
			String locations = inds.getString(i, "LOCATIONS");
			String warehouseName = inds.getString(i, "WAREHOUSE_NAME");
//			String checkStatus = inds.getString(i, "CHECK");

			System.out.println("Row " + i + ": regions: " + regions);
			System.out.println("warehouseId: " + warehouseId);
			System.out.println("countries: " + countries);
			System.out.println("locations: " + locations);
			System.out.println("warehouseName: " + warehouseName);
//			System.out.println("checkStatus : " + checkStatus);

//			int chkCount = 0;
			// checkStatus가 "1"인 경우에만 데이터 처리
//			if ("1".equals(checkStatus)) {
				// Locations 객체 조회
//				++chkCount;
				Locations locations1 = locationService.findByAddress(locations);
				System.out.println("location : " + locations1);

				// WarehouseDto 객체 생성
				WarehouseDto warehouseDto = new WarehouseDto();
				warehouseDto.setWarehouseId(warehouseId);
				warehouseDto.setLocations(locations1);
				warehouseDto.setWarehouseName(warehouseName);

				System.out.print("######" + warehouseDto);

				// 데이터 저장
				WarehouseDto savedWarehouse = warehouseService.save(warehouseDto);
				System.out.print("1@@@@@@");

				// 처리된 데이터를 출력 데이터셋에 추가
				int outRow = outds.newRow();
				outds.set(outRow, "WAREHOUSE_ID", warehouseId);
				outds.set(outRow, "REGIONS", regions);
				outds.set(outRow, "COUNTRIES", countries);
				outds.set(outRow, "LOCATIONS", locations);
				outds.set(outRow, "WAREHOUSE_NAME", warehouseName);
			}

//			if (chkCount == 0) {
//				resVarList.add("ErrorCode", -1);
//				resVarList.add("ErrorMsg", "선택된 행이 없습니다.");
//			}
//		}

		respdata.addDataSet(outds);
		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "SUCC");

		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respdata);
		res.sendData();
	}

	// 삭제
	@PostMapping("/warehouseDel")
	public void handlePostRequest5(HttpServletRequest request, HttpServletResponse response) throws Exception {
		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		// 응답 데이터 생성
		PlatformData respData = new PlatformData();
		VariableList resVarList = respData.getVariableList();

		try {
			// 전체 행(Row) 수를 가져옴
			int rowCount = inds.getRowCount();

			for (int i = 0; i < rowCount; i++) {
				String warehouseId = inds.getString(i, "WAREHOUSE_ID");
				String checkStatus = inds.getString(i, "CHECK");

				System.out.println("Row " + i + ": warehouseId: " + warehouseId + ", checkStatus: " + checkStatus);

				// checkStatus가 "1"인 경우에만 삭제 수행
				if ("1".equals(checkStatus)) {

					warehouseService.warehouseDel(warehouseId);
					System.out.println("Warehouse with ID " + warehouseId + " has been deleted.");
				}

				// 성공적으로 삭제된 경우
				resVarList.add("ErrorCode", 0);
				resVarList.add("ErrorMsg", "SUCC");

			}

		} catch (Exception e) {
			// 예외 발생 시
			resVarList.add("ErrorCode", -1);
			resVarList.add("ErrorMsg", "삭제 중 오류가 발생했습니다: " + e.getMessage());
		}

		// 응답 데이터를 클라이언트로 전송
		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respData);
		res.sendData();
	}
}
