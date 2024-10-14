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
                this.set_name("frminventory");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inventory", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REGION\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_PENDING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_ID\" type=\"INT\" size=\"256\"/><Column id=\"CATEGORY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_region", this);
            obj._setContents("<ColumnInfo><Column id=\"REGION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGION_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_country", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNTRY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REGION_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"LOCATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REGION\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_ID\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_inventories", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"INT\" size=\"256\"/><Column id=\"WAREHOUSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_warehouse", this);
            obj._setContents("<ColumnInfo><Column id=\"WAREHOUSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REGION\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_PENDING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_cond", "absolute", "20", "60", null, "76", "20", null, this);
            obj.set_taborder("0");
            obj.style.set_border("1 solid lightskyblue");
            this.addChild(obj.name, obj);
            obj = new Combo("cbo_category", "absolute", "99", "10", "100", "21", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("left");
            obj.set_innerdataset("@ds_category");
            obj.set_datacolumn("CATEGORY_NAME");
            obj.set_codecolumn("CATEGORY_ID");
            obj = new Combo("cbo_address", "absolute", "525", "43", "100", "21", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("left");
            obj.set_innerdataset("@ds_location");
            obj.set_datacolumn("ADDRESS");
            obj.set_codecolumn("LOCATION_ID");
            obj.set_index("-1");
            obj = new Combo("cbo_region", "absolute", "99", "43", "100", "21", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("left");
            obj.set_innerdataset("@ds_region");
            obj.set_datacolumn("REGION_NAME");
            obj.set_codecolumn("REGION_ID");
            obj = new Static("st_category", "absolute", "26", "12", "65", "19", null, null, this.div_cond);
            obj.set_taborder("6");
            obj.set_text("카테고리");
            obj.style.set_align("right middle");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("st_country", "absolute", "239", "45", "65", "19", null, null, this.div_cond);
            obj.set_taborder("7");
            obj.set_text("국가");
            obj.style.set_align("right");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("st_productName", "absolute", "239", "12", "65", "19", null, null, this.div_cond);
            obj.set_taborder("8");
            obj.set_text("상품명");
            obj.style.set_align("right middle");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("st_address", "absolute", "452", "45", "65", "19", null, null, this.div_cond);
            obj.set_taborder("9");
            obj.set_text("창고위치");
            obj.style.set_align("right");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("st_warehouseName", "absolute", "452", "12", "65", "19", null, null, this.div_cond);
            obj.set_taborder("10");
            obj.set_text("창고명");
            obj.style.set_align("right middle");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("st_region", "absolute", "26", "45", "65", "19", null, null, this.div_cond);
            obj.set_taborder("11");
            obj.set_text("지역");
            obj.style.set_align("right middle");
            this.div_cond.addChild(obj.name, obj);
            obj = new Edit("edt_productName", "absolute", "312", "10", "100", "21", null, null, this.div_cond);
            obj.set_taborder("1");
            obj.style.set_align("left");
            this.div_cond.addChild(obj.name, obj);
            obj = new Edit("edt_warehouseName", "absolute", "525", "10", "100", "21", null, null, this.div_cond);
            obj.set_taborder("2");
            obj.style.set_align("left");
            this.div_cond.addChild(obj.name, obj);
            obj = new Combo("cbo_country", "absolute", "312", "43", "100", "21", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_displaynulltext("-전체-");
            obj.style.set_align("left");
            obj.set_innerdataset("@ds_country");
            obj.set_datacolumn("COUNTRY_NAME");
            obj.set_codecolumn("COUNTRY_ID");

            obj = new Static("st_title", "absolute", "24", "0", null, "36", "76.17%", null, this);
            obj.set_taborder("1");
            obj.set_text("▣ 재고 목록");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_top", "absolute", null, "0", "766", "43", "20", null, this);
            obj.set_taborder("2");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Button("btn_reset", "absolute", "614", "8", "28", "21", null, null, this.div_top);
            obj.set_taborder("5");
            obj.style.set_image("URL('theme://hiclipart.com (1).png')");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "706", "8", "60", "21", null, null, this.div_top);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "644", "8", "60", "21", null, null, this.div_top);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);

            obj = new Grid("grd_inventory", "absolute", "20", "179", null, null, "20", "20", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_inventory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"250\"/><Column size=\"152\"/><Column size=\"143\"/><Column size=\"193\"/><Column size=\"166\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:lightsteelblue;\" text=\"카테고리\"/><Cell col=\"1\" style=\"background:lightsteelblue;\" text=\"상품명\"/><Cell col=\"2\" style=\"background:lightsteelblue;\" text=\"지역\"/><Cell col=\"3\" style=\"background:lightsteelblue;\" text=\"국가\"/><Cell col=\"4\" style=\"background:lightsteelblue;\" text=\"창고위치\"/><Cell col=\"5\" style=\"background:lightsteelblue;\" text=\"창고명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:CATEGORY\" combodataset=\"ds_category\" combocodecol=\"CATEGORY_NAME\" combodatacol=\"CATEGORY_NAME\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:PRODUCT_NAME\" tooltiptext=\"bind:DESCRIPTION\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:REGION\" combodataset=\"ds_region\" combocodecol=\"REGION_NAME\" combodatacol=\"REGION_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:left;\" text=\"bind:COUNTRY\" combodataset=\"ds_country\" combocodecol=\"COUNTRY_NAME\" combodatacol=\"COUNTRY_NAME\"/><Cell col=\"4\" edittype=\"none\" style=\"align:left;\" text=\"bind:ADDRESS\" combodataset=\"ds_location\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:WAREHOUSE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_popup", "absolute", null, "140", "603", "32", "20", null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Button("btn_bulkRegistration", "absolute", "435", "8", "60", "21", null, null, this.div_popup);
            obj.set_taborder("0");
            obj.set_text("일괄변경");
            obj.style.set_background("white");
            obj.style.set_border("1 solid steelblue");
            obj.style.set_cursor("hand");
            this.div_popup.addChild(obj.name, obj);
            obj = new Button("btn_category", "absolute", "497", "8", "106", "21", null, null, this.div_popup);
            obj.set_taborder("1");
            obj.set_text("카테고리관리");
            obj.style.set_background("white");
            obj.style.set_border("1 solid steelblue");
            obj.style.set_cursor("hand");
            this.div_popup.addChild(obj.name, obj);

            obj = new Button("btn_main", "absolute", "150", "8", "122", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("메인 화면");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 76, this.div_cond,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_border("1 solid lightskyblue");

            	}
            );
            this.div_cond.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 289, 39, this.div_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_visible("true");

            	}
            );
            this.div_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 603, 32, this.div_popup,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");

            	}
            );
            this.div_popup.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.Combo01","value","ds_cond","CATEGORY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.Edit00","value","ds_cond","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.Edit01","value","ds_cond","WAREHOUSE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.Combo03","value","ds_cond","REGION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.Combo04","value","ds_cond","COUNTRY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.Combo02","value","ds_cond","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_cond.cbo_category","value","ds_cond","CATEGORY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_cond.cbo_country","value","ds_cond","COUNTRY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_cond.cbo_address","value","ds_cond","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_cond.cbo_region","value","ds_cond","REGION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_cond.edt_warehouseName","value","ds_cond","WAREHOUSE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_cond.edt_productName","value","ds_cond","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frminventory.xfdl", function(exports) {
        /***************************************************
        * 화면 id: 재고 목록
        * 작성자: 김현주
        * 작성일자: 2024-09-10
        ****************************************************/

        /***************************************************
        * 함수명 : frminventory_onload
        * 내  용 : fn_combobox 호출
        ****************************************************/
        this.frminventory_onload = function(obj,e)
        {
        	this.fn_combobox();
        }

        
        /***************************************************
        * 함수명 : fn_combobox
        * 내  용 : 인벤토리 관련 콤보박스 트랜잭션을 호출하여 데이터를 로드
        ****************************************************/
        this.fn_combobox = function()
        {
            var sId    = "InventoryCombobox";
            var sUrl   = "SvcURL::InventoryCombobox";
            var sInDs  = "";
            var sOutDs = "ds_region=outDataset, ds_country=outDataset2, ds_location=outDataset3, ds_category=outDataset4, ds_product=outDataset5, ds_inventories=outDataset6, ds_warehouse=outDataset7";
            var sArg   = "";
            var sfunc  = "fn_callback_InventoryCombobox";

            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        /***************************************************
        * 함수명 : fn_callback_InventoryCombobox
        * 내  용 : 콤보박스 트랜잭션 호출 후 데이터가 로드된 후 
        *          콤보박스에 '- 전체 -' 항목을 추가하여 기본값 설정
        ****************************************************/
        this.fn_callback_InventoryCombobox = function(sId,nErrorCode,sErrorMSG){
        	if(nErrorCode == 0)
            {
            
        		// 카테고리 콤보박스
        		var newRow = this.ds_category.insertRow(0);
        		this.ds_category.setColumn(newRow, "CATEGORY_ID" ,"");
        		this.ds_category.setColumn(newRow, "CATEGORY_NAME", "- 전체 -");
        	
        		this.div_cond.cbo_category.set_index(0);
        		
        		
        		// 지역 콤보박스
        		var newRow = this.ds_region.insertRow(0);
        		this.ds_region.setColumn(newRow, "REGION_ID" ,"");
        		this.ds_region.setColumn(newRow, "REGION_NAME", "- 전체 -");
        	
        		this.div_cond.cbo_region.set_index(0);
        		
        		// 국가 콤보박스
        		var newRow = this.ds_country.insertRow(0);
        		this.ds_country.setColumn(newRow, "COUNTRY_ID" ,"");
        		this.ds_country.setColumn(newRow, "COUNTRY_NAME", "- 전체 -");
        		this.ds_country.setColumn(newRow, "REGION_ID" ,"");
        	
        		this.div_cond.cbo_country.set_index(0);
        		
        		// 창고위치 콤보박스
        		var newRow = this.ds_location.insertRow(0);
        		this.ds_location.setColumn(newRow, "LOCATION_ID" ,"");
        		this.ds_location.setColumn(newRow, "ADDRESS", "- 전체 -");
        		this.ds_location.setColumn(newRow, "COUNTRY_ID" ,"");
        	
        		this.div_cond.cbo_address.set_index(0);
            }
        }

        /***************************************************
        * 함수명 : fn_eidtCombobox
        * 내  용 : 카테고리 등록 후 콤보만 업데이트
        ****************************************************/
        this.fn_eidtCombobox = function()
        {	
            var sId    = "InventoryCombobox";
            var sUrl   = "SvcURL::InventoryCombobox";
            var sInDs  = "";
            var sOutDs = "ds_region=outDataset, ds_country=outDataset2, ds_location=outDataset3, ds_category=outDataset4, ds_product=outDataset5, ds_inventories=outDataset6, ds_warehouse=outDataset7";
            var sArg   = "";
            var sfunc  = "fn_callback_editInventoryCombobox";

            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        /***************************************************
        * 함수명 : fn_callback_editInventoryCombobox
        * 내  용 : 콤보박스 트랜잭션 호출 후 데이터가 로드된 후 
        *          콤보박스에 '- 전체 -' 항목을 추가하여 기본값 설정
        ****************************************************/
        this.fn_callback_editInventoryCombobox = function(sId,nErrorCode,sErrorMSG){
        	if(nErrorCode == 0)
            {
        		
        		var newRow = this.ds_category.insertRow(0);
        		this.ds_category.setColumn(newRow, "CATEGORY_ID" ,"");
        		this.ds_category.setColumn(newRow, "CATEGORY_NAME", "- 전체 -");
        	
        		if(!this.div_cond.cbo_category){
        			this.div_cond.cbo_category.set_index(0);
        		}
        		
        		
        		
        		// 지역 콤보박스
        		var newRow = this.ds_region.insertRow(0);
        		this.ds_region.setColumn(newRow, "REGION_ID" ,"");
        		this.ds_region.setColumn(newRow, "REGION_NAME", "- 전체 -");
        	
        		if(!this.div_cond.cbo_region){
        			this.div_cond.cbo_region.set_index(0);
        		}
        		
        	
        		// 국가 콤보박스
        		var newRow = this.ds_country.insertRow(0);
        		this.ds_country.setColumn(newRow, "COUNTRY_ID" ,"");
        		this.ds_country.setColumn(newRow, "COUNTRY_NAME", "- 전체 -");
        		this.ds_country.setColumn(newRow, "REGION_ID" ,"");
        		
        		if(!this.div_cond.cbo_country){
        			this.div_cond.cbo_country.set_index(0);
        		}
        	
        		// 창고위치 콤보박스
        		var newRow = this.ds_location.insertRow(0);
        		this.ds_location.setColumn(newRow, "LOCATION_ID" ,"");
        		this.ds_location.setColumn(newRow, "ADDRESS", "- 전체 -");
        		this.ds_location.setColumn(newRow, "COUNTRY_ID" ,"");
        	
        		if(!this.div_cond.cbo_address){
        			this.div_cond.cbo_address.set_index(0);
        		}
        		
        	
        		
            }
        }

        

        /***************************************************
        * 함수명 : div_top_btn_search_onclick
        * 내  용 : 검색 버튼 클릭 시 호출
        ****************************************************/
        this.div_top_btn_search_onclick = function(obj,e)
        {
          this.callMethod();
        }

        /***************************************************
        * 함수명 : callMethod
        * 내  용 : 조회 트랜잭션
        ****************************************************/
        this.callMethod = function()
        {
            var sId    = "InventroySearch";
            var sUrl   = "SvcURL::InventroySearch";
            var sInDs  = "inDataset=ds_cond";
            var sOutDs = "ds_inventory=outDataset";
            var sArg   = "";
            var sfunc  = "fn_search";

            try {
                this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
            } catch (e) {
                trace("Transaction Error: " + e.message);
            }
        }

        /***************************************************
        * 함수명 : fn_search
        * 내  용 : 조회 트랜잭션 후 콜백 함수, 
        *         트랜잭션 성공 시 데이터 저장 및 로그 출력
        ****************************************************/
        this.fn_search = function(sId,nErrorCode,sErrorMSG)
        {
            if(nErrorCode == 0){
                var a = this.ds_inventory.saveXML();
                trace(a);
            } else {
                trace("Transaction Error: " + sErrorMSG);
            }
        }

        
        /***************************************************
        * 함수명 : div_top_btn_save_onclick
        * 내  용 : 등록 버튼 클릭 시 팝업 창을 열고 
        *         등록 폼 데이터를 넘겨줌
        ****************************************************/
        this.div_top_btn_save_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);
            var objChild = new ChildFrame("popSaveForm", "absolute", nLeft, nTop, 400, 500);

            objChild.set_formurl("Base::frmInventorySave.xfdl");
            objChild.set_openalign("center middle");
            objChild.set_dragmovetype("all");  

            var objArg = {
        		sType: "s",
                ds_category: this.ds_category.saveXML(),
                ds_location: this.ds_location.saveXML(),
                ds_region: this.ds_region.saveXML(),
                ds_country: this.ds_country.saveXML(),
                ds_country: this.ds_warehouse.saveXML()
            };
            
            objChild.showModal(this.getOwnerFrame(), objArg, this, "");

        }

        /***************************************************
        * 함수명 : div_popup_btn_category_onclick
        * 내  용 : 카테고리 관리 버튼 클릭 시 카테고리 팝업 창을 열어 
        *          데이터를 넘겨줌
        ****************************************************/
        this.div_popup_btn_category_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);
            var objChild = new ChildFrame("popSaveForm", "absolute", nLeft, nTop, 400, 500);

            objChild.set_formurl("Base::frmCategory.xfdl");
            objChild.set_openalign("center middle");
            objChild.set_dragmovetype("all");  

            var objArg = {
                ds_category: this.ds_category.saveXML()
               
            };
            
            objChild.showModal(this.getOwnerFrame(), objArg, this, "");
        }

        
        /***************************************************
        * 함수명 : div_popup_btn_bulkRegistration_onclick
        * 내  용 : 일괄 등록 버튼 클릭 시 팝업 창을 열어
        *         카테고리, 제품, 인벤토리 데이터를 넘겨줌
        ****************************************************/
        this.div_popup_btn_bulkRegistration_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);
            var objChild = new ChildFrame("popSaveForm", "absolute", nLeft, nTop, 400, 500);

            objChild.set_formurl("Base::frmBulkRegistration.xfdl");
            objChild.set_openalign("center middle");
            objChild.set_dragmovetype("all");  

            var objArg = {
                ds_category: this.ds_category.saveXML(),
                ds_product: this.ds_product.saveXML(),
                ds_inventories: this.ds_inventories.saveXML()	
            };
            
            objChild.showModal(this.getOwnerFrame(), objArg, this, "");
        }

        /***************************************************
        * 함수명 : grd_inventory_oncelldblclick
        * 내  용 : 그리드의 셀을 더블클릭할 때 해당 행의 
        *         데이터를 ds_select에 추가하고 팝업 창을 염
        ****************************************************/
        this.grd_inventory_oncelldblclick = function(obj,e)
        {
        	var nRow = e.row;
            if (nRow < 0) return;

            // `ds_select` 데이터셋 생성 또는 초기화
            if (!this.ds_select) {
                this.ds_select = new nexacro.Dataset("ds_select", this);
                this.addChild("ds_select", this.ds_select);
            }
            
            this.ds_select.clearData(); // 기존 데이터 제거

            // 더블 클릭한 행의 데이터를 `ds_select`에 추가
            var rowCount = this.ds_inventory.rowcount; 
            var colCount = this.ds_inventory.colcount; 

        	var aRow = this.ds_select.addRow();
        	this.ds_select.copyRow(aRow,this.ds_inventory, e.row);
        	
            // 팝업 열기
            var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);
            
            var objChild = new ChildFrame("popSaveForm", "absolute", nLeft, nTop, 400, 500);

            // 팝업할 폼 파일 설정
            objChild.set_formurl("Base::frmInventorySave.xfdl");
            objChild.set_openalign("center middle");
            objChild.set_dragmovetype("all");  
        	
            objChild.showModal(this.getOwnerFrame(), "", this, "");
        }

        
        /***************************************************
        * 함수명 : div_top_btn_reset_onclick
        * 내  용 : 초기화 버튼 클릭 시 조건 초기화
        ****************************************************/
        this.div_top_btn_reset_onclick = function(obj,e)
        {
        	this.div_cond.cbo_category.set_index(0); 
            this.div_cond.cbo_region.set_index(0); 
        	this.div_cond.cbo_country.set_index(0);
        	this.div_cond.cbo_address.set_index(0);

            this.div_cond.edt_productName.set_value(""); 
            this.div_cond.edt_warehouseName.set_value("");
            
            // 데이터셋 필터 해제
            this.ds_country.filter(""); 
            this.ds_location.filter(""); 
        }

        
        /***************************************************
        * 함수명 : common_onkeydown
        * 내  용 : Combo 박스에서 Enter 키 입력 시 조회 메소드 호출
        ****************************************************/
        this.common_onkeydown = function(obj,e)
        {
        	obj.updateToDataset();
        	
            if (e.keycode === 13) {
                this.callMethod();  
            }
        }

        /***************************************************
        * 함수명 : div_cond_cbo_region_onitemchanged
        * 내  용 : 지역 콤보 박스 값 선택 시 국가, 창고 위치 콤보박스 필터
        ****************************************************/
        this.div_cond_cbo_region_onitemchanged = function(obj,e)
        {
        	var selectedRegionId = this.div_cond.cbo_region.value;

            if (selectedRegionId != null && selectedRegionId !== "") {
                this.ds_country.filter("REGION_ID == '" + selectedRegionId + "' || REGION_ID == '' "); 
            } else {
                this.ds_country.filter("");
                this.ds_location.filter(""); 
            }
            
            this.div_cond.cbo_country.set_index(0); // 기본값 설정
        }

        

        /***************************************************
        * 함수명 : div_search_cbo_country_onitemchanged
        * 내  용 : 국가 콤보 박스 값 선택 시 창고 위치 콤보박스 필터
        ****************************************************/
        this.div_cond_cbo_country_onitemchanged = function(obj,e)
        {
            var selectedCountryId = this.div_cond.cbo_country.value;
        	
            if (selectedCountryId != null && selectedCountryId !== "") {
                this.ds_location.filter("COUNTRY_ID == '" + selectedCountryId + "' || COUNTRY_ID == '' "); 
            } else {
                this.ds_location.filter(""); 
            }
           

            this.div_cond.cbo_address.set_index(0); 
        };

        
        /***************************************************
        * 함수명 : btn_main_onclick
        * 내  용 : 메인화면으로 이동
        ****************************************************/
        this.btn_main_onclick = function(obj,e)
        {
        	var url = "http://localhost:8081/np0819/index.html";
        	window.location.href = url;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frminventory_onload, this);
            this.div_cond.cbo_category.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_cond.cbo_address.addEventHandler("onitemchanged", this.Combo02_onitemchanged, this);
            this.div_cond.cbo_address.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_cond.cbo_region.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_cond.cbo_region.addEventHandler("onitemchanged", this.div_cond_cbo_region_onitemchanged, this);
            this.div_cond.edt_productName.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_cond.edt_warehouseName.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_cond.cbo_country.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_cond.cbo_country.addEventHandler("onitemchanged", this.div_cond_cbo_country_onitemchanged, this);
            this.st_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_top.btn_reset.addEventHandler("onclick", this.div_top_btn_reset_onclick, this);
            this.div_top.btn_save.addEventHandler("onclick", this.div_top_btn_save_onclick, this);
            this.div_top.btn_search.addEventHandler("onclick", this.div_top_btn_search_onclick, this);
            this.grd_inventory.addEventHandler("oncelldblclick", this.grd_inventory_oncelldblclick, this);
            this.div_popup.addEventHandler("onclick", this.div_popup_onclick, this);
            this.div_popup.btn_bulkRegistration.addEventHandler("onclick", this.div_popup_btn_bulkRegistration_onclick, this);
            this.div_popup.btn_category.addEventHandler("onclick", this.div_popup_btn_category_onclick, this);
            this.btn_main.addEventHandler("onclick", this.btn_main_onclick, this);

        };

        this.loadIncludeScript("frminventory.xfdl", true);

       
    };
}
)();
