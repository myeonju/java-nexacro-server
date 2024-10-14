package com.example.demo.productCategory;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
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
public class ProductCategoriesController {

	private final ProductCategoriesService productCategoriesService;

	// 카테고리 관리
	@PostMapping("/categorySave")
	public void handlePostRequest(HttpServletRequest request, HttpServletResponse response)
			throws IOException, PlatformException {

		HttpPlatformRequest req = new HttpPlatformRequest(request.getInputStream());
		req.receiveData();
		PlatformData pdata = req.getData();
		DataSet inds = pdata.getDataSet("inDataset");

	
		String categoryName = inds.getString(0, "CATEGORY_NAME");
		boolean isProductCategory = productCategoriesService.isProductCategory(categoryName);

		// Response 데이터 생성
		PlatformData respdata = new PlatformData();
		VariableList resVarList = respdata.getVariableList();

		// 똑같은 상품명이 존재 하지 않을 시
		if (!isProductCategory) {
			// ProductCategoriesDto 객체 생성
			ProductCategoriesDto productCategoriesDto = new ProductCategoriesDto();
			productCategoriesDto.setCategoryName(categoryName);

			// 데이터 저장
			ProductCategoriesDto savedCategory = productCategoriesService.save(productCategoriesDto);

			resVarList.add("ErrorCode", 0);
			resVarList.add("ErrorMsg", "SUCC");

		} else {
			// 이미 같은 카테고리명이 존재하는 경우 처리
			resVarList.add("ErrorCode", -1);
			resVarList.add("ErrorMsg", "이미 존재하는 카테고리 이름입니다.");
		}

		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
		res.setData(respdata);
		res.sendData();

	}

}
