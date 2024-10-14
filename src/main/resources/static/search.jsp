<%@ page import="java.io.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page contentType="text/xml; charset=UTF-8" %> <%

// 1.HttpServletRequest를 이용하여 HttpPlatformRequest 생성
HttpPlatformRequest req = new HttpPlatformRequest(request);
req.receiveData();

// 2.PlatformData 획득
PlatformData pdata = req.getData();

// 3.Input Dataset과 Variable List 생성 
DataSet inds = pdata.getDataSet("inDataset");
VariableList varList = pdata.getVariableList();

// 4. 데이터 처리

// 5. Output Dataset과 Variable List 생성
DataSet outds = new DataSet("outDataset");

outds.addColumn("EMPL_ID",DataTypes.STRING, 4);
outds.addColumn("FULL_NAME",DataTypes.STRING, 16);

int row = outds.newRow(); 
outds.set(row,"EMPL_ID","A-001");
outds.set(row,"FULL_NAME","aaaaa");

// 6. PlatformData 추가
PlatformData respdata = new PlatformData();
VariableList resVarList = respdata.getVariableList();

respdata.addDataSet(outds);

resVarList.add("ErrorCode", 0);
resVarList.add("ErrorMsg", "SUCC");
     
// 7. HttpServletResponse를 이용하여 HttpPlatformResponse 생성
HttpPlatformResponse res = new HttpPlatformResponse(response, 
    PlatformType.CONTENT_TYPE_XML,"UTF-8");
res.setData(respdata); 
res.sendData();
%>