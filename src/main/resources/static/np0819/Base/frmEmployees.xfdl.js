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
                this.set_name("frmEmployee");
                this._setFormPosition(0,0,1002,670);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"5\"/><Column id=\"JOB_TITLE\" type=\"STRING\" size=\"10\"/><Column id=\"FIRST_NAME\" type=\"STRING\" size=\"2\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"2\"/><Column id=\"LAST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"FULLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/><Column id=\"FROMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"MANAGER_ID\" type=\"INT\" size=\"256\"/><Column id=\"MANAGER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_job", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"5\"/><Column id=\"JOB_TITLE\" type=\"STRING\" size=\"10\"/><Column id=\"FIRST_NAME\" type=\"STRING\" size=\"2\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"2\"/><Column id=\"LAST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_employees", "absolute", "20", "108", null, null, "20", "20", this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"144\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:lightsteelblue;\" text=\" 관리번호\"/><Cell col=\"1\" style=\"background:lightsteelblue;\" text=\"직책\"/><Cell col=\"2\" style=\"background:lightsteelblue;\" text=\"이름\"/><Cell col=\"3\" style=\"background:lightsteelblue;\" text=\"EMAIL\"/><Cell col=\"4\" style=\"background:lightsteelblue;\" text=\"고용일\"/><Cell col=\"5\" style=\"background:lightsteelblue;\" text=\"관리자명\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPLOYEE_ID\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:JOB_TITLE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:FIRST_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:EMAIL\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:MANAGER_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_title", "absolute", "20", "0", null, "36", "805", null, this);
            obj.set_taborder("3");
            obj.set_text("▣ 직원 목록");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_Top", "absolute", "664", "4", null, "28", "20", null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Button("btn_save_popup", "absolute", null, "5", "60", "21", "0", null, this.div_Top);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.style.set_background("steelblue");
            obj.style.set_border("1solid solid #999999ff");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_Top.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "5", "60", "21", "61", null, this.div_Top);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.style.set_background("steelblue");
            obj.style.set_border("1solid solid #999999ff");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_Top.addChild(obj.name, obj);
            obj = new Button("btn_reset", "absolute", null, "5", "28", "21", "122", null, this.div_Top);
            obj.set_taborder("2");
            obj.style.set_image("URL('theme://hiclipart.com (1).png')");
            obj.style.set_background("steelblue");
            obj.style.set_border("1solid solid #999999ff");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_Top.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "20", "55", null, "42", "20", null, this);
            obj.set_taborder("1");
            obj.style.set_border("1solid solid lightskyblue");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Combo("cbo_manager", "absolute", "585", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("@ds_manager");
            obj.set_codecolumn("MANAGER_ID");
            obj.set_datacolumn("MANAGER_NAME");
            obj.style.set_align("left");
            obj = new Calendar("cal_toDate", "absolute", "399", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("st_hirDate", "absolute", "202", "10", "65", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("고용일");
            obj.style.set_align("right middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("st_name", "absolute", "18", "10", "65", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("이름");
            obj.style.set_align("right middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_name", "absolute", "91", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_maxlength("60");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("st_manager", "absolute", "512", "10", "65", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("관리자");
            obj.style.set_align("right middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "377", "11", "20", "20", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("-");
            obj.style.set_align("center");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_fromDate", "absolute", "275", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Button("btn_main", "absolute", "145", "8", "122", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("메인 화면");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 318, 28, this.div_Top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div01");

            	}
            );
            this.div_Top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 962, 42, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_border("1solid solid lightskyblue");
            		p.set_scrollbars("none");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1002, 670, this,
            	//-- Layout function
            	function(p) {
            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item5","div_search.cal_fromDate","value","ds_cond","FROMDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.Combo00","value","ds_cond","MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.Calendar01","value","ds_cond","TODATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.Calendar00","value","ds_cond","FROMDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div00.edt_name","value","ds_cond","FULLNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.edt_name","value","ds_cond","FULLNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_search.cbo_manager","value","ds_cond","MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_search.cal_toDate","value","ds_cond","TODATE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frmEmployees.xfdl", function(exports) {
        /***************************************************
        * 화면 id: 직원 목록 및 관리
        * 작성자: 김현주
        * 작성일자: 2024-09-09
        ****************************************************/

        /***************************************************
        * 함수명 : frmEmployee_onload
        * 내  용 : ds_manager와 ds_job 데이터셋 로드
        ****************************************************/
        this.frmEmployee_onload = function(obj,e)
        {
            this.fn_onloadTrasaction();
        }

        this.fn_onloadTrasaction = function()
        {
        	var sId = "empComboBox";
            var sUrl = "SvcURL::empComboBox";
            var sInDs = "";
            var sOutDs = "ds_manager=outDataset, ds_job=outDataset2";
            var sArg = "";
            var sfunc = "fn_callback_comboBox";

           this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        
        /***************************************************
        * 함수명 : fn_callback_comboBox
        * 내  용 : div_search.cbo_manager  -전체- 표시 
        ****************************************************/
        this.fn_callback_comboBox = function(sId,nErrorCode,sErrorMSG)
        {
              if(nErrorCode == 0)
            {
        		var newRow = this.ds_manager.insertRow(0);
        		this.ds_manager.setColumn(newRow, "MANAGER_ID" ,"");
        		this.ds_manager.setColumn(newRow, "MANAGER_NAME", "- 전체 -");
        	
        		this.div_search.cbo_manager.set_index(0);
            }
        }

        
        /***************************************************
        * 함수명 : fn_onloadEdit
        * 내  용 : 수정 완료 후 ds_manager와 ds_job 데이터셋 로드. (수정 완료후 검색 조건 내용이 사라져서 따로 만듬)
        ****************************************************/
        this.fn_onloadEdit = function()
        {
        	var sId = "empComboBox";
            var sUrl = "SvcURL::empComboBox";
            var sInDs = "";
            var sOutDs = "ds_manager=outDataset, ds_job=outDataset2";
            var sArg = "";
            var sfunc = "fn_callback_editComboBox";

           this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        
        /***************************************************
        * 함수명 : fn_callback_editComboBox
        * 내  용 : div_search.cbo_manager  -전체- 표시 
        ****************************************************/
        this.fn_callback_editComboBox = function(sId,nErrorCode,sErrorMSG)
        {
              if(nErrorCode == 0)
            {
        		if(this.div_search.cbo_manager.value == ""){
        			var newRow = this.ds_manager.insertRow(0);
        			this.ds_manager.setColumn(newRow, "MANAGER_ID" ,"");
        			this.ds_manager.setColumn(newRow, "MANAGER_NAME", "- 전체 -");
        	
        			this.div_search.cbo_manager.set_index(0);
        		} 
        		
            }
        }

        

        
        /***************************************************
        * 함수명 : common_onkeydown
        * 내  용 : 검색값 입력 후 Enter 키 입력 시 실행되는 함수
        ****************************************************/
        this.common_onkeydown = function(obj,e)
        {
            if (e.keycode === 13) {
        		obj.updateToDataset();
        	
                this.fn_searchTransaction();  
            }
        }

        /***************************************************
        * 함수명 : div_Top.btn_search_onclick
        * 내  용 :  조회 버튼 클릭 시 실행되는 함수
        ****************************************************/
        this.div_Top.btn_search_onclick = function(obj,e)
        {	
        	/*trace(this.div_search.cal_fromDate.value);*/
            this.fn_searchTransaction();  
        }

        /***************************************************
        * 함수명 : fn_searchTransaction
        * 내  용 : 조회, 날짜 검증 수행 
        ****************************************************/

        this.fn_searchTransaction = function() {

        //     var fromDate = this.div_search.cal_fromDate ? this.div_search.cal_fromDate.value : null;
        //     var toDate = this.div_search.cal_toDate ? this.div_search.cal_toDate.value : null;
        	
        	var fromDate = this.div_search.cal_fromDate.value;
            var toDate = this.div_search.cal_toDate.value;
            
        	// 날짜 형식 검증
            const minDate = "1900-01-01";
        	trace("toDate:: " + toDate);
        	trace("fromDate:: " + fromDate);
        	
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
            

            var sId = "search";
            var sUrl = "SvcURL::search";
            var sInDs = "inDataset=ds_cond";
            var sOutDs = "ds_emp=outDataset";
            var sArg = "";
            var sfunc = "fn_callback";

            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        /***************************************************
        * 함수명 : fn_callback
        * 내  용 : 조회 트랜잭션 콜백 함수
        ****************************************************/
        this.fn_save_callback = function(sId,nErrorCode,sErrorMSG)
        {
            if (nErrorCode != 0) {
        		alert("ErrorMSG." + sErrorMSG);
            }
        }

        
        /***************************************************
        * 함수명 : div_Top_btn_reset_onclick
        * 내  용 : 초기화 버튼 클릭 시 데이터 초기화
        ****************************************************/
        this.div_Top_btn_reset_onclick = function(obj,e)
        {
            this.div_search.edt_name.set_value("");  
            this.div_search.cal_fromDate.set_value(null);  
            this.div_search.cal_toDate.set_value(null);
            this.div_search.cbo_manager.set_index(0);
             
        //      if (this.div_search.cbo_manager.value) {
        // 		
        //         var newRow = this.ds_manager.insertRow(0);
        //         this.ds_manager.setColumn(newRow, "MANAGER_ID", "");
        //         this.ds_manager.setColumn(newRow, "MANAGER_NAME", "- 전체 -");
        //		}
        //     
        // 	if (this.div_search.cbo_manager) {
        //         this.div_search.cbo_manager.set_index(0);
        //     }
            
        }

        /***************************************************
        * 함수명 : div_Top_btn_save_popup_onclick 
        * 내  용 : 등록 팝업 버튼 클릭 시 팝업 열기
        ****************************************************/
        this.div_Top_btn_save_popup_onclick = function(obj,e)
        {	
            var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);
            var objChild = new ChildFrame("popSaveForm", "absolute", nLeft, nTop, 400, 500);

            objChild.set_formurl("Base::frmEmployeeSave.xfdl");
            objChild.set_openalign("center middle");
            objChild.set_dragmovetype("all");
            
            var objArg = {
        		sType: "s",
                ds_manager: this.ds_manager.saveXML(),
                ds_job: this.ds_job.saveXML()
            };
            
            objChild.showModal(this.getOwnerFrame(), objArg, this, "");
        }

        /***************************************************
        * 함수명 : grd_employees_oncelldblclick 
        * 내  용 : 그리드 행 더블클릭 시 데이터셋에 데이터 추가
        ****************************************************/
        this.grd_employees_oncelldblclick = function(obj,e)
        {
            var nRow = e.row;
            if (nRow < 0) return;

            if (!this.ds_select) {
                this.ds_select = new nexacro.Dataset("ds_select", this);
                this.addChild("ds_select", this.ds_select);
            }else {
                this.ds_select.clearData();
            }

        	var aRow = this.ds_select.addRow();
        	this.ds_select.copyRow(aRow,this.ds_emp, e.row);
        	
            var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);
            var objChild = new ChildFrame("popSaveForm", "absolute", nLeft, nTop, 400, 500);

            objChild.set_formurl("Base::frmEmployeeSave.xfdl");
            objChild.set_openalign("center middle");
            objChild.set_dragmovetype("all");  

            var objArg = {
                ds_select: this.ds_select.saveXML()
            };

            objChild.showModal(this.getOwnerFrame(), objArg, this, "fn_callback_saveForm");
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
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frmEmployee_onload, this);
            this.grd_employees.addEventHandler("oncelldblclick", this.grd_employees_oncelldblclick, this);
            this.st_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Top.btn_save_popup.addEventHandler("onclick", this.div_Top_btn_save_popup_onclick, this);
            this.div_Top.btn_search.addEventHandler("onclick", this.div_Top.btn_search_onclick, this);
            this.div_Top.btn_reset.addEventHandler("onclick", this.div_Top_btn_reset_onclick, this);
            this.div_search.cbo_manager.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_search.cal_toDate.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_search.edt_name.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.div_search.cal_fromDate.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.btn_main.addEventHandler("onclick", this.btn_main_onclick, this);

        };

        this.loadIncludeScript("frmEmployees.xfdl", true);

       
    };
}
)();
