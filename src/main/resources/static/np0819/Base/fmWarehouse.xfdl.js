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
                this.set_name("fmStorage");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1002,670);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_warehouse", this);
            obj._setContents("<ColumnInfo><Column id=\"WAREHOUSE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGIONS\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRIES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATIONS\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_region", this);
            obj._setContents("<ColumnInfo><Column id=\"REGION_ID\" type=\"INT\" size=\"256\"/><Column id=\"REGION_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_countries", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNTRY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REGION_ID\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_location", this);
            obj._setContents("<ColumnInfo><Column id=\"LOCATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"REGIONS\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRIES\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATIONS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_regionGrd", this);
            obj._setContents("<ColumnInfo><Column id=\"REGION_ID\" type=\"INT\" size=\"256\"/><Column id=\"REGION_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_countriesGrd", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNTRY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REGION_ID\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_locationGrd", this);
            obj._setContents("<ColumnInfo><Column id=\"LOCATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_title", "absolute", "20", "14", null, "36", "805", null, this);
            obj.set_taborder("0");
            obj.set_text("▣ 창고 목록");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "20", "72", null, "42", "20", null, this);
            obj.set_taborder("15");
            obj.style.set_border("1 solid lightskyblue");
            this.addChild(obj.name, obj);
            obj = new Static("st_region", "absolute", "20", "8", "60", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("지역");
            obj.style.set_align("right middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("st_country", "absolute", "205", "8", "42", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("국가");
            obj.style.set_align("right middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("st_location", "absolute", "373", "8", "70", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("창고위치");
            obj.style.set_align("right middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_region", "absolute", "88", "8", "97", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_displaynulltext("-전체-");
            obj.style.set_displaynulltextcolor("black");
            obj.style.set_align("center");
            obj.set_innerdataset("@ds_region");
            obj.set_datacolumn("REGION_NAME");
            obj.set_codecolumn("REGION_ID");
            obj.set_index("-1");
            obj = new Combo("cbo_country", "absolute", "255", "8", "98", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_displaynulltext("-전체-");
            obj.style.set_displaynulltextcolor("black");
            obj.style.set_align("center");
            obj.set_innerdataset("@ds_countries");
            obj.set_datacolumn("COUNTRY_NAME");
            obj.set_codecolumn("COUNTRY_ID");
            obj.set_index("-1");
            obj = new Combo("cbo_location", "absolute", "451", "8", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_displaynulltext("-전체-");
            obj.style.set_displaynulltextcolor("black");
            obj.style.set_align("center");
            obj.set_innerdataset("@ds_location");
            obj.set_datacolumn("ADDRESS");
            obj.set_codecolumn("LOCATION_ID");
            obj.set_index("-1");

            obj = new Div("div_top", "absolute", null, "13", "766", "43", "20", null, this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);
            obj = new Button("dtn_reset", "absolute", "490", "6", "28", "26", null, null, this.div_top);
            obj.set_taborder("0");
            obj.style.set_image("URL('theme://hiclipart.com (1).png')");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_delete", "absolute", "706", "6", "60", "26", null, null, this.div_top);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "644", "6", "60", "26", null, null, this.div_top);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_addRow", "absolute", "582", "6", "60", "26", null, null, this.div_top);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "520", "6", "60", "26", null, null, this.div_top);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);

            obj = new Grid("grd_warehouse", "absolute", "20", "122", null, null, "20", "20", this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_warehouse");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"127\"/><Column size=\"118\"/><Column size=\"195\"/><Column size=\"197\"/><Column size=\"267\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background:lightsteelblue;\"/><Cell col=\"1\" style=\"background:lightsteelblue;\" text=\"관리번호\"/><Cell col=\"2\" style=\"background:lightsteelblue;\" text=\"지역\"/><Cell col=\"3\" style=\"background:lightsteelblue;\" text=\"국가\"/><Cell col=\"4\" style=\"background:lightsteelblue;\" text=\"창고위치\"/><Cell col=\"5\" style=\"background:lightsteelblue;\" text=\"창고명\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:WAREHOUSE_ID\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow) == 2 ? 'combo' : 'none'\" style=\"align:left;\" text=\"bind:REGIONS\" combodataset=\"ds_regionGrd\" combocodecol=\"REGION_NAME\" combodatacol=\"REGION_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow) == 2 ? 'combo' : 'none'\" style=\"align:left;\" text=\"bind:COUNTRIES\" combodataset=\"ds_countriesGrd\" combocodecol=\"COUNTRY_NAME\" combodatacol=\"COUNTRY_NAME\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow) == 2 ? 'combo' : 'none'\" style=\"align:left;\" text=\"bind:LOCATIONS\" combodataset=\"ds_locationGrd\" combocodecol=\"ADDRESS\" combodatacol=\"ADDRESS\"/><Cell col=\"5\" edittype=\"text\" style=\"align:left;\" text=\"bind:WAREHOUSE_NAME\" combodataset=\"ds_warehouse\" combocodecol=\"WAREHOUSE_NAME\" combodatacol=\"WAREHOUSE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 962, 36, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.style.set_border("1 solid lightskyblue");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 289, 39, this.div_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");

            	}
            );
            this.div_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1002, 670, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","div_search.cbo_location","value","ds_cond","LOCATIONS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.cbo_country","value","ds_cond","COUNTRIES");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_search.cbo_region","value","ds_cond","REGIONS");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("fmWarehouse.xfdl", function(exports) {
        /***************************************************
        * 화면 id: 창고 목록
        * 작성자: 김현주
        * 작성일자: 2024-09-10
        ****************************************************/

        
        /***************************************************
        * 함수명 : fmStorage_onload
        * 내  용 : 콤보 박스 호출 온로드
        ****************************************************/
        this.fmStorage_onload = function(obj,e)
        {
        	this.fn_combobox();
            /*this.ds_warehouse.addEventHandler("oncolumnchanged", this.ds_warehouse_oncolumnchanged, this);*/
        }

        /***************************************************
        * 함수명 : fn_combobox
        * 내  용 : 지역, 국가, 위치 콤보박스 리스트를 불러오는 트랜잭션
        ****************************************************/
        this.fn_combobox = function()
        {	
            var sId    = "warehouseCombobox";
            var sUrl   = "SvcURL::warehouseCombobox";
            var sInDs  = "";
            var sOutDs = "ds_region=outDataset, ds_countries=outDataset2, ds_location=outDataset3, ds_regionGrd=outDataset, ds_countriesGrd=outDataset2, ds_locationGrd=outDataset3";
            var sArg   = "";
            var sfunc  = "fn_callback_combobox";

            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        /***************************************************
        * 함수명 : fn_callback_combobox
        * 내  용 : 콤보 박스 콜백 트랜잭션. 콤보박스에  - 전체 - 표시
        ****************************************************/
        this.fn_callback_combobox = function(sId,nErrorCode,sErrorMSG){
        	if(nErrorCode == 0)
            {
        		// 지역 콤보박스
        		trace(this.ds_region.saveXML());
        		var newRow = this.ds_region.insertRow(0);
        		this.ds_region.setColumn(newRow, "REGION_ID" ,"");
        		this.ds_region.setColumn(newRow, "REGION_NAME", "- 전체 -");
        	
        		this.div_search.cbo_region.set_index(0);
        	
        	
        		// 국가 콤보박스
        		var newRow = this.ds_countries.insertRow(0);
        		this.ds_countries.setColumn(newRow, "COUNTRY_ID" ,"");
        		this.ds_countries.setColumn(newRow, "COUNTRY_NAME", "- 전체 -");
        		this.ds_countries.setColumn(newRow, "REGION_ID" ,"");
        	
        		this.div_search.cbo_country.set_index(0);
        		
        		// 창고위치 콤보박스
        		var newRow = this.ds_location.insertRow(0);
        		this.ds_location.setColumn(newRow, "LOCATION_ID" ,"");
        		this.ds_location.setColumn(newRow, "ADDRESS", "- 전체 -");
        		this.ds_location.setColumn(newRow, "COUNTRY_ID" ,"");
        		
        		this.div_search.cbo_location.set_index(0);
        		
        		
        		
        		// 그리드 지역 콤보박스
        		var newRow = this.ds_regionGrd.insertRow(0);
        		this.ds_regionGrd.setColumn(newRow, "REGION_ID" ,"");
        		this.ds_regionGrd.setColumn(newRow, "REGION_NAME", "- 선택 -");
        		
        		
        		// 그리드 국가 콤보박스
        		var newRow = this.ds_countriesGrd.insertRow(0);
        		this.ds_countriesGrd.setColumn(newRow, "COUNTRY_ID" ,"");
        		this.ds_countriesGrd.setColumn(newRow, "COUNTRY_NAME", "- 선택 -");
        		this.ds_countriesGrd.setColumn(newRow, "REGION_ID" ,"");
        		
        		
        		// 그리드 창고위치 콤보박스
        		var newRow = this.ds_locationGrd.insertRow(0);
        		this.ds_locationGrd.setColumn(newRow, "LOCATION_ID" ,"");
        		this.ds_locationGrd.setColumn(newRow, "ADDRESS", "-선택 -");
        		this.ds_locationGrd.setColumn(newRow, "COUNTRY_ID" ,"");
        		
            }
        }

        
        /***************************************************
        * 함수명 : div_top_btn_search_onclick
        * 내  용 : 조회 버튼 클릭 이벤트 핸들러
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
            var sId    = "warehouseSearch";
            var sUrl   = "SvcURL::warehouseSearch";
            var sInDs  = "inDataset=ds_cond";
            var sOutDs = "ds_warehouse=outDataset";
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
        * 내  용 : 조회 트랜잭션 콜백 함수
        ****************************************************/
        this.fn_search = function(sId,nErrorCode,sErrorMSG)
        {
            if (nErrorCode == 0) {
        		/*this.ds_warehouse.addColumn("CHECK", "STRING");*/

        // 		var rowCount = this.ds_warehouse.getRowCount();
        // 		for (var i = 0; i < rowCount; i++) {
        // 			this.ds_warehouse.setColumn(i, "CHECK", 0);
        // 		}
            }
        }

        
        /***************************************************
        * 함수명 : div_top_btn_addRow_onclick
        * 내  용 : 추가 버튼 클릭 시 행 추가, 행 추가시 CHECK 값은 기본 1
        ****************************************************/
        this.div_top_btn_addRow_onclick = function(obj,e)
        {
        	var newRow = this.ds_warehouse.addRow(); 
        // 	if(newRow >= 0) {
        // 		this.ds_warehouse.setColumn(newRow, "CHECK", '') 
        // 	}
        }

        /***************************************************
        * 함수명 : div_top_btn_save_onclick
        * 내  용 : 저장 버튼 클릭
        ****************************************************/
        this.div_top_btn_save_onclick = function(obj,e)
        {
            var hasChanges = false;

            for (var i = 0; i < this.ds_warehouse.rowcount; i++) {

                // 유효성 검사: 각 열의 값이 비어있는지 확인
                var region = this.ds_warehouse.getColumn(i, "REGIONS");
                var country = this.ds_warehouse.getColumn(i, "COUNTRIES");
                var location = this.ds_warehouse.getColumn(i, "LOCATIONS");
                var warehouseName = this.ds_warehouse.getColumn(i, "WAREHOUSE_NAME");

                if (!region) {
                    alert("지역을 선택해 주세요.");
                    return;
                }

                if (!country) {
                    alert("국가를 선택해 주세요.");
                    return;
                }

                if (!location) {
                    alert("창고 위치를 선택해 주세요.");
                    return;
                }

                if (!warehouseName) {
                    alert("창고명을 입력해 주세요.");
                    return;
                }

                // 행의 상태를 확인 (수정된 행만 저장할 수 있도록 처리)
                var nRowType = this.ds_warehouse.getRowType(i);

                // trace로 상태 값을 출력 (디버깅용)
                trace("Row Type for row " + i + ": " + nRowType);

                // 행이 새로 삽입되었거나 수정된 경우
                if (nRowType == Dataset.ROWTYPE_INSERT || nRowType == Dataset.ROWTYPE_UPDATE) {
                    hasChanges = true;
                }
            }

            // 변경 사항이 없으면 저장 중단
            if (!hasChanges) {
                alert("수정된 사항이 없습니다.");
                return;
            }

            // 저장 여부를 확인
            var result = application.confirm("저장하시겠습니까?", "question", "question");
            if (result) {
                this.fn_save(); // 저장 함수 호출
            }
        }

        /***************************************************
        * 함수명 : fn_save
        * 내  용 : 저장 트랜잭션
        ****************************************************/
        this.fn_save = function()
        {
            var sId    = "warehouseSave";
            var sUrl   = "SvcURL::warehouseSave";
            var sInDs  = "inDataset=ds_warehouse"; 
            var sOutDs = "";
            var sArg   = ""; 
            var sfunc  = "fn_save_callback";

            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        /***************************************************
        * 함수명 : fn_save_callback
        * 내  용 : 저장 트랜잭션 콜백 함수
        ****************************************************/
        this.fn_save_callback = function(sId,nErrorCode,sErrorMSG)
        {
            if (nErrorCode == 0) {
                alert("성공적으로 저장되었습니다.");
                this.callMethod();
            } else {
        		alert("ErrorMSG." + sErrorMSG);
            }
        }

        /***************************************************
        * 함수명 : ds_warehouse_oncolumnchanged
        * 내  용 : 데이터셋의 컬럼을 기존 값과 비교하여 변경되었다면 CHECK 값을 1로 변경
        ****************************************************/
        // this.ds_warehouse_oncolumnchanged = function(obj:Dataset, e:nexacro.DSColChangeEventInfo)
        // {
        // 	 if (e.row >= 0) {  
        //         var columnId = e.col;  
        //         var newValue = e.newvalue;  
        //         var oldValue = this.ds_warehouse.getOrgColumn(e.row, columnId);
        //         
        //        trace("Row " + e.row + " Column '" + columnId + "' changed to: " + newValue);
        //     
        // 
        //         if(columnId != 5 ){
        // 			if (oldValue != newValue) {
        //              obj.setColumn(e.row, "CHECK", 1);
        //             }
        //         }
        //         
        // 		
        //     }
        // }

        /***************************************************
        * 함수명 : grd_warehouse_onheadclick
        * 내  용 : 체크 박스 전체 상태값 기본'', 체크 시 1
        ****************************************************/
        this.grd_warehouse_onheadclick = function(obj,e)
        {
        	if(e.col == 0) {
        		if(obj.getCellProperty("head", e.col, "text") == '') {
        			obj.setCellProperty("head", e.col, "text", 1);
        		} else {
        			obj.setCellProperty("head", e.col, "text", '');
        		}
        		var checkStatus = obj.getCellProperty("head", e.col, "text");
        	}
        	
        	var rowCount = this.ds_warehouse.getRowCount();
        	for (var i = 0; i < rowCount ; i++) {
        		this.ds_warehouse.setColumn(i, "CHECK", checkStatus);
        	}
        }

        
        /***************************************************
        * 함수명 : div_top_btn_delete_onclick
        * 내  용 : 삭제 버튼 클릭시 호출
        ****************************************************/
        this.div_top_btn_delete_onclick = function(obj,e)
        {

        	var hasChecked = false;
            
            for (var i = 0; i < this.ds_warehouse.rowcount; i++) {
                if (this.ds_warehouse.getColumn(i, "CHECK") == 1) {
                    hasChecked = true;
                    break;
                }
            }
            
            // 체크된 항목이 없을 때
            if (!hasChecked) {
                alert("체크된 항목이 없습니다. 삭제할 항목을 선택해 주세요.");
                return;
            }
            
        	var result = application.confirm("삭제하시겠습니까?","warning","warning");
        	if (result) {
        		this.fn_del();
        	}
        }

        
        /***************************************************
        * 함수명 : fn_del
        * 내  용 : 삭제 트랜잭션 
        ****************************************************/
        this.fn_del = function() {
            var sId    = "warehouseDel";
            var sUrl   = "SvcURL::warehouseDel"; 
            var sInDs  = "inDataset=ds_warehouse"; 
            var sOutDs = "";
            var sArg   = ""; 
            var sfunc  = "fn_del_callback";

            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        /***************************************************
        * 함수명 : fn_del_callback
        * 내  용 : 삭제 콜백함수 
        ****************************************************/
        this.fn_del_callback = function(sId,nErrorCode,sErrorMsg) {
            if (sId === "warehouseDel") {
                if (nErrorCode == 1) {
                    alert("ErrorMSG: " + sErrorMsg);
                    return;
                } else if (nErrorCode == -1) {
                    alert("ErrorMSG: " + sErrorMsg);
                    return;
                } else {
        			alert("성공적으로 삭제되었습니다.");
        		}
        		
                
                this.callMethod(); 
            }
        };

        /***************************************************
        * 함수명 : div_top_dtn_reset_onclick
        * 내  용 : 초기화 버튼 클릭시 호출
        ****************************************************/
        this.div_top_dtn_reset_onclick = function(obj,e)
        {
            this.div_search.cbo_region.set_index(0); 
            this.div_search.cbo_country.set_index(0); 
            this.div_search.cbo_location.set_index(0);
            
            // 데이터셋 필터 해제
            this.ds_countries.filter(""); 
            this.ds_location.filter(""); 

        /*    this.callMethod(); */
        }

        /***************************************************
        * 함수명 : div_search_cbo_region_onitemchanged
        * 내  용 : 지역 콤보 박스 값 선택 시 국가, 창고 위치 콤보박스 필터
        ****************************************************/
        this.div_search_cbo_region_onitemchanged = function(obj,e)
        {
            var selectedRegionId = this.div_search.cbo_region.value;
        	this.div_search.cbo_country.set_index(0); 
         	this.div_search.cbo_location.set_index(0); 
         	
            if (selectedRegionId != null) {
                this.ds_countries.filter("REGION_ID == '" + selectedRegionId + "' || REGION_ID == ''"); 
            } else {
                this.ds_countries.filter(""); 
            }
        };

        
        /***************************************************
        * 함수명 : div_search_cbo_country_onitemchanged
        * 내  용 : 국가 콤보 박스 값 선택 시 창고 위치 콤보박스 필터
        ****************************************************/
        this.div_search_cbo_country_onitemchanged = function(obj,e)
        {	
            var selectedCountryId = this.div_search.cbo_country.value;
        	this.div_search.cbo_location.set_index(0); 
        	
            if (selectedCountryId != null) {
                this.ds_location.filter("COUNTRY_ID == '" + selectedCountryId + "'|| COUNTRY_ID == ''"); 
            } else {
                this.ds_location.filter(""); 
            }
        };

        
        /***************************************************
        * 함수명 : grd_warehouse_oncellclick
        * 내  용 : 그리드 셀 클릭 시 지역 및 국가 값에 맞는 필터 처리
        ****************************************************/
        this.grd_warehouse_oncellclick = function(obj,e)
        { 	
            if (e.col == 0) {
               
                var currentValue = obj.getCellValue(e.row, e.cell);

        		var newValue = '';
        		
        		if(currentValue == 1) {
        			newValue = 1;
        		} else {
        			newValue = '';
        		}
                
                this.ds_warehouse.setColumn(e.row, "CHECK", newValue);
            }

        
               
        	var selectedRegionValue = obj.getCellValue(e.row, "2");
        	var selectedCountryValue = obj.getCellValue(e.row, "3");

        	var regionId = this.findRegionIdByValue(selectedRegionValue);
        	var countryId = this.findCountryIdByValue(selectedCountryValue);
         	this.filterDataset(regionId, countryId);
        }

        /***************************************************
        * 함수명 : findRegionIdByValue
        * 내  용 : 주어진 지역 이름에 해당하는 지역 ID를 찾음
        ****************************************************/
        this.findRegionIdByValue = function(regionValue) {
            var regionId = null;
        	
            for (var i = 0; i < this.ds_regionGrd.getRowCount(); i++) {
                var value = this.ds_regionGrd.getColumn(i, "REGION_NAME");
                if (value === regionValue) {
                    regionId = this.ds_regionGrd.getColumn(i, "REGION_ID");  
                    break;
                }
            }
            return regionId;
        };

        /***************************************************
        * 함수명 : findCountryIdByValue
        * 내  용 : 주어진 국가 이름에 해당하는 국가 ID를 찾음
        ****************************************************/
        this.findCountryIdByValue = function(countryValue) {
            var countryId = null;
        	
            for (var i = 0; i < this.ds_countriesGrd.getRowCount(); i++) {
                var value = this.ds_countriesGrd.getColumn(i, "COUNTRY_NAME"); 
                if (value === countryValue) {
                    countryId = this.ds_countriesGrd.getColumn(i, "COUNTRY_ID");  
                    break;
                }
            }
            return countryId;
        };

        /***************************************************
        * 함수명 : filterDataset
        * 내  용 : 지역 ID 및 국가 ID에 맞춰 데이터를 필터링 처리
        ****************************************************/
        this.filterDataset = function (regionId,countryId) {
        	this.ds_countriesGrd.set_enableevent(false);
        	this.ds_locationGrd.set_enableevent(false);
        	
        	var filterExprCountry = "REGION_ID == '" + regionId + "' || REGION_ID == ''";
        	var filterExprLocation = "COUNTRY_ID == '" + countryId + "' || COUNTRY_ID == '' ";
        	
        	this.ds_countriesGrd.filter(filterExprCountry);
        	this.ds_locationGrd.filter(filterExprLocation);
        	
        	this.ds_countriesGrd.set_enableevent(true);
        	this.ds_locationGrd.set_enableevent(true);
        };

        
         

        
        /***************************************************
        * 함수명 : Combo_onkeydown
        * 내  용 : 콤보 박스에서 엔터 키 입력 시 조회 트랜잭션 호출
        ****************************************************/
        this.Combo_onkeydown = function(obj,e)
        {
        	obj.updateToDataset();
        	
            if (e.keycode === 13) {
                this.callMethod();  
            }
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_warehouse.addEventHandler("oncolumnchanged", this.ds_warehouse_oncolumnchanged, this);
            this.addEventHandler("onload", this.fmStorage_onload, this);
            this.st_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_search.cbo_region.addEventHandler("onitemchanged", this.div_search_cbo_region_onitemchanged, this);
            this.div_search.cbo_region.addEventHandler("onkeydown", this.Combo_onkeydown, this);
            this.div_search.cbo_country.addEventHandler("onitemchanged", this.div_search_cbo_country_onitemchanged, this);
            this.div_search.cbo_country.addEventHandler("onkeydown", this.Combo_onkeydown, this);
            this.div_search.cbo_location.addEventHandler("onitemchanged", this.div_search_cbo_location_onitemchanged, this);
            this.div_search.cbo_location.addEventHandler("onkeydown", this.Combo_onkeydown, this);
            this.div_top.dtn_reset.addEventHandler("onclick", this.div_top_dtn_reset_onclick, this);
            this.div_top.btn_delete.addEventHandler("onclick", this.div_top_btn_delete_onclick, this);
            this.div_top.btn_save.addEventHandler("onclick", this.div_top_btn_save_onclick, this);
            this.div_top.btn_addRow.addEventHandler("onclick", this.div_top_btn_addRow_onclick, this);
            this.div_top.btn_search.addEventHandler("onclick", this.div_top_btn_search_onclick, this);
            this.grd_warehouse.addEventHandler("oncellclick", this.grd_warehouse_oncellclick, this);
            this.grd_warehouse.addEventHandler("onheadclick", this.grd_warehouse_onheadclick, this);

        };

        this.loadIncludeScript("fmWarehouse.xfdl", true);

       
    };
}
)();
