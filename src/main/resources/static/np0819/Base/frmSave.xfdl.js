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
                this._setFormPosition(0,0,532,265);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_manager", this);
            obj._setContents("<ColumnInfo><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_job", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_save", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEESID\" type=\"INT\" size=\"256\"/><Column id=\"MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"FIRSTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"HIREDATE\" type=\"DATE\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILDOMAIN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_ID_S\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"5\"/><Column id=\"JOB_TITLE\" type=\"STRING\" size=\"10\"/><Column id=\"FIRST_NAME\" type=\"STRING\" size=\"2\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"2\"/><Column id=\"LAST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEE_ID\" type=\"STRING\" size=\"5\"/><Column id=\"JOB_TITLE\" type=\"STRING\" size=\"10\"/><Column id=\"FIRST_NAME\" type=\"STRING\" size=\"2\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"2\"/><Column id=\"LAST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_title", "absolute", "20", "20", "209", "20", null, null, this);
            obj.set_taborder("24");
            obj.set_text("▣ 직원 등록/수정");
            obj.style.set_font("16 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16", "59", "498", "107", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_employeeId", "absolute", "18", "62", "79", "24", null, null, this);
            obj.set_taborder("33");
            obj.set_text("관리번호");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_manager", "absolute", "331", "62", "79", "24", null, null, this);
            obj.set_taborder("39");
            obj.set_text("관리자");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_manager", "absolute", "411", "62", "101", "24", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_manager_innerdataset = new Dataset("cbo_manager_innerdataset", this.cbo_manager);
            cbo_manager_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"/></Row></Rows>");
            obj.set_innerdataset(cbo_manager_innerdataset);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_manager");
            obj.set_codecolumn("MANAGER_NAME");
            obj.set_datacolumn("MANAGER_NAME");
            obj.style.set_align("center");
            obj.set_index("-1");

            obj = new Edit("edt_employeeId", "absolute", "99", "62", "230", "24", null, null, this);
            obj.set_taborder("43");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("fileUpload", "absolute", "16", "169", "501", "76", null, null, this);
            obj.set_taborder("45");
            obj.set_text("file upload");
            obj.style.set_border("1 solid #999999ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone", "absolute", "99", "140", "229", "24", null, null, this);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("st_phone", "absolute", "18", "140", "79", "24", null, null, this);
            obj.set_taborder("70");
            obj.set_text("PHONE");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "216", "116", "13", "19", null, null, this);
            obj.set_taborder("71");
            obj.set_text("@");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_hireDate", "absolute", "411", "114", "101", "24", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");

            obj = new Combo("cbo_emailDomain", "absolute", "228", "114", "99", "24", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_emailDomain_innerdataset = new Dataset("cbo_emailDomain_innerdataset", this.cbo_emailDomain);
            cbo_emailDomain_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">naver.com</Col><Col id=\"datacolumn\">naver.com</Col></Row><Row><Col id=\"codecolumn\">gmail.com</Col><Col id=\"datacolumn\">gmail.com</Col></Row><Row><Col id=\"codecolumn\">EXAMPLE.COM</Col><Col id=\"datacolumn\">EXAMPLE.COM</Col></Row></Rows>");
            obj.set_innerdataset(cbo_emailDomain_innerdataset);
            obj.set_taborder("5");
            obj.set_displaynulltext("-선택-");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("center");

            obj = new Static("st_hireDate", "absolute", "331", "114", "79", "24", null, null, this);
            obj.set_taborder("72");
            obj.set_text("고용일");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_email", "absolute", "18", "114", "79", "24", null, null, this);
            obj.set_taborder("73");
            obj.set_text("EMAIL");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email", "absolute", "99", "114", "114", "24", null, null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_jobTitle", "absolute", "411", "88", "101", "24", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_displaynulltext("-선택-");
            obj.set_innerdataset("@ds_job");
            obj.set_codecolumn("JOB_TITLE");
            obj.set_datacolumn("JOB_TITLE");
            obj.style.set_align("center");
            obj.set_index("-1");

            obj = new Static("st_job", "absolute", "331", "88", "79", "24", null, null, this);
            obj.set_taborder("74");
            obj.set_text("직책");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_name", "absolute", "18", "88", "79", "24", null, null, this);
            obj.set_taborder("75");
            obj.set_text("이름");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_firstName", "absolute", "99", "88", "114", "24", null, null, this);
            obj.set_taborder("1");
            obj.set_displaynulltext("firstname");
            obj.style.set_displaynulltextcolor("lightgrey");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lastName", "absolute", "215", "88", "114", "24", null, null, this);
            obj.set_taborder("2");
            obj.set_displaynulltext("lastname");
            obj.style.set_displaynulltextcolor("lightgrey");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Div("div_top", "absolute", "354", "11", null, "43", "5", null, this);
            obj.set_taborder("76");
            this.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "92", "9", "68", "25", null, null, this.div_top);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_del", "absolute", "22", "9", "68", "25", null, null, this.div_top);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_edit", "absolute", "92", "9", "68", "25", null, null, this.div_top);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            this.div_top.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("76");

            	}
            );
            this.div_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 532, 265, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","edt_lastName","value","ds_save","LASTNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_firstName","value","ds_save","FIRSTNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cbo_jobTitle","value","ds_save","JOBTITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_email","value","ds_save","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cbo_emailDomain","value","ds_save","EMAILDOMAIN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cal_hireDate","value","ds_save","HIREDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_phone","value","ds_save","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_manager","value","ds_save","MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_employeeId","value","ds_save","EMPLOYEESID");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frmSave.xfdl", function(exports) {
        // 자식 창의 onload 함수
        this.frmSave_onload = function(obj,e) {

            this.ds_manager.copyData(this.opener.ds_manager);
            trace(this.ds_manager.saveXML());
            this.cbo_manager.set_index(0);

            
            // ds_manager의 첫 번째 값으로 - 선택 -을 추가
            var manager1 = this.ds_manager.getColumn(0, "MANAGER_ID");
            trace("manager1" + manager1 );
            
            if(manager1 == ""){
        		trace("@@@@");
        		this.ds_manager.setColumn(0, "MANAGER_NAME", "- 선택 -");
        		
            }
             
            this.ds_job.copyData(this.opener.ds_job);
            
            this.cbo_jobTitle.set_index(0);
            this.ds_job.setColumn(0, "JOB_TITLE", "- 선택 -");
            
            this.cbo_emailDomain.set_index(0);
            this.ds_job.setColumn(0, "JOB_TITLE", "- 선택 -");

        

            // 부모창에서 넘어온 파라미터 확인
            var sType = this.parent.sType;  // 저장인지 수정인지 확인하는 변수
        	trace("111 " + sType)
            
            if (sType === "s") {
                trace("저장 모드입니다. ds_save 초기화.");
                this.ds_save.clearData();  
                this.ds_save.addRow();
                
                this.st_title.set_text("▣ 직원 등록");
                this.div_top.btn_edit.set_visible(false);
                this.div_top.btn_del.set_visible(false);
                
            } else{
        		trace("수정 모드입니다. ");
        		this.ds_select.copyData(this.opener.ds_select);
        		
        		if (this.ds_select.rowcount > 0) {
        			var email = this.ds_select.getColumn(0, "EMAIL");
        			var eIndex = email.split("@");

        			var MrgName = this.ds_select.getColumn(0, "MANAGER_ID");
        			trace("1::::" + MrgName);

        			var row = this.ds_manager.findRow("MANAGER_NAME", MrgName);
        			trace("2:::::" + row);

        			var MrgId = this.ds_manager.getColumn(row, "MANAGER_ID");
        			trace("3:::: " + MrgId);

        			this.edt_firstName.set_value(this.ds_select.getColumn(0, "FIRST_NAME"));
        			this.edt_lastName.set_value(this.ds_select.getColumn(0, "LAST_NAME"));
        			this.edt_email.set_value(eIndex[0]);
        			this.cbo_emailDomain.set_value(eIndex[1]);

        			this.cal_hireDate.set_value(this.ds_select.getColumn(0, "HIRE_DATE"));
        			this.edt_phone.set_value(this.ds_select.getColumn(0, "PHONE"));
        			this.edt_employeeId.set_value(this.ds_select.getColumn(0, "EMPLOYEE_ID"));
        			this.cbo_jobTitle.set_value(this.ds_select.getColumn(0, "JOB_TITLE"));
        			this.cbo_manager.set_value(this.ds_select.getColumn(0, "MANAGER_ID"));

        			var managerId = this.ds_select.getColumn(0, "MANAGER_ID");
        			this.ds_save.addColumn("MANAGER_ID_S", "INT");
        			trace("MANAGER_ID_S : " + MrgId)
        			this.ds_save.setColumn(0, "MANAGER_ID_S", MrgId);

        			this.div_top.btn_save.set_visible(false);
        			this.st_title.set_text("▣ 직원 수정");

        		} 
        		
            }
            var sfunc = "fn_callback";
        }

        
        // fn_callback 함수 호출
        this.fn_callback = function(sId,nErrorCode,sErrorMSG)
        {
            if (nErrorCode == 0)
            {
                var a = this.ds_emp.saveXML();
                trace("Save completed: " + a);
            }
            else
            {
                trace("Save failed: " + sErrorMSG);
            }
        }

        
        // 저장 버튼 클릭 시 호출
        this.div_top_btn_save_onclick = function(obj,e)
        {
        	// 필수 입력 필드 체크
        	if (this.cbo_manager.value == null || this.cbo_manager.value == "") {
                alert("관리자를 입력해 주세요.");
                return;
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
            if (this.cbo_emailDomain.value == null || this.cbo_emailDomain.value == "") {
                alert("Email 도메인을 입력해 주세요.");
                return;
            }
            if (this.cbo_jobTitle.value == null || this.cbo_jobTitle.value == "") {
                alert("Job Title을 입력해 주세요.");
                return;
            }
            if (this.cal_hireDate.value == null || this.edtHIRE_DATE.value == "") {
                alert(" 고용일을 입력해 주세요.");
                return;
            }
            if (this.edt_phone.value == null || this.edt_phone.value == "") {
        		alert("Phone을 입력해 주세요.");
        		return;
        	}

            trace("Save button clicked in child form"); 
            this.callMethod();
        }

        // 트랜잭션 호출 함수
        this.callMethod = function()
        {
            var sId    = "save";
            var sUrl   = "SvcURL::save";
            var sInDs  = "inDataset=ds_save"; 
            var sOutDs = "ds_emp=outDataset";
            var sArg   = ""; 
            var sfunc  = "fn_callback";

            trace("ds_save XML: " + this.ds_save.saveXML());
            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        
        // 삭제
        this.btn_del_onclick = function(obj,e) {
            trace("!!!!Delete button clicked in child form"); // 삭제 버튼 클릭 확인
            this.fn_delete();
        }

        this.fn_delete = function() {
            var sId    = "delete";
            var sUrl   = "SvcURL::delete"; // 삭제 요청을 처리할 서버 URL
            var sInDs  = "inDataset=ds_save"; 
            var sOutDs = "ds_emp=outDataset";
            var sArg   = ""; 
            var sfunc  = "fn_callback";

        	if (this.ds_save.rowcount <= 0) {
                trace("!!!!!No data to delete.");
                return;
            }
            
            trace("@@@@@@ds_save XML for deletion: " + this.ds_save.saveXML());
            trace("@@@@@@employeeId:::::::" + this.ds_save.getColumn(0, "EMPLOYEESID"));
            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        

        // 수정 버튼 클릭 시 호출
        this.div_top_btn_edit_onclick = function(obj,e)
        {

        	 // 필수 입력 필드 체크
        	if (this.cbo_manager.value == null || this.cbo_manager.value == "") {
                alert("관리자를 입력해 주세요.");
                return;
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
            if (this.cbo_emailDomain.value == null || this.cbo_emailDomain.value == "") {
                alert("Email 도메인을 입력해 주세요.");
                return;
            }
            if (this.cbo_jobTitle.value == null || this.cbo_jobTitle.value == "") {
                alert("Job Title을 입력해 주세요.");
                return;
            }
            if (this.cal_hireDate.value == null || this.edtHIRE_DATE.value == "") {
                alert(" 고용일을 입력해 주세요.");
                return;
            }
            if (this.edt_phone.value == null || this.edt_phone.value == "") {
        		alert("Phone을 입력해 주세요.");
        		return;
        	} 

        
            trace("Edit button clicked in child form");
            this.fn_edit();
        }

        
        this.fn_edit = function()
        {
            var sId    = "edit";
            var sUrl   = "SvcURL::edit";
            var sInDs  = "inDataset=ds_save";
            var sOutDs = "ds_emp=outDataset";
            var sArg   = "";
            var sfunc  = "fn_callback";

            trace("ds_save XML: " + this.ds_save.saveXML());
            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        
        this.cbo_manager_onitemchanged = function(obj,e)
        {
        	var newMgr = obj.value;
        	var row = this.ds_manager.findRow("MANAGER_NAME", newMgr);
        	if(row>=0){
        		var MgrId = this.ds_manager.getColumn(row, "MANAGER_ID");
        		this.ds_save.addColumn("MANAGER_ID_S","INT");
        		this.ds_save.setColumn(0, "MANAGER_ID_S",MgrId);
        		trace("매니저 id 셋팅! : " + MgrId);
        	} else{
        		trace("NO DATA!!");
        	}
        }

        
        this.edt_phone_ontextchange = function(obj,e)
        {	
        	trace("dddddd");
        	var phoneNumber = obj.value.replace(1, '2'); // 숫자 이외의 문자는 모두 제거
        	trace(phoneNumber);
        //     if (phoneNumber.length > 3 && phoneNumber.length <= 7) {
        //         phoneNumber = phoneNumber.substring(0, 3) + "-" + phoneNumber.substring(3);
        //     } else if (phoneNumber.length > 7) {
        //         phoneNumber = phoneNumber.substring(0, 3) + "-" + phoneNumber.substring(3, 7) + "-" + phoneNumber.substring(7);
        //     }

            obj.set_value(phoneNumber);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.frmSave_onload, this);
            this.st_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.cbo_manager.addEventHandler("onitemchanged", this.cbo_manager_onitemchanged, this);
            this.edt_phone.addEventHandler("ontextchange", this.edtPhone_ontextchange, this);
            this.st_phone.addEventHandler("onclick", this.Static02_onclick, this);
            this.cbo_emailDomain.addEventHandler("onitemchanged", this.Combo02_onitemchanged, this);
            this.st_job.addEventHandler("onclick", this.Static02_onclick, this);
            this.div_top.btn_save.addEventHandler("onclick", this.div_top_btn_save_onclick, this);
            this.div_top.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.div_top.btn_edit.addEventHandler("onclick", this.div_top_btn_edit_onclick, this);

        };

        this.loadIncludeScript("frmSave.xfdl", true);

       
    };
}
)();
