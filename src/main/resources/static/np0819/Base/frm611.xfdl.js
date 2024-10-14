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
                this.set_name("frm611");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1002,670);
            }
            this.getSetter("taborder").set("12");

            
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
            obj = new Grid("Grid00", "absolute", "20", "108", null, null, "20", "20", this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"144\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:lightsteelblue;\" text=\" 관리번호\"/><Cell col=\"1\" style=\"background:lightsteelblue;\" text=\"직책\"/><Cell col=\"2\" style=\"background:lightsteelblue;\" text=\"이름\"/><Cell col=\"3\" style=\"background:lightsteelblue;\" text=\"EMAIL\"/><Cell col=\"4\" style=\"background:lightsteelblue;\" text=\"고용일\"/><Cell col=\"5\" style=\"background:lightsteelblue;\" text=\"관리자명\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPLOYEE_ID\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:JOB_TITLE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:FIRST_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:EMAIL\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:MANAGER_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "20", "55", null, "42", "20", null, this);
            obj.set_taborder("29");
            obj.set_scrollbars("none");
            obj.style.set_border("1solid solid darkturquoise");
            this.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "534", "9", "120", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_manager");
            obj.set_codecolumn("MANAGER_ID");
            obj.set_datacolumn("MANAGER_NAME");
            obj.style.set_align("center");
            obj.set_index("-1");
            obj = new Calendar("Calendar01", "absolute", "329", "9", "100", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("Calendar00", "absolute", "200", "9", "100", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("Static02", "absolute", "146", "9", "46", "21", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("고용일");
            obj.style.set_align("right middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "18", "9", "34", "21", null, null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("이름");
            obj.style.set_align("right middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "60", "9", "71", "21", null, null, this.Div00);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "469", "9", "57", "21", null, null, this.Div00);
            obj.set_taborder("6");
            obj.set_text("관리자");
            obj.style.set_align("right middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "308", "9", "13", "14", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_text("-");
            obj.style.set_align("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "0", null, "36", "805", null, this);
            obj.set_taborder("42");
            obj.set_text("▣ 직원 목록");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_Top", "absolute", "664", "4", null, "28", "20", null, this);
            obj.set_taborder("43");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Button("btn_save_popup", "absolute", null, "0", "60", "26", "0", null, this.div_Top);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.style.set_background("steelblue");
            obj.style.set_border("1solid solid #999999ff");
            obj.style.set_color("aliceblue");
            this.div_Top.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "0", "60", "26", "61", null, this.div_Top);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.style.set_background("steelblue");
            obj.style.set_border("1solid solid #999999ff");
            obj.style.set_color("aliceblue");
            this.div_Top.addChild(obj.name, obj);
            obj = new Button("btn_reset", "absolute", null, "0", "28", "26", "122", null, this.div_Top);
            obj.set_taborder("2");
            obj.style.set_image("URL('theme://hiclipart.com (1).png')");
            obj.style.set_background("steelblue");
            obj.style.set_border("1solid solid #999999ff");
            obj.style.set_color("aliceblue");
            this.div_Top.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 42, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.set_scrollbars("none");
            		p.style.set_border("1solid solid darkturquoise");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 28, this.div_Top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_text("Div01");

            	}
            );
            this.div_Top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1002, 670, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.getSetter("taborder").set("12");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","Div00.Combo00","value","ds_cond","MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.Calendar01","value","ds_cond","TODATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.Calendar00","value","ds_cond","FROMDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div00.Edit00","value","ds_cond","FULLNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frm611.xfdl", function(exports) {
        /*
        화면 id: 직원 목록 및 관리
        작성자: 김현주
        작성일자: 2024-09-09
        */

        // ds_manager와 ds_job 데이터셋 로드
        this.frm611_onload = function(obj,e)
        {
            // ds_manager 트랜잭션 호출
            var sIdManager = "manager";
            var sUrlManager = "SvcURL::manager";
            var sInDsManager = "";
            var sOutDsManager = "ds_manager=outDataset";
            var sArgManager = "";
            var sfuncManager = "fn_callback_manager"; // 콜백 함수 분리

            this.transaction(sIdManager, sUrlManager, sInDsManager, sOutDsManager, sArgManager, sfuncManager);

            // ds_job 트랜잭션 호출
            var sIdJob = "job";
            var sUrlJob = "SvcURL::job";
            var sInDsJob = "";
            var sOutDsJob = "ds_job=outDataset";
            var sArgJob = "";
            var sfuncJob = "fn_callback_job"; // 콜백 함수 분리

            this.transaction(sIdJob, sUrlJob, sInDsJob, sOutDsJob, sArgJob, sfuncJob);
        }

        
        // 조회 버튼 클릭 시 데이터 조회
        this.Button02_onclick = function(obj,e)
        {
            this.callMethod();
        }

        this.callMethod = function()
        {
            var sId    = "search";
            var sUrl   = "SvcURL::search";
            var sInDs  = "inDataset=ds_cond";
            var sOutDs = "ds_emp=outDataset";
            var sArg   = "";
            var sfunc  = "fn_callback";

            this.transaction(sId,sUrl,sInDs,sOutDs,sArg,sfunc);
        }

        this.fn_callback = function(sId,nErrorCode,sErrorMSG)
        {
            if(nErrorCode == 0)
            {
        		var existingManagerId = this.ds_manager.getColumn(0, "MANAGER_ID");
        		
        // 		if(existingManagerId !== "999"){
        // 			var newRow = this.ds_manager.insertRow(0);
        // 			this.ds_manager.setColumn(newRow, "MANAGER_ID" ,"");
        // 			this.ds_manager.setColumn(newRow, "MANAGER_NAME", "- 전체 -");
        // 		}
        // 		
        		this.Div00.Combo00.set_index(0);
                // 완료 확인
                var a = this.ds_emp.saveXML();
                trace(a);
            }
        }

        // 초기화 버튼 클릭 시 데이터 초기화
        this.div_reset_btn_emp_onclick = function(obj,e)
        {

            this.Div00.Edit00.set_value("");  
            this.Div00.Calendar00.set_value(null);  
            this.Div00.Calendar01.set_value(null); 
            this.Div00.Combo00.set_value(null); 

            this.callMethod(); 
        }

        
        // ds_manager 콜백 함수
        this.fn_callback_manager = function(sId,nErrorCode,sErrorMSG)
        {
              if(nErrorCode == 0)
            {
        		var existingManagerId = this.ds_manager.getColumn(0, "MANAGER_ID");
        		
        		if(existingManagerId !== "999"){
        			var newRow = this.ds_manager.insertRow(0);
        			this.ds_manager.setColumn(newRow, "MANAGER_ID" ,"");
        			this.ds_manager.setColumn(newRow, "MANAGER_NAME", "- 전체 -");
        		}
        		
        		this.Div00.Combo00.set_index(0);
                // 완료 확인
                var a = this.ds_emp.saveXML();
                trace(a);
            }
        }

        
        // 그리드 행 더블클릭 시 데이터셋에 데이터 추가
        this.Grid00_oncelldblclick = function(obj,e)
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
            var rowCount = this.ds_emp.rowcount; 
            var colCount = this.ds_emp.colcount; 

        	var aRow = this.ds_select.addRow();
        	this.ds_select.copyRow(aRow,this.ds_emp, e.row);
        	
            // 팝업 열기
            var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);
            var objChild = new ChildFrame("popSaveForm", "absolute", nLeft, nTop, 400, 500);

            // 팝업할 폼 파일 설정
            objChild.set_formurl("Base::frmSave.xfdl");
            objChild.set_openalign("center middle");
            objChild.set_dragmovetype("all");  

            // 더블 클릭한 행의 데이터와 데이터셋 전달
            var objArg = {
                
            };

            objChild.showModal(this.getOwnerFrame(), objArg, this, "fn_callback_saveForm");
        }

        

        
        // 등록 팝업 버튼 클릭 시 팝업 열기
        this.div_save_btn_emp_onclick = function(obj,e)
        {
            var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);
            var objChild = new ChildFrame("popSaveForm", "absolute", nLeft, nTop, 400, 500);

            // 팝업할 폼 파일 설정
            objChild.set_formurl("Base::frmSave.xfdl");
            objChild.set_openalign("center middle");
            objChild.set_dragmovetype("all");  

            // 팝업창에 데이터셋 전달
            var objArg = {
                ds_manager: this.ds_manager.saveXML(),
                ds_job: this.ds_job.saveXML() 
            };

            // 모달로 팝업 표시
            objChild.showModal(this.getOwnerFrame(), objArg, this, "fn_callback_saveForm");
        }

        this.common_onkeydown = function(obj,e)
        {
        	obj.updateToDataset();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frm611_onload, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.Div00.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.Div00.Combo00.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.Div00.Calendar01.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.Div00.Calendar00.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.Div00.Static02.addEventHandler("onclick", this.Static01_onclick, this);
            this.Div00.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Div00.Edit00.addEventHandler("onkeydown", this.common_onkeydown, this);
            this.Div00.Static03.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_Top.btn_save_popup.addEventHandler("onclick", this.div_save_btn_emp_onclick, this);
            this.div_Top.btn_search.addEventHandler("onclick", this.Button02_onclick, this);
            this.div_Top.btn_reset.addEventHandler("onclick", this.div_reset_btn_emp_onclick, this);

        };

        this.loadIncludeScript("frm611.xfdl", true);

       
    };
}
)();
