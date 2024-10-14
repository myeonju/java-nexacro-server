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
                this.set_name("frmOrderList");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1002,670);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_orderList", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pivot", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "20", "104", null, null, "20", "20", this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_pivot");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:CATEGORY_NAME\" suppress=\"1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:PRODUCT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_title", "absolute", "24", "0", null, "36", "73.85%", null, this);
            obj.set_taborder("1");
            obj.set_text("▣ 카테고리별 주문 목록");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_top", "absolute", "687", "12", null, "60", "20", null, this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "-1", "60", "21", "0", null, this.div_top);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);

            obj = new Div("div_cond", "absolute", "20", "50", null, "42", "20", null, this);
            obj.set_taborder("3");
            obj.style.set_border("1 solid lightskyblue");
            this.addChild(obj.name, obj);
            obj = new Static("st_region", "absolute", "20", "11", "65", "21", null, null, this.div_cond);
            obj.set_taborder("10");
            obj.set_text("카테고리");
            obj.style.set_align("right middle");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("st_country", "absolute", "233", "11", "65", "21", null, null, this.div_cond);
            obj.set_taborder("11");
            obj.set_text("상품명");
            obj.style.set_align("right middle");
            this.div_cond.addChild(obj.name, obj);
            obj = new Static("st_location", "absolute", "446", "10", "65", "21", null, null, this.div_cond);
            obj.set_taborder("12");
            obj.set_text("주문일");
            obj.style.set_align("right middle");
            this.div_cond.addChild(obj.name, obj);
            obj = new Combo("cbo_region", "absolute", "93", "11", "100", "21", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_displaynulltext("-전체-");
            obj.set_innerdataset("@ds_category");
            obj.set_codecolumn("CATEGORY_ID");
            obj.set_datacolumn("CATEGORY_NAME");
            obj.style.set_displaynulltextcolor("black");
            obj.style.set_align("left");
            obj.set_displayrowcount("10");
            obj.set_type("dropdown");
            obj.set_index("-1");
            obj = new Edit("edt_productName", "absolute", "306", "11", "100", "21", null, null, this.div_cond);
            obj.set_taborder("1");
            obj.set_maxlength("60");
            this.div_cond.addChild(obj.name, obj);
            obj = new Calendar("cal_fromDate", "absolute", "519", "10", "100", "21", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "621", "11", "20", "20", null, null, this.div_cond);
            obj.set_taborder("15");
            obj.set_text("-");
            obj.style.set_align("center");
            this.div_cond.addChild(obj.name, obj);
            obj = new Calendar("cal_toDate", "absolute", "643", "10", "100", "21", null, null, this.div_cond);
            this.div_cond.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Button("btn_main", "absolute", "267", "8", "122", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("메인 화면");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.div_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div00");

            	}
            );
            this.div_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 962, 36, this.div_cond,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_border("1 solid lightskyblue");

            	}
            );
            this.div_cond.addLayout(obj.name, obj);

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
            obj = new BindItem("item0","div_cond.edt_productName","value","ds_cond","PRODUCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_cond.cal_fromDate","value","ds_cond","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_cond.cal_toDate","value","ds_cond","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_cond.cbo_region","value","ds_cond","CATEGORY");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frmOrderList.xfdl", function(exports) {
        /***************************************************
        * 함수명 : frmOrderList_onload
        * 내  용 : 온로드
        ****************************************************/
        this.frmOrderList_onload = function(obj,e)
        {
        	this.fn_comboBox();
        }

        /***************************************************
        * 함수명 : fn_onloadTrasaction
        * 내  용 : categoryComboBox  트랜잭션
        ****************************************************/
        this.fn_comboBox = function()
        {
            var sId    = "categoryComboBox";
            var sUrl   = "SvcURL::categoryComboBox";
            var sInDs  = "";
            var sOutDs = "ds_category=outDataset";
            var sArg   = "";
            var sfunc  = "";

           this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        /***************************************************
        * 함수명 : div_top_btn_search_onclick
        * 내  용 : 조회 버튼 클릭 시 호출
        ****************************************************/
        this.div_top_btn_search_onclick = function(obj,e)
        {
        	this.fn_callMethod();
        }

        /***************************************************
        * 함수명 : fn_callMethod
        * 내  용 : 조회 트랜잭션
        ****************************************************/
        this.fn_callMethod = function()
        {

        	var fromDate = this.div_cond.cal_fromDate.value;
            var toDate = this.div_cond.cal_toDate.value;
            
        	// 날짜 형식 검증
            const minDate = "1900-01-01";

            if ((toDate != '' && toDate < minDate) || (fromDate != '' && fromDate < minDate)) {
                alert("1900년 이전은 입력할 수 없습니다. 값을 확인해주세요.");
                return;
            }
            
            if (fromDate && toDate) {
                if (fromDate > toDate) {
                    alert("종료일은 시작일보다 클 수 없습니다.");
                    return;
                }
            }
            
            var sId    = "orderList";
            var sUrl   = "SvcURL::orderList";
            var sInDs  = "inDataset=ds_cond";
            var sOutDs = "ds_orderList=outDataset";
            var sArg   = "";
            var sfunc  = "fn_searchCallback";

           this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
           
        }

        // /***************************************************
        // * 함수명 : fn_searchCallback
        // * 내  용 : 트랜잭션 완료 후 콜백 함수
        // ****************************************************/
        // this.fn_searchCallback = function(sId, nErrorCode, sErrorMsg)
        // {
        //     if (nErrorCode < 0) {
        //         trace("Error: " + sErrorMsg);
        //         return;
        //     }
        //     
        //     trace("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        //     
        //     // ds_orderList에서 피벗 데이터 처리
        //     this.processPivotData();
        // }

        
        /***************************************************
        * 함수명 : processPivotData
        * 내  용 : ds_orderList의 데이터를 피벗하여 ds_pivot에 추가
        ****************************************************/
        this.processPivotData = function() {
            // 피벗 데이터 초기화
            this.ds_pivot.clear();
            
            // 날짜 목록 추출 (중복 제거)
            var dateList = [];
            var orderCount = this.ds_orderList.rowcount;
            
            for (var i = 0; i < orderCount; i++) {
                var orderDate = this.ds_orderList.getColumn(i, "ORDER_DATE");
                if (dateList.indexOf(orderDate) === -1) {
                    dateList.push(orderDate);
                }
            }

            // 날짜별 열 추가
            dateList.sort(); // 날짜 오름차순 정렬
            for (var i = 0; i < dateList.length; i++) {
                var date = dateList[i];
                this.ds_pivot.addColumn("DATE_" + date, "STRING", 256);
            }
        	
            // 카테고리 및 제품별 데이터 추가
            this.populatePivotData(dateList);
        }
        this.populatePivotData = function(dateList) {
        	
            var orderCount = this.ds_orderList.rowcount;
        	this.ds_pivot.addColumn("CATEGORY_NAME", "STRING");
        	this.ds_pivot.addColumn("PRODUCT_NAME", "STRING");

            for (var i = 0; i < orderCount; i++) {
                var categoryName = this.ds_orderList.getColumn(i, "CATEGORY_NAME");
                var productName = this.ds_orderList.getColumn(i, "PRODUCT_NAME");
                var orderDate = this.ds_orderList.getColumn(i, "ORDER_DATE");
                var productCnt = this.ds_orderList.getColumn(i, "PRODUCT_CNT");
                
                // 해당 카테고리, 제품이 이미 ds_pivot에 존재하는지 확인
                var rowIdx = this.ds_pivot.findRowExpr("CATEGORY_NAME == '" + categoryName + "' && PRODUCT_NAME == '" + productName + "'");
           
                // 없으면 새로운 행 추가
                if (rowIdx < 0) {
                    rowIdx = this.ds_pivot.addRow();
                  
                    this.ds_pivot.setColumn(rowIdx, "CATEGORY_NAME", categoryName);
                    this.ds_pivot.setColumn(rowIdx, "PRODUCT_NAME", productName);
                }

                // 해당 날짜 열에 주문 수량 설정
                var dateColumn = "DATE_" + orderDate;
                this.ds_pivot.setColumn(rowIdx, dateColumn, productCnt);
            }  

        }

        this.updateGridColumns = function(dateList) {
            var grid = this.Grid00;
            var format = grid.formats;//grid.getFormatString();
            
            this.Grid00.set_formats(format);
        //     
        //     // 기존 헤드 행 및 열 제거
        //     if (grid.getFormatRowCount() > 1) {
        //         grid.deleteContentsRow("head", 1); // 기존에 추가된 헤드 행 삭제
        //     }
        //     
        //     // 기존 날짜 열 제거 (기존에 추가한 동적 열 초기화)
        //     var columnCount = grid.getFormatColCount();
        //     for (var i = columnCount - 1; i >= 2; i--) {
        //        grid.deleteContentsCol(i);
        //     }
        //     
            ////////////////////////////////////////////////////////////////
            
        	var yearArr = []; // 년도 배열
        	var countArr = []; // 년도별 병합해야할 컬럼 수
        	var cnt = 0;
        	var index = 0;
        	var prevYear1 = ""; // 이전 행의 연도를 저장할 변수
        	
        	
        	for (var i = 0; i < dateList.length; i++) {
                var date = dateList[i];
                var year = date.split('-')[0];
                
                
                if (year !== prevYear1) {		
        			yearArr[index] = year;
        			if(index>0){
        				countArr[index-1] = cnt;
        			}
        			prevYear1 = year;
        			index++; 
        			cnt = 0;
                }  else  { // 이전 년도랑 같을 경우
        			cnt = cnt+1;
                } 
        	}
        	
        	// 마지막 년도에 대한 처리
        	countArr[index - 1] = cnt; 

        // 	for(var i=0; i<yearArr.length; i++){
        // 		trace("year:: " + yearArr[i] + "  count:: " + countArr[i]);
        // 	}
            
            //////////////////////////////////////////////////////////////

           
        	var prevYear2 = ""; // 이전 행의 연도를 저장할 변수
        	var lastYearIdx = yearArr.length-1; // 마지막 년도
        	  
            this.Grid00.set_enableredraw(false);
            // 새로 추가할 날짜 열 생성
            for (var i = 0; i < dateList.length; i++) {
                var date = dateList[i];
                var year = date.split('-')[0];
        		
        		grid.appendContentsCol();
        		grid.setCellProperty("head", i + 2, "text", year); // 년도 설정
        		prevYear2 = year; // 이전 년도를 현재 년도로 업데이트
        			
                grid.setCellProperty("body", i + 2, "text", "bind:DATE_" + date);
            }

            this.Grid00.set_enableredraw(true);
                
        	// 이전 값과 다를 경우
        	var prevYear2 = "";
        	var idx = 0;
        	var startCell = 2;
        	trace("prevYear2:: " + prevYear2);
        	trace("idx:: " + idx);
        	trace("startCell:: " + startCell);
        	
        	for(var i = 0; i < dateList.length; i++) {
        		var date = dateList[i];
                var year = date.split('-')[0];
        		
        		if (year !== prevYear2) {
        			trace("startCell:: " +startCell);
        			trace("lastCell:" + (startCell+countArr[idx]));
        			
        			try {
        				grid.setFakeMerge(startCell,(startCell+countArr[idx]),-1,-1);
        			} catch(e) {
        				try {				
        					grid.setFakeMerge(startCell,(startCell+countArr[idx]),-1,-1);
        				} catch(e) {
        					grid.setFakeMerge(startCell,(startCell+countArr[idx]),-1,-1);
        				}
        			}
        			
        			prevYear2 = year; // 이전 년도를 현재 년도로 업데이트
        			startCell = (startCell+countArr[idx]+1);
        			idx++;
        		}
        	}
        	
            grid.appendContentsRow("head"); // 새로운 헤드 행 추가    
        	
            // month 헤더 추가
            for (var i = 0; i < dateList.length; i++) {

            var date = dateList[i];
            var year = date.split('-')[0]; 
            var month = date.split('-')[1]; // 월만 추출
            
           		 // 첫 번째 열과 두 번째 열에 카테고리명과 상품명 표시
        		grid.setCellProperty("head", dateList.length+2, "text", "카테고리명"); 
        		grid.setCellProperty("head", dateList.length + 3, "text", "상품명");
            
        		grid.setCellProperty("head", dateList.length + i + 4, "text", month);
            }
        }

        this.fn_searchCallback = function(sId,nErrorCode,sErrorMsg) {
            if (nErrorCode < 0) {
                trace("Error: " + sErrorMsg);
                return;
            }
            
            // 피벗 데이터 처리
            this.processPivotData();
            
            // 그리드 컬럼 업데이트
            var dateList = [];
            var orderCount = this.ds_orderList.rowcount;
            for (var i = 0; i < orderCount; i++) {
                var orderDate = this.ds_orderList.getColumn(i, "ORDER_DATE");
                if (dateList.indexOf(orderDate) === -1) {
                    dateList.push(orderDate);
                }
            }
            dateList.sort();
            
            this.updateGridColumns(dateList);
        }

        
        /***************************************************
        * 함수명 : common_onkeydown
        * 내  용 : 검색값 입력 후 Enter 키 입력 시 실행되는 함수
        ****************************************************/
        this.Combo_onkeydown = function(obj,e)
        {
        	if (e.keycode === 13) {
        		obj.updateToDataset();
        	
                this.fn_callMethod();  
            }
        }

        
        this.Grid00_onheadclick = function(obj,e)
        {
        	alert(e.cell);
        	alert(obj.getCellProperty("head", e.cell, "text"));
        }

        
        /***************************************************
        * 함수명 : btn_main_onclick
        * 내  용 : 메인화면으로 이동
        ****************************************************/
        this.btn_main_onclick = function(obj,e)
        {
        	var url = "http://localhost:8081/np0819/index.html";
        	window.location.href = url;
        }

        this.Button00_onclick = function(obj,e)
        {
        	trace(this.Grid00.formats);
        	this.Grid00.setFakeMerge(2, 6, -1, -1);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frmOrderList_onload, this);
            this.Grid00.addEventHandler("onheadclick", this.Grid00_onheadclick, this);
            this.st_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_top.btn_search.addEventHandler("onclick", this.div_top_btn_search_onclick, this);
            this.div_cond.cbo_region.addEventHandler("onitemchanged", this.div_search_cbo_region_onitemchanged, this);
            this.div_cond.cbo_region.addEventHandler("onkeydown", this.Combo_onkeydown, this);
            this.div_cond.edt_productName.addEventHandler("onkeydown", this.Combo_onkeydown, this);
            this.div_cond.cal_fromDate.addEventHandler("onkeydown", this.Combo_onkeydown, this);
            this.div_cond.cal_toDate.addEventHandler("onkeydown", this.Combo_onkeydown, this);
            this.btn_main.addEventHandler("onclick", this.btn_main_onclick, this);

        };

        this.loadIncludeScript("frmOrderList.xfdl", true);

       
    };
}
)();
