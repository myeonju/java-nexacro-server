(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("frmInventorySave");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,785,255);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_ID\" type=\"INT\" size=\"256\"/><Column id=\"CATEGORY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"WAREHOUSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_inventory", this);
            obj._setContents("<ColumnInfo><Column id=\"WAREHOUSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_PENDING\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_warehouse", this);
            obj._setContents("<ColumnInfo><Column id=\"WAREHOUSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REGION\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_PENDING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"WAREHOUSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_title", "absolute", "20", "0", null, "36", "80.99%", null, this);
            obj.set_taborder("9");
            obj.set_text("▣ 재고 등록");
            obj.style.set_font("15 arial");
            this.addChild(obj.name, obj);

            obj = new Static("st_line1", "absolute", "22", "50", "743", "27", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_cateogry", "absolute", "23", "51", "101", "25", null, null, this);
            obj.set_taborder("29");
            obj.set_text("카테고리");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_line3", "absolute", "22", "102", "743", "27", null, null, this);
            obj.set_taborder("30");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_line2", "absolute", "22", "76", "743", "27", null, null, this);
            obj.set_taborder("31");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_line4", "absolute", "22", "128", "743", "27", null, null, this);
            obj.set_taborder("32");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_line5", "absolute", "22", "154", "743", "79", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_warehouse", "absolute", "23", "77", "101", "25", null, null, this);
            obj.set_taborder("34");
            obj.set_text("창고");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_productId", "absolute", "23", "103", "101", "25", null, null, this);
            obj.set_taborder("35");
            obj.set_text("상품관리번호");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_quantity", "absolute", "23", "129", "101", "25", null, null, this);
            obj.set_taborder("36");
            obj.set_text("수량");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_description", "absolute", "23", "155", "101", "77", null, null, this);
            obj.set_taborder("37");
            obj.set_text("비고");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_category", "absolute", "126", "53", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_category");
            obj.set_datacolumn("CATEGORY_NAME");
            obj.set_codecolumn("CATEGORY_ID");
            obj.style.set_align("left");
            obj.set_index("-1");

            obj = new Combo("cbo_warehouseName", "absolute", "126", "79", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_warehouse");
            obj.set_datacolumn("WAREHOUSE_NAME");
            obj.set_codecolumn("WAREHOUSE_ID");
            obj.style.set_align("left");
            obj.set_index("-1");

            obj = new Edit("edt_productId", "absolute", "126", "105", "151", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.style.set_background("lightgrey");
            obj.style.set_border("1 solid black");
            obj.style.set_align("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_region", "absolute", "279", "79", "160", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.style.set_background("lightgrey");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_country", "absolute", "441", "79", "160", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.style.set_background("lightgrey");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_address", "absolute", "603", "79", "159", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.style.set_background("lightgrey");
            obj.style.set_border("1 solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_productName", "absolute", "279", "103", "102", "25", null, null, this);
            obj.set_taborder("42");
            obj.set_text("상품명");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_listPrice", "absolute", "279", "129", "102", "25", null, null, this);
            obj.set_taborder("43");
            obj.set_text("가격");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productName", "absolute", "383", "105", "379", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("80");
            this.addChild(obj.name, obj);

            obj = new Div("div_top", "absolute", "490", "5", null, "43", "20", null, this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);
            obj = new Button("btn_edit", "absolute", "91", "4", "60", "21", null, null, this.div_top);
            obj.set_taborder("0");
            obj.set_text("수정");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_list", "absolute", "215", "4", "60", "21", null, null, this.div_top);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_del", "absolute", "153", "4", "60", "21", null, null, this.div_top);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "153", "4", "60", "21", null, null, this.div_top);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);

            obj = new TextArea("edt_description", "absolute", "126", "157", "636", "73", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("600");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_listPrice", "absolute", "383", "131", "151", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_limitbymask("both");
            obj.set_mask("!#,###,###.##");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_quantity", "absolute", "126", "131", "151", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_mask("!##,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");

            	}
            );
            this.div_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 785, 255, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","cbo_category","value","ds_cond","CATEGORY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_warehouse","value","ds_cond","WAREHOUSE_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_region","value","ds_cond","REGION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_country","value","ds_cond","COUNTRY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_address","value","ds_cond","LOCATION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_productId","value","ds_cond","PRODUCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_productName","value","ds_cond","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cbo_warehouseName","value","ds_cond","WAREHOUSE_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_description","value","ds_cond","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_listPrice","value","ds_cond","LIST_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_quantity","value","ds_cond","QUANTITY");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frmInventorySave.xfdl", function(exports) {
        /***************************************************
        * 화면 id: 재고 목록
        * 작성자: 김현주
        * 작성일자: 2024-09-10
        ****************************************************/

        

        /***************************************************
        * 함수명 : frmInventorySave_onload
        * 내  용 : 폼 로드 시 데이터셋을 초기화하고, 모드에 따라 버튼 표시 및 필드 값 설정
        ****************************************************/
        this.frmInventorySave_onload = function(obj,e)
        {
        	// 카테고리 콤보박스
        	this.ds_category.copyData(this.opener.ds_category);
        	var category = this.ds_category.getColumn(0, "CATEGORY_ID");
            
            if(category == ""){
        		this.ds_category.setColumn(0, "CATEGORY_NAME", "- 선택 -");
            }
            this.cbo_category.set_index(0);
            
            // 창고 콤보 박스
        	this.ds_warehouse.copyData(this.opener.ds_warehouse);
        	
        	this.ds_warehouse.setColumn(0, "WAREHOUSE_NAME", "- 선택 -");
            this.cbo_warehouseName.set_index(0);
            
        	
        	/*trace("this.opener.ds_select.rowcount @@" + this.opener.ds_select.rowcount);*/
        	var sType = this.parent.sType;
        	
        	if (sType === "s") {
        		trace("저장 모드입니다. ds_select 초기화.");
        	    this.div_top.btn_edit.set_visible(false);
        		this.div_top.btn_del.set_visible(false);
            } else {
        		trace("재고 수정");
        		this.ds_select.copyData(this.opener.ds_select);
                this.div_top.btn_save.set_visible(false);
                
                this.cbo_category.set_value(this.ds_select.getColumn(0, "CATEGORY_ID"));
        		this.edt_region.set_value(this.ds_select.getColumn(0, "REGION")); 
        		this.edt_country.set_value(this.ds_select.getColumn(0, "COUNTRY"));
        		this.edt_address.set_value(this.ds_select.getColumn(0, "ADDRESS"));
        		this.cbo_warehouseName.set_value(this.ds_select.getColumn(0, "WAREHOUSE_ID"));
        		this.edt_productId.set_value(this.ds_select.getColumn(0, "PRODUCT_ID")); 
        		this.edt_productName.set_value(this.ds_select.getColumn(0, "PRODUCT_NAME"));
        		this.edt_quantity.set_value(this.ds_select.getColumn(0, "QUANTITY"));
        		this.edt_listPrice.set_value(this.ds_select.getColumn(0, "LIST_PRICE"));
        		this.edt_description.set_value(this.ds_select.getColumn(0, "DESCRIPTION"));
        		
        		this.cbo_category.set_enable(false);
        		this.cbo_warehouseName.set_enable(false);
        		this.edt_productName.set_enable(false);
        		this.edt_listPrice.set_enable(false);
        		this.edt_description.set_enable(false);
        		
        		this.ds_condCopy.copyData(this.ds_cond);
            }
        }

        
        /***************************************************
        * 함수명 : cbo_warehouseName_onitemchanged
        * 내  용 : 창고 콤보박스의 선택 항목이 변경되면 데이터를 로드
        ****************************************************/
        this.cbo_warehouseName_onitemchanged = function(obj,e)
        {
            var selectedWarehouseId = obj.value;
            this.fn_loadHouseData();
        }

        
        /***************************************************
        * 함수명 : fn_loadHouseData
        * 내  용 : 창고 트랜잭션 호출
        ****************************************************/
        this.fn_loadHouseData = function()
        {
            var sId    = "loadHouseData";
            var sUrl   = "SvcURL::loadHouseData";
            var sInDs  = "inDataset=ds_cond";
            var sOutDs = "ds_inventory=outDataset";
            var sArg   = "";
            var sfunc  = "fn_loadHouseCallback";

            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        
        /***************************************************
        * 함수명 : fn_loadHouseCallback
        * 내  용 : 창고 데이터 로드 후 콜백 함수
        ****************************************************/
        this.fn_loadHouseCallback = function(strSvcId,nErrorCode,strErrorMsg) {
        	if(nErrorCode == 0) {
        		trace(strSvcId);
        		var regionData = this.ds_inventory.getColumn(0, "REGION_NAME")
        		var countryData = this.ds_inventory.getColumn(0, "COUNTRY_NAME")
        		var locationData = this.ds_inventory.getColumn(0, "LOCATION_NAME")
        		
        		// ds_cond 데이터셋에 값 설정
        		this.ds_cond.setColumn(0, "REGION_NAME", regionData);
        		this.ds_cond.setColumn(0, "COUNTRY_NAME", countryData);
        		this.ds_cond.setColumn(0, "LOCATION_NAME", locationData);
        	}
        }

        /***************************************************
        * 함수명 : div_top_btn_save_onclick
        * 내  용 : 저장 버튼 클릭 시 재고 저장 트랜잭션 호출
        ****************************************************/
        this.div_top_btn_save_onclick = function(obj,e)
        {
        	if (this.cbo_category.value == null || this.cbo_category.value == "") {
                alert("카테고리를 입력해 주세요.");
                return;
            }
            if (this.cbo_warehouseName.value == null || this.cbo_warehouseName.value == "") {
                alert("창고를 입력해 주세요.");
                return;
            }
            if (this.edt_productName.value == null || this.edt_productName.value == "") {
                alert("상품명을 입력해 주세요.");
                return;
            }
            if (this.edt_quantity.value == null || this.edt_quantity.value == "") {
                alert("수량을 입력해 주세요.");
                return;
            }
        	if (this.edt_listPrice.value == null || this.edt_listPrice.value == "") {
                alert("가격을 입력해 주세요.");
                return;
            }
            if (this.edt_description.value == null || this.edt_description.value == "") {
                alert("비고를 입력해 주세요.");
                return;
            }
            
        	var result = application.confirm("저장하시겠습니까?","question","question");
        	if (result) {
        		this.fn_inventorySave();
        	} 
        }

        /***************************************************
        * 함수명 : fn_inventorySave
        * 내  용 : 재고 저장 트랜잭션 
        ****************************************************/
        this.fn_inventorySave = function()
        {
            var sId    = "inventorySave";
            var sUrl   = "SvcURL::inventorySave";
            var sInDs  = "inDataset=ds_cond"; 
            var sOutDs = "ds_inventory=outDataset";
            var sArg   = ""; 
            var sfunc  = "fn_save_callback";

            /*trace("@@ds_inventory XML: " + this.ds_inventory.saveXML());*/
            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        this.fn_save_callback = function(sId,nErrorCode,sErrorMSG)
        {
            if (nErrorCode == 0) {
                alert("성공적으로 저장 되었습니다.");
                this.close();
                this.opener.callMethod();
                
            } else {
                trace("Transaction Error: " + sErrorMSG);
            }
        }

        /***************************************************
        * 함수명 : div_top_btn_edit_onclick
        * 내  용 : 수정 버튼 클릭 시 재고 수정 트랜잭션 호출
        ****************************************************/
        this.div_top_btn_edit_onclick = function(obj,e)
        {
        	if (this.cbo_category.value == null || this.cbo_category.value == "") {
                alert("카테고리를 입력해 주세요.");
                return;
            }
            if (this.cbo_warehouseName.value == null || this.cbo_warehouseName.value == "") {
                alert("창고를 입력해 주세요.");
                return;
            }
            if (this.edt_productName.value == null || this.edt_productName.value == "") {
                alert("상품명을 입력해 주세요.");
                return;
            }
            if (this.edt_quantity.value == null || this.edt_quantity.value == "") {
                alert("수량을 입력해 주세요.");
                return;
            }
        	if (this.edt_listPrice.value == null || this.edt_listPrice.value == "") {
                alert("가격을 입력해 주세요.");
                return;
            }
            if (this.edt_description.value == null || this.edt_description.value == "") {
                alert("비고를 입력해 주세요.");
                return;
            }
            
              // 데이터셋 변경사항 체크
           if(this.isDataUnchanged()){
        		alert("변경된 값이 없습니다.");
           } else {
        		var result = application.confirm("수정 하시겠습니까?","question","question");
        		if (result) {
        			this.fn_inventoryEdit();
        		} 
           }
        }

        
        /***************************************************
        * 함수명 : checkChanges
        * 내  용 : ds_cond와 ds_condCopy의 값을 비교하여 변경사항이 있는지 확인
        ****************************************************/
        this.isDataUnchanged  = function()
        {	
            var rowCount = this.ds_cond.getRowCount(); 

            for (var i = 0; i < rowCount; i++) {
                var columns = this.ds_cond.getColCount(); 

                for (var j = 0; j < columns; j++) {
                    var colId = this.ds_cond.getColID(j); 
                    var value1 = this.ds_cond.getColumn(i, colId); 
                    var value2 = this.ds_condCopy.getColumn(i, colId); 
                    
                    if (value1 !== value2) {
                        return false; 
                    }
                }
            }
            
            return true;
        }

        /***************************************************
        * 함수명 : fn_inventoryEdit
        * 내  용 : 재고 수정 트랜잭션 
        ****************************************************/
        this.fn_inventoryEdit = function()
        {

            var sId    = "";
            var sUrl   = "SvcURL::inventoryEdit";
            var sInDs  = "inDataset=ds_cond"; 
            var sOutDs = "";
            var sArg   = ""; 
            var sfunc  = "fn_edit_callback";

            trace(this.ds_cond.saveXML());
            trace(this.ds_select.saveXML());
            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        this.fn_edit_callback = function(sId,nErrorCode,sErrorMSG)
        {
            if (nErrorCode == 0) {
                trace("Save successful");
                alert("성공적으로 수정 되었습니다.");
        		/*this.opener.frminventory_onload();*/
        		this.ds_condCopy.copyData(this.ds_cond);
                this.opener.callMethod();
                
            } else {
                alert("존재하지 않는 재고 목록입니다.");
            }
        }

        /***************************************************
        * 함수명 : div_top_btn_del_onclick
        * 내  용 : 삭제 버튼 클릭 시 재고 삭제 트랜잭션 호출
        ****************************************************/
        this.div_top_btn_del_onclick = function(obj,e)
        {	
        	if(this.ds_select.getColumn(0, "PRODUCT_PENDING") == "1"){
        		var result = application.confirm("주문 목록에 상품이 포함되어 있습니다. 삭제하시겠습니까?","warning","warning");
        		if (result) {
        			this.fn_inventoryDel();
        		} 
        	} else{
        		var result = application.confirm("삭제하시겠습니까?","warning","warning");
        		if (result) {
        			this.fn_inventoryDel();
        		} 
        	}
        }

        
        /***************************************************
        * 함수명 : fn_inventoryDel
        * 내  용 : 재고 삭제 트랜잭션
        ****************************************************/
        this.fn_inventoryDel = function()
        {
            var sId    = "inventoryDel";
            var sUrl   = "SvcURL::inventoryDel";
            var sInDs  = "inDataset=ds_cond"; 
            var sOutDs = "";
            var sArg   = ""; 
            var sfunc  = "fn_delCallback";
            
            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        this.fn_delCallback = function(sId,nErrorCode,sErrorMsg) {
            if (nErrorCode == 0) {
        		alert("삭제가 완료되었습니다.");
        		this.close();
        		this.opener.callMethod();
            }else {
                alert("Transaction Error: " + sErrorMsg);
            }
        }

        /***************************************************
        * 함수명 : div_top_btn_list_onclick
        * 내  용 : 목록 버튼 클릭 시 현재 팝업을 닫음
        ****************************************************/
        this.div_top_btn_list_onclick = function(obj,e)
        {
        	this.close();
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frmInventorySave_onload, this);
            this.st_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.st_line3.addEventHandler("onclick", this.Static03_onclick, this);
            this.st_line4.addEventHandler("onclick", this.Static03_onclick, this);
            this.st_line5.addEventHandler("onclick", this.Static03_onclick, this);
            this.st_quantity.addEventHandler("onclick", this.Static02_onclick, this);
            this.st_description.addEventHandler("onclick", this.Static02_onclick, this);
            this.cbo_warehouseName.addEventHandler("onitemchanged", this.cbo_warehouseName_onitemchanged, this);
            this.div_top.btn_edit.addEventHandler("onclick", this.div_top_btn_edit_onclick, this);
            this.div_top.btn_list.addEventHandler("onclick", this.div_top_btn_list_onclick, this);
            this.div_top.btn_del.addEventHandler("onclick", this.div_top_btn_del_onclick, this);
            this.div_top.btn_save.addEventHandler("onclick", this.div_top_btn_save_onclick, this);

        };

        this.loadIncludeScript("frmInventorySave.xfdl", true);

       
    };
}
)();
