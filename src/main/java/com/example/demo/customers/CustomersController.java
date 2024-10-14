package com.example.demo.customers;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.orderItems.OrderItemsService;
import com.example.demo.orders.OrdersService;
import com.example.demo.product.ProductsService;
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
public class CustomersController {

	private final CustomersService customersService;
	private final ProductsService productsService;
	private final OrderItemsService orderItemsService;
	private final OrdersService ordersService;

	// 로그인
	@PostMapping("/login")
	public void CustomersOrderData(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();

		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		String name = inds.getString(0, "NAME");
		boolean isCustomerExist = customersService.isCustomerExist(name);

		// 로그인 성공 시
		if (isCustomerExist) {

			List<Object[]> receviedProductWithInventory = productsService.getAllProductWithInventory();
			List<Customers> receviedCustomers = customersService.getCustomers(name);

			DataSet outds = new DataSet("outDataset");

			outds.addColumn("PRODUCT_ID", DataTypes.STRING, 32);
			outds.addColumn("PRODUCT_NAME", DataTypes.STRING, 32);
			outds.addColumn("LIST_PRICE", DataTypes.STRING, 32);
			outds.addColumn("AMOUNT", DataTypes.STRING, 32);
			outds.addColumn("QUANTITY", DataTypes.STRING, 32);
			outds.addColumn("ORIGIN_QUANTITY", DataTypes.STRING, 32);

			for (Object[] row : receviedProductWithInventory) {

				String productId = row[0].toString();
				String productName = (String) row[1];
				String listPrice = row[2].toString();
				String quantity = row[3].toString();
				int newRow = outds.newRow();

				outds.set(newRow, "PRODUCT_ID", productId);
				outds.set(newRow, "PRODUCT_NAME", productName);
				outds.set(newRow, "LIST_PRICE", listPrice);
				outds.set(newRow, "QUANTITY", quantity);
				outds.set(newRow, "ORIGIN_QUANTITY", quantity);
			}

			// 고객 ID를 포함한 데이터셋
			DataSet outds2 = new DataSet("outDataset2");
			outds2.addColumn("CUSTOMER_ID", DataTypes.STRING, 32);

			if (!receviedCustomers.isEmpty()) {
				Integer customerId = receviedCustomers.get(0).getCustomerId();
				int newRow2 = outds2.newRow();
				outds2.set(newRow2, "CUSTOMER_ID", customerId);
			}

			PlatformData respdata = new PlatformData();
			respdata.addDataSet(outds);
			respdata.addDataSet(outds2);

			respdata.getVariableList().add("ErrorCode", 0);
			respdata.getVariableList().add("ErrorMsg", "SUCC");

			HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
			res.setData(respdata);
			res.sendData();
		}
	}

	// 주문하기
	@PostMapping("/order")
	public void handlePostRequest2(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");
		DataSet inds2 = pdata.getDataSet("inDataset2");

		Integer customerId = inds2.getInt(0, "CUSTOMER_ID");

		// 전체 행(Row) 수를 가져옴
		int rowCount = inds.getRowCount();

		for (int i = 0; i < rowCount; i++) {
			Integer orderId = inds.getInt(i, "ORDER_ID");
			String checkStatus = inds.getString(i, "CHECK");

			// checkStatus가 "1"인 경우에만 데이터 처리
			if ("1".equals(checkStatus)) {

				orderId = ordersService.createOrder(customerId);
				Integer itemId = 0;
				
				for (int j = i; j < rowCount; j++) {
					Integer productId1 = inds.getInt(j, "PRODUCT_ID"); 
		            Integer amount1 = inds.getInt(j, "AMOUNT");    
		            Double listPrice1 = inds.getDouble(j, "PRICE");  
		            String checkStatus1 = inds.getString(j, "CHECK"); 

					if ("1".equals(checkStatus)) {
						++itemId;
						orderItemsService.insertOrderWithItem(orderId, itemId, productId1, amount1, listPrice1);
					}

				}

				break;
			}

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

}
