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
                this.set_name("frmBulkRegistration");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,695,198);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_ID\" type=\"INT\" size=\"256\"/><Column id=\"CATEGORY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_ID\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_inventory", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_inventories", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"INT\" size=\"256\"/><Column id=\"WAREHOUSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"INT\" size=\"256\"/><Column id=\"MAX_QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_QUANTITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_title", "absolute", "20", "0", null, "36", "80.37%", null, this);
            obj.set_taborder("3");
            obj.set_text("▣ 일괄 변경");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("st_line1", "absolute", "24", "45", "650", "27", null, null, this);
            obj.set_taborder("4");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_categoryName", "absolute", "25", "46", "101", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("카테고리명");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_line3", "absolute", "24", "97", "650", "27", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_line2", "absolute", "24", "71", "650", "27", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_line4", "absolute", "24", "123", "650", "27", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_line5", "absolute", "24", "149", "650", "27", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_productName", "absolute", "25", "72", "101", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("상품명");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_minQuantity", "absolute", "25", "98", "101", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("최소 수량");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_maxQuantity", "absolute", "25", "124", "101", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("최대 수량");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_quantity", "absolute", "25", "150", "101", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("수량");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_minQuantity", "absolute", "129", "100", "541", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.style.set_background("lightgrey");
            obj.style.set_border("1 solid black");
            obj.style.set_align("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_maxQuantity", "absolute", "129", "126", "541", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.style.set_background("lightgrey");
            obj.style.set_border("1 solid black");
            obj.style.set_align("right");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_quantity", "absolute", "129", "152", "541", "21", null, null, this);
            obj.set_taborder("2");
            obj.style.set_align("right");
            obj.set_maxlength("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productId", "absolute", "129", "74", "129", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.style.set_background("lightgrey");
            obj.style.set_border("1 solid black");
            obj.style.set_align("right");
            this.addChild(obj.name, obj);

            obj = new Div("div_top", "absolute", "331", "0", "360", "38", null, null, this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);
            obj = new Button("dtn_save", "absolute", "283", "8", "60", "21", null, null, this.div_top);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);

            obj = new Combo("cbo_productName", "absolute", "261", "74", "410", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_product");
            obj.set_codecolumn("PRODUCT_ID");
            obj.set_datacolumn("PRODUCT_NAME");
            obj.style.set_align("left middle");
            obj.set_index("-1");

            obj = new Combo("cbo_categoryName", "absolute", "129", "48", "541", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_category");
            obj.set_codecolumn("CATEGORY_ID");
            obj.set_datacolumn("CATEGORY_NAME");
            obj.style.set_align("left middle");
            obj.set_index("-1");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 360, 38, this.div_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("25");

            	}
            );
            this.div_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 695, 198, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","edt_productId","value","ds_inventory","PRODUCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cbo_productName","value","ds_inventory","PRODUCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cbo_categoryName","value","ds_inventory","CATEGORY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_quantity","value","ds_inventory","AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frmBulkRegistration.xfdl", function(exports) {
        /***************************************************
        * 화면 id: 일괄 변경
        * 작성자: 김현주
        * 작성일자: 2024-09-10
        ****************************************************/

        /***************************************************
        * 함수명 : frmBulkRegistration_onload
        * 내  용 : 폼 로드 시 카테고리, 상품, 재고 데이터셋을 부모 창에서 복사하여 초기화
        ****************************************************/
        this.frmBulkRegistration_onload = function(obj,e)
        {
        	//categoy
        	this.ds_category.copyData(this.opener.ds_category);
        	
        	var category1 = this.ds_category.getColumn(0, "CATEGORY_ID");
            
            trace("category1:" + category1 + "@");
            if(category1 == ""){
        		this.ds_category.setColumn(0, "CATEGORY_NAME", "- 선택 -");
            }
            this.cbo_categoryName.set_index(0);
        	
        	
        	// product
        	this.ds_product.copyData(this.opener.ds_product);
        	
        	var newRow = this.ds_product.insertRow(0);
        	this.ds_product.setColumn(newRow, "PRODUCT_ID" ,"");
        	this.ds_product.setColumn(newRow, "PRODUCT_NAME", "- 선택 -");
        	this.cbo_productName.set_index(0);

        	// inventory
        	this.ds_inventories.copyData(this.opener.ds_inventories);
        }

        /***************************************************
        * 함수명 : cbo_categoryName_onitemchanged
        * 내  용 : 카테고리 콤보박스의 아이템 선택 시 상품 데이터 필터링
        ****************************************************/
        this.cbo_categoryName_onitemchanged = function(obj,e)
        {
        	var selectedCategoryId = this.cbo_categoryName.value;

            if (selectedCategoryId != null) {
                this.ds_product.filter("CATEGORY_ID == " + selectedCategoryId); 
            } else {
                this.ds_product.filter(""); 
            }
            
            var newRow = this.ds_product.insertRow(0);
        	this.ds_product.setColumn(newRow, "PRODUCT_ID" ,"");
        	this.ds_product.setColumn(newRow, "PRODUCT_NAME", "- 선택 -");
        	
            this.cbo_productName.set_index(0);
        }

        /***************************************************
        * 함수명 : cbo_productName_onitemchanged
        * 내  용 : 상품명 콤보박스의 아이템 선택 시 최소 및 최대 수량을 찾고 설정
        ****************************************************/
        this.cbo_productName_onitemchanged = function(obj,e)
        {	
        	 var selectedValue = obj.value;

            trace("selectedValue: " + selectedValue);
            this.edt_productId.set_value(selectedValue); 
        	
        	var sId    = "inventoryQuantity";
            var sUrl   = "SvcURL::inventoryQuantity";
            var sInDs  = "inDataset=ds_inventory"; 
            var sOutDs = "ds_inventories=outDataset";
            var sArg   = ""
            var sfunc  = "fn_inventoryQuantityCallback";
            
            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc); 
        }

        /***************************************************
        * 함수명 : fn_loadHouseCallback
        * 내  용 : 창고 데이터 로드 후 콜백 함수
        ****************************************************/
        this.fn_inventoryQuantityCallback = function(strSvcId,nErrorCode,strErrorMsg) {
        	if(nErrorCode == 0) {
        		trace(strSvcId);
        		var minQuantity = this.ds_inventories.getColumn(0, "MIN_QUANTITY")
        		trace("minQuantity: " + minQuantity);
        		var maxQuantity = this.ds_inventories.getColumn(0, "MAX_QUANTITY")
        		
        		this.edt_minQuantity.set_value(minQuantity); 
                this.edt_maxQuantity.set_value(maxQuantity); 
        	}
        }

        
        /***************************************************
        * 함수명 : div_top_dtn_save_onclick
        * 내  용 : 저장 버튼 클릭 시 
        ****************************************************/
        this.div_top_dtn_save_onclick = function(obj,e)
        {
            // 필수 값이 입력되지 않았는지 확인
            if (this.cbo_categoryName.value == null || this.cbo_categoryName.value == "") {
                alert("카테고리명을 입력해주세요.");
                return;
            }
            
            if (this.edt_productId.value == null || this.edt_productId.value == "") {
                alert("상품명을 입력해주세요.");
                return;
            }
            
            if (this.edt_quantity.value == null || this.edt_quantity.value == "") {
                alert("수량을 입력해주세요.");
                return;
            }
            
            
        	var result = application.confirm("저장 하시겠습니까?","question","question");
        	if (result) {
        		this.fn_save();
        	} 
        }

        
        /***************************************************
        * 함수명 : fn_save
        * 내  용 : 일괄 등록 트랜잭션
        ****************************************************/
        this.fn_save = function()
        {
        	var sId    = "inventoryBulkRegistration";
            var sUrl   = "SvcURL::inventoryBulkRegistration";
            var sInDs  = "inDataset=ds_inventory"; 
            var sOutDs = "";
            var sArg   = ""
            var sfunc  = "fn_save_callback";
            
            trace("ds_inventory XML: " + this.ds_inventory.saveXML());
            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        
        /***************************************************
        * 함수명 : fn_save_callback
        * 내  용 : 저장 트랜잭션의 콜백 함수, 성공 여부에 따라 로그 출력
        ****************************************************/
        this.fn_save_callback = function(sId,nErrorCode,sErrorMSG)
        {
            if (nErrorCode == 0) {
        		alert("저장이 완료되었습니다.");
                this.close();
                this.opener.callMethod();
            } else {
                alert(sErrorMSG);
            }
        }

        

        /***************************************************
        * 함수명 : edt_quantity_onkeyup
        * 내  용 : 0이 입력된 경우 alert 후, 0을 지운다.
        ****************************************************/
        this.edt_quantity_onkeyup = function(obj,e)
        {
        	var quantity = this.edt_quantity.value;

            if (quantity === "0") {
                alert("0은 입력할 수 없습니다.");
                // '0'을 지우기
                this.edt_quantity.set_value("");
            }
        }

        
        this.edt_quantity_ontextchanged = function(obj,e)
        {
        	// 숫자와 '-' 문자는 허용
            var rawValue = obj.value.replace(/,/g, ''); 

            // 숫자와 '-'만 허용, '-'는 맨 앞에만 허용
            rawValue = rawValue.replace(/[^0-9\-]/g, '');

            // '-'가 중복되면 제거
            var firstMinusIndex = rawValue.indexOf('-');
            if (firstMinusIndex !== -1) {
                // 첫 번째 '-' 외의 모든 '-' 제거
                rawValue = rawValue.substring(0, firstMinusIndex + 1) + rawValue.substring(firstMinusIndex + 1).replace(/-/g, '');
            }

            // '-'가 맨 앞에 있는지 확인
            if (rawValue.charAt(0) === '-') {
                // 맨 앞에 있는 '-' 외의 '-' 제거
                rawValue = '-' + rawValue.substring(1).replace(/-/g, '');
            } else {
                // '-'가 중간에 있을 경우 제거
                rawValue = rawValue.replace(/-/g, '');
            }

            // 빈 문자열이면 그대로 반환
            if (rawValue === '') {
                obj.set_value('');
                return;
            }

            // 천 단위 구분 기호를 추가
            var formattedValue = '';
            var length = rawValue.length;
            var counter = 0;

            for (var i = length - 1; i >= 0; i--) {
                // 현재 문자를 앞에 추가
                formattedValue = rawValue.charAt(i) + formattedValue;
                counter++;

                // 천 단위 구분 기호를 추가
                if (counter % 3 === 0 && i !== 0 && rawValue.charAt(0) !== '-') {
                    formattedValue = ',' + formattedValue;
                }
            }

            // 포맷팅된 값을 입력 필드에 설정
            obj.set_value(formattedValue);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frmBulkRegistration_onload, this);
            this.st_line3.addEventHandler("onclick", this.Static03_onclick, this);
            this.st_line4.addEventHandler("onclick", this.Static03_onclick, this);
            this.st_line5.addEventHandler("onclick", this.Static03_onclick, this);
            this.st_minQuantity.addEventHandler("onclick", this.Static04_onclick, this);
            this.st_maxQuantity.addEventHandler("onclick", this.Static02_onclick, this);
            this.st_quantity.addEventHandler("onclick", this.Static02_onclick, this);
            this.edt_minQuantity.addEventHandler("ontextchanged", this.Edit_ontextchanged, this);
            this.edt_maxQuantity.addEventHandler("ontextchanged", this.Edit_ontextchanged, this);
            this.edt_quantity.addEventHandler("onkeyup", this.edt_quantity_onkeyup, this);
            this.edt_quantity.addEventHandler("ontextchanged", this.edt_quantity_ontextchanged, this);
            this.edt_quantity.addEventHandler("oneditclick", this.edt_quantity_oneditclick, this);
            this.div_top.dtn_save.addEventHandler("onclick", this.div_top_dtn_save_onclick, this);
            this.cbo_productName.addEventHandler("onitemchanged", this.cbo_productName_onitemchanged, this);
            this.cbo_categoryName.addEventHandler("onitemchanged", this.cbo_categoryName_onitemchanged, this);

        };

        this.loadIncludeScript("frmBulkRegistration.xfdl", true);

       
    };
}
)();
