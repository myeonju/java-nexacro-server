package com.example.demo.product;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

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
public class ProductsController {

	private final ProductsService productsService;

	// 카테고리별 전체 상품 개수
	@GetMapping("/categorySearch")
	public void handlePostRequest2(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();

		List<Object[]> receivedProductCount = productsService.getAllProductCount();

		DataSet outds = new DataSet("outDataset");
		outds.addColumn("CATEGORY_NAME", DataTypes.STRING, 4);
		outds.addColumn("PRODUCT_COUNT", DataTypes.STRING, 4);

		for (Object[] row : receivedProductCount) {

			String categoryName = (String) row[0];
			String productCount = row[1].toString();
	
			System.out.println("category Name: ID = " + row[0] + ", PRODUCT Count = " + row[1]);

			int newRow = outds.newRow();

			outds.set(newRow, "CATEGORY_NAME", categoryName);
			outds.set(newRow, "PRODUCT_COUNT", productCount);
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
