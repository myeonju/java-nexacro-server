package com.example.demo.orders;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.inventories.InventoriesService;
import com.example.demo.orderItems.OrderItemsService;
import com.example.demo.productCategory.ProductCategories;
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
public class OrdersController {

	private final OrderItemsService orderItemsService;
	private final InventoriesService inventoriesService;

	// categoryComboBox
	@GetMapping("/categoryComboBox")
	public void categoryComboBox(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();

	
		PlatformData pdata = req.getData();

		List<ProductCategories> receivedCateogry = inventoriesService.getAllCategories();

		DataSet outds = new DataSet("outDataset");
		outds.addColumn("CATEGORY_ID", DataTypes.STRING, 32);
		outds.addColumn("CATEGORY_NAME", DataTypes.STRING, 32);
	

		for (ProductCategories productCategories : receivedCateogry) {
			int newRow = outds.newRow();

			outds.set(newRow, "CATEGORY_ID", productCategories.getCategoryId());
			outds.set(newRow, "CATEGORY_NAME", productCategories.getCategoryName());
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

	// 조회
	@PostMapping("/orderList")
	public void handlePostRequest(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		Integer category = inds.getInt(0, "CATEGORY");
		String product = inds.getString(0, "PRODUCT");
		String fromDate = inds.getString(0, "FROM_DATE");
		String toDate = inds.getString(0, "TO_DATE");

		List<Object[]> receivedOrderList;
		
		if(category != 0  || product!= null || fromDate != null || toDate != null) {
			receivedOrderList = orderItemsService.findProductOrdersGroupedByCategoryAndDate(category, product, fromDate, toDate);
		} else {
			receivedOrderList = orderItemsService.findProductOrdersGroupedByCategoryAndDate(null, null, null, null);
		}
		
		
		DataSet outds = new DataSet("outDataset");

		outds.addColumn("CATEGORY_NAME", DataTypes.STRING, 32);
		outds.addColumn("PRODUCT_NAME", DataTypes.STRING, 32);
		outds.addColumn("ORDER_DATE", DataTypes.STRING, 32);
		outds.addColumn("PRODUCT_CNT", DataTypes.STRING, 32);

		for (Object[] row : receivedOrderList) {

			String categoryName = row[0].toString();
			String productName = row[1].toString();
			String orderDate = row[2].toString();
			String productCnt = row[3].toString();
			int newRow = outds.newRow();

			outds.set(newRow, "CATEGORY_NAME", categoryName);
			outds.set(newRow, "PRODUCT_NAME", productName);
			outds.set(newRow, "ORDER_DATE", orderDate);
			outds.set(newRow, "PRODUCT_CNT", productCnt);
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
}
