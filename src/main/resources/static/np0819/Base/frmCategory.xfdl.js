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
                this.set_name("frmCategory");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,445,87);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_ID\" type=\"INT\" size=\"256\"/><Column id=\"CATEGORY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_title", "absolute", "20", "0", null, "36", "60.63%", null, this);
            obj.set_taborder("0");
            obj.set_text("▣ 카테고리 관리");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "369", "8", "60", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "44", "408", "27", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("transparent");
            obj.style.set_border("1none solid black");
            this.addChild(obj.name, obj);

            obj = new Static("st_categoryName", "absolute", "21", "45", "101", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("카테고리명");
            obj.style.set_background("navajowhite");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_categoryName", "absolute", "124", "47", "301", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_maxlength("80");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 445, 87, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_categoryName","value","ds_category","CATEGORY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frmCategory.xfdl", function(exports) {
        /***************************************************
        * 화면 id: 카테고리 관리
        * 작성자: 김현주
        * 작성일자: 2024-09-10
        ****************************************************/

        
        /***************************************************
        * 함수명 : btn_save_onclick
        * 내  용 : 저장 버튼 클릭 시 카테고리 저장 트랜잭션 호출
        ****************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        	if (this.edt_categoryName.value == null || this.edt_categoryName.value == "") {
                alert("카테고리명을 입력해 주세요.");
                return;
            }
        	
        	var result = application.confirm("저장하시겠습니까?","question","question");
        	if (result) {
        		this.fn_save();
        	} 
        }

        this.fn_save = function()
        {
        	var sId    = "categorySave";
            var sUrl   = "SvcURL::categorySave";
            var sInDs  = "inDataset=ds_category"; 
            var sOutDs = "";
            var sArg   = ""; 
            var sfunc  = "fn_callback_categorySave";

            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        
        /***************************************************
        * 함수명 : fn_callback_categorySave
        * 내  용 : 카테고리 저장 트랜잭션의 콜백 함수
        *        저장 성공 여부에 따라 알림 메시지 표시
        ****************************************************/
        this.fn_callback_categorySave = function(sId,nErrorCode,sErrorMsg)
        {
            if (nErrorCode == 0) {
                 alert("성공적으로 저장되었습니다.");
                this.close();
                /*this.opener.callMethod();*/
               /* this.opener.reload();*/
               this.opener.fn_eidtCombobox();
            } else {
                alert(sErrorMsg);
            }
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.st_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static02_onclick, this);

        };

        this.loadIncludeScript("frmCategory.xfdl", true);

       
    };
}
)();
