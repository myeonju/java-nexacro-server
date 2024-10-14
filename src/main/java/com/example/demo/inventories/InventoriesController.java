package com.example.demo.inventories;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.countries.Countries;
import com.example.demo.locations.Locations;
import com.example.demo.product.Products;
import com.example.demo.product.ProductsDto;
import com.example.demo.product.ProductsService;
import com.example.demo.productCategory.ProductCategories;
import com.example.demo.regions.Regions;
import com.example.demo.wharehouse.Warehouse;
import com.example.demo.wharehouse.WarehouseDto;
import com.example.demo.wharehouse.WarehouseService;
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
public class InventoriesController {

	private final InventoriesService inventoriesService;
	private final WarehouseService warehouseService;
	private final ProductsService productsService;
	private final InventoriesDao inventoriesDao;

	// 조회
	@PostMapping("/InventroySearch")
	public void handlePostRequest(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		Integer categoryId = inds.getInt(0, "CATEGORY");
		String productName = inds.getString(0, "PRODUCT_NAME");
		Integer regionId = inds.getInt(0, "REGION");
		String countryId = inds.getString(0, "COUNTRY");
		Integer locationId = inds.getInt(0, "ADDRESS");
		String warehouseName = inds.getString(0, "WAREHOUSE_NAME");

		List<Inventories> receivedInventroy;
		if (categoryId != 0 || productName != null || regionId != 0 || countryId != null || locationId != 0
				|| warehouseName != null) {
			receivedInventroy = inventoriesService.findByConditions(categoryId, productName, regionId, countryId,
					locationId, warehouseName);
		} else {
			receivedInventroy = inventoriesService.getAll();
		}

		DataSet outds = new DataSet("outDataset");

		outds.addColumn("CATEGORY", DataTypes.STRING, 4);
		outds.addColumn("CATEGORY_ID", DataTypes.STRING, 4);
		outds.addColumn("PRODUCT_NAME", DataTypes.STRING, 16);
		outds.addColumn("REGION", DataTypes.STRING, 32);
		outds.addColumn("COUNTRY", DataTypes.STRING, 32);
		outds.addColumn("ADDRESS", DataTypes.STRING, 32);
		outds.addColumn("WAREHOUSE_NAME", DataTypes.STRING, 32);
		outds.addColumn("WAREHOUSE_ID", DataTypes.STRING, 4);
		outds.addColumn("QUANTITY", DataTypes.STRING, 4);
		outds.addColumn("LIST_PRICE", DataTypes.STRING, 4);
		outds.addColumn("DESCRIPTION", DataTypes.STRING, 4);
		outds.addColumn("PRODUCT_ID", DataTypes.STRING, 4);
		outds.addColumn("PRODUCT_PENDING", DataTypes.STRING, 4);

		for (Inventories inventories : receivedInventroy) {
			int row = outds.newRow();
			outds.set(row, "CATEGORY", inventories.getProduct().getProductCategory().getCategoryName());
			outds.set(row, "PRODUCT_NAME", inventories.getProduct().getProductName());
			outds.set(row, "REGION",
					inventories.getWarehouse().getLocations().getCountries().getRegions().getRegionName());
			outds.set(row, "COUNTRY", inventories.getWarehouse().getLocations().getCountries().getCountryName());
			outds.set(row, "ADDRESS", inventories.getWarehouse().getLocations().getAddress());
			outds.set(row, "WAREHOUSE_NAME", inventories.getWarehouse().getWarehouseName());
			outds.set(row, "CATEGORY_ID", inventories.getProduct().getProductCategory().getCategoryId());
			outds.set(row, "WAREHOUSE_ID", inventories.getWarehouse().getWarehouseId());
			outds.set(row, "QUANTITY", inventories.getQuantity());
			outds.set(row, "LIST_PRICE", inventories.getProduct().getListPrice());
			outds.set(row, "DESCRIPTION", inventories.getProduct().getDescription());
			outds.set(row, "PRODUCT_ID", inventories.getProduct().getProductId());

			// 주문 목록 확인
			Integer productId = inventories.getProduct().getProductId();
			boolean isProductPending = inventoriesService.isProductPending(productId);

			if (isProductPending) {
				outds.set(row, "PRODUCT_PENDING", "1");
			} else {
				outds.set(row, "PRODUCT_PENDING", "0");
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

	// 콤보박스 리스트 조회
	@GetMapping("/InventoryCombobox")
	public void handlePostRequest1(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();

		PlatformData pdata = req.getData();

		List<Regions> receivedRegion = warehouseService.getAllRegions();
		List<Countries> receivedCountries = warehouseService.getAllCountries();
		List<Locations> receivedLocations = warehouseService.getAllLocations();
		List<ProductCategories> receivedProductCategories = inventoriesService.getAllCategories();
		List<Products> receivedProduct = inventoriesService.getAllProducts();
		List<Inventories> receivedInventories = inventoriesService.getAll();
		List<Warehouse> receivedWarehouse = warehouseService.getAll();

		DataSet outds = new DataSet("outDataset");
		outds.addColumn("REGION_ID", DataTypes.STRING, 32);
		outds.addColumn("REGION_NAME", DataTypes.STRING, 32);

		for (Regions region : receivedRegion) {
			int newRow = outds.newRow();
			outds.set(newRow, "REGION_ID", region.getRegionId());
			outds.set(newRow, "REGION_NAME", region.getRegionName());
		}

		DataSet outds2 = new DataSet("outDataset2");
		outds2.addColumn("COUNTRY_ID", DataTypes.STRING, 32);
		outds2.addColumn("COUNTRY_NAME", DataTypes.STRING, 32);
		outds2.addColumn("REGION_ID", DataTypes.STRING, 32);

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

		for (Locations location : receivedLocations) {
			int newRow3 = outds3.newRow();

			outds3.set(newRow3, "LOCATION_ID", location.getLocationId());
			outds3.set(newRow3, "ADDRESS", location.getAddress());
			outds3.set(newRow3, "COUNTRY_ID", location.getCountries().getCountryId());
		}

		DataSet outds4 = new DataSet("outDataset4");
		outds4.addColumn("CATEGORY_ID", DataTypes.STRING, 32);
		outds4.addColumn("CATEGORY_NAME", DataTypes.STRING, 32);

		for (ProductCategories productCategories : receivedProductCategories) {
			int newRow4 = outds4.newRow();

			outds4.set(newRow4, "CATEGORY_ID", productCategories.getCategoryId());
			outds4.set(newRow4, "CATEGORY_NAME", productCategories.getCategoryName());
		}

		DataSet outds5 = new DataSet("outDataset5");
		outds5.addColumn("PRODUCT_ID", DataTypes.STRING, 32);
		outds5.addColumn("PRODUCT_NAME", DataTypes.STRING, 32);
		outds5.addColumn("CATEGORY_ID", DataTypes.STRING, 32);

		for (Products products : receivedProduct) {
			int newRow5 = outds5.newRow();

			outds5.set(newRow5, "PRODUCT_ID", products.getProductId());
			outds5.set(newRow5, "PRODUCT_NAME", products.getProductName());
			outds5.set(newRow5, "CATEGORY_ID", products.getProductCategory().getCategoryId());
		}

		DataSet outds6 = new DataSet("outDataset6");
		outds6.addColumn("PRODUCT_ID", DataTypes.STRING, 32);
		outds6.addColumn("WAREHOUSE_ID", DataTypes.STRING, 32);
		outds6.addColumn("QUANTITY", DataTypes.STRING, 32);

		for (Inventories inventories : receivedInventories) {
			int newRow6 = outds6.newRow();

			outds6.set(newRow6, "PRODUCT_ID", inventories.getProduct().getProductId());
			outds6.set(newRow6, "WAREHOUSE_ID", inventories.getWarehouse().getWarehouseId());
			outds6.set(newRow6, "QUANTITY", inventories.getQuantity());
		}

		DataSet outds7 = new DataSet("outDataset7");
		outds7.addColumn("WAREHOUSE_ID", DataTypes.STRING, 32);
		outds7.addColumn("WAREHOUSE_NAME", DataTypes.STRING, 32);
		outds7.addColumn("LOCATION_ID", DataTypes.STRING, 32);

		for (Warehouse warehouse : receivedWarehouse) {
			int newRow7 = outds7.newRow();

			outds7.set(newRow7, "WAREHOUSE_ID", warehouse.getWarehouseId());
			outds7.set(newRow7, "WAREHOUSE_NAME", warehouse.getWarehouseName());
			outds7.set(newRow7, "LOCATION_ID", warehouse.getLocations().getLocationId());
		}

		// 6. PlatformData 추가
		PlatformData respdata = new PlatformData();
		VariableList resVarList = respdata.getVariableList();
		respdata.addDataSet(outds);
		respdata.addDataSet(outds2);
		respdata.addDataSet(outds3);
		respdata.addDataSet(outds4);
		respdata.addDataSet(outds5);
		respdata.addDataSet(outds6);
		respdata.addDataSet(outds7);

		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "SUCC");

		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");

		res.setData(respdata);
		res.sendData();
	}

	// 일괄 등록
	@PostMapping("/inventoryBulkRegistration")
	public void handlePostRequest2(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		Integer productId = inds.getInt(0, "PRODUCT");
		Integer amount = inds.getInt(0, "AMOUNT");

		System.out.println("PRODUCT: " + productId);
		System.out.println("AMOUNT: " + amount);

		// 프로시저를 통해 데이터 저장
		Integer result = inventoriesService.inventoryBulkRegistration(amount, productId);
		if (result != 0) {
			// Response 데이터 생성
			PlatformData respdata = new PlatformData();
			VariableList resVarList = respdata.getVariableList();
			resVarList.add("ErrorCode", 1);
			resVarList.add("ErrorMsg", "재고 저장에 실패했습니다.");

			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
			res.setData(respdata);
			res.sendData();

			return;
		}

		// 성공적으로 저장되었을 때의 처리
		DataSet outds = new DataSet("outDataset");

		int row = outds.newRow();

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

	@PostMapping("/loadHouseData")
	public void loadhouseData(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {
		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();

		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		String warehouseId = inds.getString(0, "WAREHOUSE_ID");
		Warehouse warehouses = inventoriesService.findHouseById(warehouseId);

		DataSet outds = new DataSet("outDataset");

		outds.addColumn("WAREHOUSE_ID", DataTypes.STRING, 32);
		outds.addColumn("REGION_NAME", DataTypes.STRING, 32);
		outds.addColumn("COUNTRY_NAME", DataTypes.STRING, 32);
		outds.addColumn("LOCATION_NAME", DataTypes.STRING, 32);

		int newRow = outds.newRow();
		outds.set(newRow, "WAREHOUSE_ID", warehouses.getWarehouseId());
		outds.set(newRow, "REGION_NAME", warehouses.getLocations().getCountries().getRegions().getRegionName());
		outds.set(newRow, "COUNTRY_NAME", warehouses.getLocations().getCountries().getCountryName());
		outds.set(newRow, "LOCATION_NAME", warehouses.getLocations().getAddress());

		PlatformData respdata = new PlatformData();
		respdata.addDataSet(outds);

		respdata.getVariableList().add("ErrorCode", 0);
		respdata.getVariableList().add("ErrorMsg", "SUCC");

		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respdata);
		res.sendData();
	}

	// 등록
	@PostMapping("/inventorySave")
	public void handlePostRequest3(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		Integer categoryId = inds.getInt(0, "CATEGORY");
		String warehouseId = inds.getString(0, "WAREHOUSE_ID");
		String productName = inds.getString(0, "PRODUCT_NAME");
		Integer quantity = inds.getInt(0, "QUANTITY");
		Double listPrice = inds.getDouble(0, "LIST_PRICE");
		String description = inds.getString(0, "DESCRIPTION");

		ProductCategories category1 = new ProductCategories();
		category1.setCategoryId(categoryId);

		// ProductsDto 객체 생성
		ProductsDto productsDto = new ProductsDto();
		productsDto.setProductCategory(category1);
		productsDto.setProductName(productName);
		productsDto.setListPrice(listPrice);
		productsDto.setDescription(description);

		// 데이터 저장
		ProductsDto savedProductsDto = productsService.save(productsDto);
		Integer productId = savedProductsDto.getProductId(); // 생성된 productId를 가져옴

		Warehouse warehouse1 = new Warehouse();
		warehouse1.setWarehouseId(warehouseId);
		WarehouseDto warehouse2 = warehouseService.getWarehouse(warehouseId);
		Warehouse warehouseEntity = warehouse2.toEntity();

		Products product1 = new Products();
		product1.setProductId(productId);
		ProductsDto product2 = productsService.getProductById(productId);
		Products productEntity = product2.toEntity();

		// InventoriesDto 객체 생성
		InventoriesDto inventoriesDto = new InventoriesDto();
		inventoriesDto.setProduct(productEntity);
		inventoriesDto.setWarehouse(warehouseEntity);
		inventoriesDto.setQuantity(quantity);

		// 데이터 저장
		InventoriesDto savedinventoriesDto = inventoriesService.save(inventoriesDto);

		DataSet outds = new DataSet("outDataset");
		outds.addColumn("CATEGORY", DataTypes.STRING, 10);
		outds.addColumn("WAREHOUSE_ID", DataTypes.STRING, 2);
		outds.addColumn("PRODUCT_NAME", DataTypes.STRING, 10);
		outds.addColumn("QUANTITY", DataTypes.DATE, 8);
		outds.addColumn("LIST_PRICE", DataTypes.STRING, 2);
		outds.addColumn("DESCRIPTION", DataTypes.STRING, 256);

		int row = outds.newRow();
		outds.set(row, "CATEGORY", categoryId);
		outds.set(row, "WAREHOUSE_ID", warehouseId);
		outds.set(row, "PRODUCT_NAME", productName);
		outds.set(row, "QUANTITY", quantity);
		outds.set(row, "LIST_PRICE", listPrice);
		outds.set(row, "DESCRIPTION", description);

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
	@PostMapping("/inventoryEdit")
	public void handlePostRequest4(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		Integer categoryId = inds.getInt(0, "CATEGORY");
		String warehouseId = inds.getString(0, "WAREHOUSE_ID"); // 변경될 수 있는 warehouseId
		Integer productId = inds.getInt(0, "PRODUCT_ID");
		String productName = inds.getString(0, "PRODUCT_NAME");
		Integer quantity = inds.getInt(0, "QUANTITY");
		Double listPrice = inds.getDouble(0, "LIST_PRICE");
		String description = inds.getString(0, "DESCRIPTION");

		// category 객체 생성
		ProductCategories category1 = new ProductCategories();
		category1.setCategoryId(categoryId);

		// ProductsDto 객체 생성
		ProductsDto productsDto = new ProductsDto();
		productsDto.setProductId(productId);
		productsDto.setProductCategory(category1);
		productsDto.setProductName(productName);
		productsDto.setListPrice(listPrice);
		productsDto.setDescription(description);

		// 데이터 저장
		ProductsDto savedProductsDto = productsService.save(productsDto);

		WarehouseDto warehouse2 = warehouseService.getWarehouse(warehouseId);
		Warehouse warehouseEntity = warehouse2.toEntity();

		ProductsDto product2 = productsService.getProductById(productId);
		Products productEntity = product2.toEntity();

		// InventoriesDto 객체 생성
		InventoriesDto inventoriesDto = new InventoriesDto();
		inventoriesDto.setProduct(productEntity);
		inventoriesDto.setWarehouse(warehouseEntity);
		inventoriesDto.setQuantity(quantity);

		// 데이터 저장
		inventoriesService.updateInventory(warehouseId, productId, quantity);

		DataSet outds = new DataSet("outDataset");
		outds.addColumn("PRODUCT_ID", DataTypes.STRING, 10);
		outds.addColumn("CATEGORY", DataTypes.STRING, 10);
		outds.addColumn("WAREHOUSE_ID", DataTypes.STRING, 2);
		outds.addColumn("PRODUCT_NAME", DataTypes.STRING, 10);
		outds.addColumn("QUANTITY", DataTypes.DATE, 8);
		outds.addColumn("LIST_PRICE", DataTypes.STRING, 2);
		outds.addColumn("DESCRIPTION", DataTypes.STRING, 256);

		int row = outds.newRow();
		outds.set(row, "PRODUCT_ID", productId);
		outds.set(row, "CATEGORY", categoryId);
		outds.set(row, "WAREHOUSE_ID", warehouseId);
		outds.set(row, "PRODUCT_NAME", productName);
		outds.set(row, "QUANTITY", quantity);
		outds.set(row, "LIST_PRICE", listPrice);
		outds.set(row, "DESCRIPTION", description);

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

	// 삭제
	@PostMapping("/inventoryDel")
	public void handlePostRequest5(HttpServletRequest request, HttpServletResponse response) throws Exception {
		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		Integer productId = inds.getInt(0, "PRODUCT_ID");

		productsService.productDel(productId);

		PlatformData respdata = new PlatformData();
		VariableList resVarList = respdata.getVariableList();

		resVarList.add("ErrorCode", 0);
		resVarList.add("ErrorMsg", "SUCC");

		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respdata);
		res.sendData();
	}

	// maxQuantity, minQuantity
	@PostMapping("/inventoryQuantity")
	public void inventoryQuantity(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {
		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();

		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		Integer productId = inds.getInt(0, "PRODUCT");

		List<Object[]> receivedQuantity = inventoriesService.findMinMaxQuantityByProductId(productId);
		DataSet outds = new DataSet("outDataset");
		outds.addColumn("MAX_QUANTITY", DataTypes.STRING, 32);
		outds.addColumn("MIN_QUANTITY", DataTypes.STRING, 32);

		for (Object[] row : receivedQuantity) {

			String maxQuantity = (row[0] != null) ? row[0].toString() : "";
			String minQuantity = (row[1] != null) ? row[1].toString() : "";

			int newRow = outds.newRow();

			outds.set(newRow, "MAX_QUANTITY", maxQuantity);
			outds.set(newRow, "MIN_QUANTITY", minQuantity);
		}

		// Prepare the response data
		PlatformData respdata = new PlatformData();
		respdata.addDataSet(outds);

		// Set response variables
		respdata.getVariableList().add("ErrorCode", 0);
		respdata.getVariableList().add("ErrorMsg", "SUCC");

		// Send the response
		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respdata);
		res.sendData();
	}

}
