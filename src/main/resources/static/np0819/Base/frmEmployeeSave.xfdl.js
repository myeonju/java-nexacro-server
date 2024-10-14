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
                this.set_visible("true");
                this.set_name("frmRegistration");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,595,253);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_job", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_save", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEESID\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"FIRSTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"HIREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILDOMAIN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID_S\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"5\"/><Column id=\"JOB_TITLE\" type=\"STRING\" size=\"10\"/><Column id=\"FIRST_NAME\" type=\"STRING\" size=\"2\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"2\"/><Column id=\"LAST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"5\"/><Column id=\"JOB_TITLE\" type=\"STRING\" size=\"10\"/><Column id=\"FIRST_NAME\" type=\"STRING\" size=\"2\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"2\"/><Column id=\"LAST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_emailDomain", this);
            obj._setContents("<ColumnInfo><Column id=\"EMAILDOMAIN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_saveCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEESID\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"FIRSTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"HIREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILDOMAIN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID_S\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_title", "absolute", "20", "0", "209", "36", null, null, this);
            obj.set_taborder("31");
            obj.set_text("▣ 직원 등록/수정");
            obj.style.set_font("16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16", "59", "562", "27", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_employeeId", "absolute", "17", "60", "79", "25", null, null, this);
            obj.set_taborder("40");
            obj.set_text("관리번호");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_manager", "absolute", "367", "60", "79", "25", null, null, this);
            obj.set_taborder("46");
            obj.set_text("관리자");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_manager", "absolute", "448", "62", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_manager_innerdataset = new Dataset("cbo_manager_innerdataset", this.cbo_manager);
            cbo_manager_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"/></Row></Rows>");
            obj.set_innerdataset(cbo_manager_innerdataset);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_manager");
            obj.set_codecolumn("MANAGER_ID");
            obj.set_datacolumn("MANAGER_NAME");
            obj.style.set_align("left");
            obj.set_index("-1");

            obj = new Edit("edt_employeeId", "absolute", "98", "62", "267", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_top", "absolute", "354", "0", null, "43", "5", null, this);
            obj.set_taborder("83");
            this.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "163", "8", "60", "21", null, null, this.div_top);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_del", "absolute", "101", "8", "60", "21", null, null, this.div_top);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_edit", "absolute", "163", "8", "60", "21", null, null, this.div_top);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16", "85", "562", "27", null, null, this);
            obj.set_taborder("84");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "16", "137", "562", "27", null, null, this);
            obj.set_taborder("85");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "16", "163", "562", "74", null, null, this);
            obj.set_taborder("86");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "16", "111", "562", "27", null, null, this);
            obj.set_taborder("87");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Button("fileUpload", "absolute", "17", "164", "560", "72", null, null, this);
            obj.set_taborder("88");
            obj.set_text("file upload");
            obj.style.set_border("1 solid #999999ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone", "absolute", "98", "140", "267", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_maxlength("13");
            this.addChild(obj.name, obj);

            obj = new Static("st_phone", "absolute", "17", "138", "79", "25", null, null, this);
            obj.set_taborder("89");
            obj.set_text("PHONE");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_str", "absolute", "227", "115", "13", "21", null, null, this);
            obj.set_taborder("90");
            obj.set_text("@");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_hireDate", "absolute", "448", "114", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Combo("cbo_emailDomain", "absolute", "238", "114", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_emailDomain_innerdataset = new Dataset("cbo_emailDomain_innerdataset", this.cbo_emailDomain);
            cbo_emailDomain_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">- 선택 -</Col><Col id=\"datacolumn\">- 선택 -</Col></Row><Row><Col id=\"codecolumn\">NAVER.COM</Col><Col id=\"datacolumn\">NAVER.COM</Col></Row><Row><Col id=\"codecolumn\">GMAIL.COM</Col><Col id=\"datacolumn\">GMAIL.COM</Col></Row><Row><Col id=\"codecolumn\">EXAMPLE.COM</Col><Col id=\"datacolumn\">EXAMPLE.COM</Col></Row></Rows>");
            obj.set_innerdataset(cbo_emailDomain_innerdataset);
            obj.set_taborder("5");
            obj.set_displaynulltext("-선택-");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left");
            obj.set_index("-1");

            obj = new Static("st_hireDate", "absolute", "367", "112", "79", "25", null, null, this);
            obj.set_taborder("91");
            obj.set_text("고용일");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_email", "absolute", "17", "112", "79", "25", null, null, this);
            obj.set_taborder("92");
            obj.set_text("EMAIL");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email", "absolute", "98", "114", "128", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_jobTitle", "absolute", "448", "88", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_displaynulltext("-선택-");
            obj.set_innerdataset("@ds_job");
            obj.set_codecolumn("JOB_TITLE");
            obj.set_datacolumn("JOB_TITLE");
            obj.style.set_align("left");

            obj = new Static("st_job", "absolute", "367", "86", "79", "25", null, null, this);
            obj.set_taborder("93");
            obj.set_text("직책");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_name", "absolute", "17", "86", "79", "25", null, null, this);
            obj.set_taborder("94");
            obj.set_text("이름");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_firstName", "absolute", "98", "88", "130", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_displaynulltext("firstname");
            obj.set_maxlength("30");
            obj.style.set_displaynulltextcolor("lightgrey");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lastName", "absolute", "235", "88", "130", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_displaynulltext("lastname");
            obj.set_maxlength("30");
            obj.style.set_displaynulltextcolor("lightgrey");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 173, 43, this.div_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("83");

            	}
            );
            this.div_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 595, 253, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","cbo_manager","value","ds_save","MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_employeeId","value","ds_save","EMPLOYEESID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_phone","value","ds_save","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cal_hireDate","value","ds_save","HIREDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cbo_emailDomain","value","ds_save","EMAILDOMAIN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_email","value","ds_save","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cbo_jobTitle","value","ds_save","JOBTITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_firstName","value","ds_save","FIRSTNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_lastName","value","ds_save","LASTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frmEmployeeSave.xfdl", function(exports) {
        /***************************************************
        * 화면 id: 직원 등록/수정
        * 작성자: 김현주
        * 작성일자: 2024-09-10
        ****************************************************/

        
        /***************************************************
        * 함수명 : frmEmployeeSave_onload
        * 내  용 : 부모 창에서 ds_manager, ds_job, ds_select 데이터셋을 복사하고
        *          저장 모드일 때 화면을 초기화하며, 수정 모드일 때 기존 데이터를 화면에 반영한다.
        ****************************************************/
        this.frmEmployeeSave_onload = function(obj,e) {

            this.ds_manager.copyData(this.opener.ds_manager);
            var manager1 = this.ds_manager.getColumn(0, "MANAGER_ID");
            
            if(manager1 == ""){
        		this.ds_manager.setColumn(0, "MANAGER_NAME", "- 선택 -");
            }
            
            this.ds_job.copyData(this.opener.ds_job);
            var newRow = this.ds_job.insertRow(0);
        	this.ds_job.setColumn(newRow, "JOB_TITLE", "- 선택 -");
        	
            var sType = this.parent.sType;
            
            if (sType === "s") {
                trace("저장 모드입니다. ds_save 초기화.");
                
                this.ds_save.clearData();  
                this.ds_saveCopy.clearData();  
                this.ds_save.addRow();
                this.cbo_manager.set_index(0);
                this.cbo_jobTitle.set_index(0);
                this.cbo_emailDomain.set_index(0);
                    
                this.st_title.set_text("▣ 직원 등록");
                this.div_top.btn_edit.set_visible(false);
                this.div_top.btn_del.set_visible(false);
                
            } else{
        		trace("수정 모드입니다. ");
        		this.ds_select.copyData(this.opener.ds_select);
        		/*trace(this.ds_select.saveXML());*/
        		
        		var managerId = this.ds_select.getColumn(0, "MANAGER_ID");
                
                // managerId가 null인지 확인하여 콤보박스를 비활성화.
                if (managerId == null || managerId == "") {
                    this.cbo_manager.set_enable(false);
                } else {
                    this.cbo_manager.set_enable(true);
                }
                
        		if (this.ds_select.rowcount > 0) {
        			var email = this.ds_select.getColumn(0, "EMAIL");
        			var eIndex = email.split("@");

        			var MrgName = this.ds_select.getColumn(0, "MANAGER_ID");
        			var row = this.ds_manager.findRow("MANAGER_NAME", MrgName);
        			var MrgId = this.ds_manager.getColumn(row, "MANAGER_ID");
        			
        			var firstName = this.ds_select.getColumn(0, "FIRST_NAME");
        			var eIndexName = firstName.split(" ");
        			
        			/*this.edt_firstName.set_value(this.ds_select.getColumn(0, "FIRST_NAME"));*/
        			this.edt_firstName.set_value(eIndexName[0]);
        			this.edt_lastName.set_value(this.ds_select.getColumn(0, "LAST_NAME"));
        			
        			this.edt_email.set_value(eIndex[0]);
        			this.cbo_emailDomain.set_value(eIndex[1]);
        			
        			// HIRE_DATE 값에서 '-'를 제거하고 날짜 형식을 설정
        			var hireDate = this.ds_select.getColumn(0, "HIRE_DATE");
        			var formattedHireDate = hireDate.replace(/-/g, ''); 
                    this.cal_hireDate.set_value(formattedHireDate);
                    
        			this.edt_phone.set_value(this.ds_select.getColumn(0, "PHONE"));
        			this.edt_employeeId.set_value(this.ds_select.getColumn(0, "EMPLOYEE_ID"));
        			this.cbo_jobTitle.set_value(this.ds_select.getColumn(0, "JOB_TITLE"));
        			this.cbo_manager.set_value(this.ds_manager.getColumn(row, "MANAGER_ID"));
        		
        			this.div_top.btn_save.set_visible(false);
        			this.st_title.set_text("▣ 직원 수정");
        			
        			this.ds_saveCopy.copyData(this.ds_save);
        		} 
        		
        		
            }
        }

        /***************************************************
        * 함수명 : cbo_jobTitle_onitemchanged
        * 내  용 :  직책이 PRESIDENT인지 확인하고, PRESIDENT일 경우에는 MANAGER가 없다.
        ****************************************************/
        this.cbo_jobTitle_onitemchanged = function(obj,e)
        {
        	var newJob = obj.value;
        	if(newJob == "PRESIDENT") {
        		this.cbo_manager.set_enable(false);
        		this.cbo_manager.set_value("");
        	} else {
        		this.cbo_manager.set_enable(true);
        		this.cbo_manager.set_index(0);
        	}
        }

        /***************************************************
        * 함수명 : div_top_btn_save_onclick
        * 내  용 : 저장 버튼 클릭 시 필수 입력 필드를 체크한 후, 
        *          입력된 데이터를 저장하는 메서드를 호출한다.
        ****************************************************/
        this.div_top_btn_save_onclick = function(obj,e)
        {	
        	// 필수 입력 필드 체크
        	if(this.cbo_jobTitle.value != "PRESIDENT"){
        		if (this.cbo_manager.value == null || this.cbo_manager.value == "") {
        			alert("관리자를 입력해 주세요.");
        			return;
        		}
        	} 
        	
            if (this.edt_firstName.value == null || this.edt_firstName.value == "") {
                alert("First Name을 입력해 주세요.");
                return;
            }
            if (this.edt_lastName.value == null || this.edt_lastName.value == "") {
                alert("Last Name을 입력해 주세요.");
                return;
            }
            if (this.edt_email.value == null || this.edt_email.value == "") {
                alert("Email을 입력해 주세요.");
                return;
            }
            if (this.cbo_emailDomain.value == "- 선택 -"  || this.cbo_emailDomain.value == "- 선택 -" ) {
                alert("Email 도메인을 입력해 주세요.");
                return;
            }
            if (this.cbo_jobTitle.value == null || this.cbo_jobTitle.value == "") {
                alert("Job Title을 입력해 주세요.");
                return;
            }
            if (this.cal_hireDate.value == null || this.cal_hireDate.value == "") {
                alert(" 고용일을 입력해 주세요.");
                return;
            }
            if (this.edt_phone.value == null || this.edt_phone.value == "") {
        		alert("Phone을 입력해 주세요.");
        		return;
        	}
        	
        	var result = application.confirm("저장하시겠습니까?","question","question");
        	if (result) {
        		this.callMethod();
        	}
        }

        /***************************************************
        * 함수명 : callMethod
        * 내  용 : 저장 트랜잭션
        ****************************************************/
        this.callMethod = function()
        {
            var sId    = "save";
            var sUrl   = "SvcURL::save";
            var sInDs  = "inDataset=ds_save"; 
            var sOutDs = "ds_emp=outDataset";
            var sArg   = ""; 
            var sfunc  = "fn_employeeSaveCallback";
            
            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        
        /***************************************************
        * 함수명 : fn_employeeSaveCallback
        * 내  용 : 저장 콜백 함수
        ****************************************************/
        this.fn_employeeSaveCallback = function(sId,nErrorCode,sErrorMsg) {
            if (nErrorCode == 0) {
        		alert("성공적으로 저장 되었습니다.");
        		this.close();
        		this.opener.fn_searchTransaction();
            }
        }

        
        /***************************************************
        * 함수명 : btn_del_onclick
        * 내  용 : 삭제 버튼 클릭시 호출
        ****************************************************/
        this.btn_del_onclick = function(obj,e) {
        	var result = application.confirm("삭제하시겠습니까?","warning","warning");
        	if (result) {
        		this.fn_delete();
        	}
        }

        /***************************************************
        * 함수명 : fn_delete
        * 내  용 : 삭제 트랜잭션
        ****************************************************/
        this.fn_delete = function() {
            var sId    = "delete";
            var sUrl   = "SvcURL::delete"; 
            var sInDs  = "inDataset=ds_save"; 
            var sOutDs = "ds_emp=outDataset";
            var sArg   = ""; 
            var sfunc  = "fn_employeeDelCallback";

            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        /***************************************************
        * 함수명 : fn_employeeDelCallback
        * 내  용 : 삭제 콜백 함수
        ****************************************************/
        this.fn_employeeDelCallback = function(sId,nErrorCode,sErrorMsg) {
            if (nErrorCode == 0) {
        		alert("삭제가 완료되었습니다.");
        		this.close(); 
        		this.opener.fn_searchTransaction();
            } else {
                alert("삭제 실패: " + sErrorMsg);
            }
        }

        
        /***************************************************
        * 함수명 : div_top_btn_edit_onclick
        * 내  용 : 수정 버튼 클릭 시 필수 입력 필드를 체크한 후, 
        *          입력된 데이터를 수정하는 함수를 호출한다.
        ****************************************************/
        this.div_top_btn_edit_onclick = function(obj,e)
        {	
        	 // 필수 입력 필드 체크
        	if (this.cbo_manager.enable) {
                if (this.cbo_manager.value == null || this.cbo_manager.value == "") {
        			alert("관리자를 입력해 주세요.");
        			return;
        		}
            }
            if (this.edt_firstName.value == null || this.edt_firstName.value == "") {
                alert("First Name을 입력해 주세요.");
                return;
            }
            if (this.edt_lastName.value == null || this.edt_lastName.value == "") {
                alert("Last Name을 입력해 주세요.");
                return;
            }
            if (this.edt_email.value == null || this.edt_email.value == "") {
                alert("Email을 입력해 주세요.");
                return;
            }
            if (this.cbo_emailDomain.value == "- 선택 -" ) {
                alert("Email 도메인을 입력해 주세요.");
                return;
            }
            if (this.cbo_jobTitle.value == null || this.cbo_jobTitle.value == "") {
                alert("Job Title을 입력해 주세요.");
                return;
            }
            if (this.cal_hireDate.value == null || this.cal_hireDate.value == "") {
                alert(" 고용일을 입력해 주세요.");
                return;
            }
            if (this.edt_phone.value == null || this.edt_phone.value == "") {
        		alert("Phone을 입력해 주세요.");
        		return;
        	} 
        	
        	var hireDate = this.cal_hireDate.value;

        	const minDate = "1900-01-01";
        	
        	if (hireDate < minDate) {
                alert("1900년 이전은 입력할 수 없습니다. 값을 확인해주세요.");
                return;
            }
            
            // 데이터셋 변경사항 체크
           if(this.isDataUnchanged()){
        		alert("변경된 값이 없습니다.");
           } else {
        		var result = application.confirm("수정 하시겠습니까?","question","question");
        		if (result) {
        			
        			this.fn_edit();
        		} 
           }
        }

        
        /***************************************************
        * 함수명 : checkChanges
        * 내  용 : ds_save와 ds_saveCopy의 값을 비교하여 변경사항이 있는지 확인
        ****************************************************/
        this.isDataUnchanged  = function()
        {				
            var rowCount = this.ds_save.getRowCount(); 
            var value1 = '';
            var value2 = '';

            for (var i = 0; i < rowCount; i++) {
                var columns = this.ds_save.getColCount(); 

                for (var j = 0; j < columns; j++) {
                    var colId = this.ds_save.getColID(j);
                    
        				value1 = this.ds_save.getColumn(i, colId); 
                    
                    if(typeof value1 == 'object'){
        				value1 = this.ds_save.getColumn(i, colId).toString(); 
                    }
                    
        				value2 = this.ds_saveCopy.getColumn(i, colId); 
                    
                    if(typeof value2 == 'object'){
        				 value2 = this.ds_saveCopy.getColumn(i, colId).toString(); 
                    }
                    
                    if (value1 !== value2) {
        				trace(typeof value1);
        				trace(typeof value2);
        				trace(value1 == value2);
                        return false; 
                    }
                }
            }
            
            return true; 
        }

        
        /***************************************************
        * 함수명 : fn_edit
        * 내  용 : 수정 트랜잭션
        ****************************************************/
        this.fn_edit = function()
        {
            var sId    = "edit";
            var sUrl   = "SvcURL::edit";
            var sInDs  = "inDataset=ds_save";
            var sOutDs = "ds_save=outDataset";
            var sArg   = "";
            var sfunc  = "fn_employeeEditcallback";
            
            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);

        }

        

        /***************************************************
        * 함수명 : fn_employeeEditcallback
        * 내  용 : 수정 콜백 함수
        ****************************************************/
        this.fn_employeeEditcallback = function(sId,nErrorCode,sErrorMsg) {
            if (nErrorCode == 0) {
        		alert("수정이 완료되었습니다.");
        	
        		this.opener.fn_onloadEdit();
        		this.opener.fn_searchTransaction();
        		
        		this.ds_saveCopy.clearData(); 
        		this.ds_saveCopy.copyData(this.ds_save);
        		
        		this.ds_manager.clearData(); 
        		this.fn_manager();
            }
        }

        /***************************************************
        * 함수명 : fn_manager
        * 내  용 : 관리자 콤보박스
        ****************************************************/
        this.fn_manager = function(){
        	var sId = "managersearch";
            var sUrl = "SvcURL::managersearch";
            var sInDs = "";
            var sOutDs = "ds_manager=outDataset";
            var sArg = "";
            var sfunc = "fn_managerCallback";

            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        /***************************************************
        * 함수명 : fn_managerCallback
        * 내  용 : fn_managerCallback 콜백함수
        ****************************************************/
        this.fn_managerCallback = function(){

        		var newRow = this.ds_manager.insertRow(0);
        		this.ds_manager.getColumn(newRow, "MANAGER_ID");
        		this.ds_manager.setColumn(newRow, "MANAGER_NAME", "- 선택 -");
           
        }

        /***************************************************
        * 함수명 : cbo_manager_onitemchanged
        * 내  용 : Manager 콤보박스에서 선택된 값이 변경될 때 호출되며,
        *          선택된 Manager의 ID를 찾아 ds_save에 저장한다.
        ****************************************************/
        this.edt_phone_ontextchange = function(obj,e)
        {	
        	var a = e.posttext;
        	var phoneNumber = a.replace(/\D/g, '');
        	
            if (phoneNumber.length > 3 && phoneNumber.length <= 7) {
                phoneNumber = phoneNumber.substring(0, 3) + "-" + phoneNumber.substring(3);
            } else if (phoneNumber.length > 7) {
                phoneNumber = phoneNumber.substring(0, 3) + "-" + phoneNumber.substring(3, 7) + "-" + phoneNumber.substring(7);
            }

            obj.set_value(phoneNumber);
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frmEmployeeSave_onload, this);
            this.st_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.cbo_manager.addEventHandler("onitemchanged", this.cbo_manager_onitemchanged, this);
            this.div_top.btn_save.addEventHandler("onclick", this.div_top_btn_save_onclick, this);
            this.div_top.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.div_top.btn_edit.addEventHandler("onclick", this.div_top_btn_edit_onclick, this);
            this.edt_phone.addEventHandler("ontextchange", this.edt_phone_ontextchange, this);
            this.st_phone.addEventHandler("onclick", this.Static02_onclick, this);
            this.cbo_emailDomain.addEventHandler("onitemchanged", this.Combo02_onitemchanged, this);
            this.cbo_jobTitle.addEventHandler("onitemchanged", this.cbo_jobTitle_onitemchanged, this);
            this.st_job.addEventHandler("onclick", this.Static02_onclick, this);

        };

        this.loadIncludeScript("frmEmployeeSave.xfdl", true);

       
    };
}
)();
