package com.example.demo.orderItems;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.productCategory.ProductCategoriesService;
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
public class OrderItemsController {
	private final OrderItemsService orderItemsService;
	private final ProductCategoriesService productsCategoriesService;

	// 주문 목록 현황
	@PostMapping("/sendCategoryName")
	public void loadhouseData(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();

		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

		String categoryName = inds.getString(0, "CATEGORY_NAME");
		Integer categoryId = productsCategoriesService.getCategoryId(categoryName);

		List<Object[]> reveviedOrderList = orderItemsService.getOrderListByCategory(categoryId);

		DataSet outds = new DataSet("outDataset");
		outds.addColumn("PRODUCT_NAME", DataTypes.STRING, 4);
		outds.addColumn("INVENTORY_QUANTITY", DataTypes.STRING, 16);
		outds.addColumn("ORDERITEM_QUANTITY", DataTypes.STRING, 32);
		outds.addColumn("UNIT_PRICE_TOTAL", DataTypes.STRING, 32);

		for (Object[] row : reveviedOrderList) {

			String productName = (String) row[0];
			String inventoryQuantity = row[1].toString();
			String orderItemQuantity = row[2].toString();
			String unitPriceTotal = row[3].toString();
			System.out.printf("productName  = " + row[0] + ", inventoryQuantity = " + row[1],
					"orderItemQuantity  = " + row[3], unitPriceTotal);

			int newRow = outds.newRow();

			outds.set(newRow, "PRODUCT_NAME", productName);
			outds.set(newRow, "INVENTORY_QUANTITY", inventoryQuantity);
			outds.set(newRow, "ORDERITEM_QUANTITY", orderItemQuantity);
			outds.set(newRow, "UNIT_PRICE_TOTAL", unitPriceTotal);
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
