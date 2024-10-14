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
                this.set_name("frmCategoryOrder");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1002,670);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_order", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INVENTORY_QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERITEM_QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_PRICE_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_category", "absolute", "20", "40", "331", null, null, "20", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_category");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"239\"/><Column size=\"96\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:lightsteelblue;\" text=\"카테고리명\"/><Cell col=\"1\" style=\"background:lightsteelblue;\" text=\"상품수\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:CATEGORY_NAME\" combodataset=\"ds_category\" combocodecol=\"CATEGORY_NAME\" combodatacol=\"CATEGORY_NAME\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:PRODUCT_COUNT\" mask=\"!999,999,999\" editdisplay=\"edit\" combodataset=\"ds_category\" combocodecol=\"PRODUCT_COUNT\" combodatacol=\"bind:PRODUCT_COUNT\" combodisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_title", "absolute", "20", "0", "221", "36", null, null, this);
            obj.set_taborder("1");
            obj.set_text("▣ 카테고리별 주문목록 현황");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_order", "absolute", "375", "40", null, null, "20", "20", this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_order");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"228\"/><Column size=\"129\"/><Column size=\"119\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"background:lightsteelblue;\" text=\"상품명\"/><Cell col=\"1\" style=\"background:lightsteelblue;\" text=\"상품 개수\"/><Cell col=\"2\" style=\"background:lightsteelblue;\" text=\"누적 주문 수량\"/><Cell col=\"3\" style=\"background:lightsteelblue;\" text=\"누적 주문 가격\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:PRODUCT_NAME\" combodataset=\"ds_order\" combocodecol=\"PRODUCT_NAME\" combodatacol=\"PRODUCT_NAME\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:INVENTORY_QUANTITY\" mask=\"!999,999,999\" combodataset=\"ds_order\" combocodecol=\"INVENTORY_QUANTITY\" combodatacol=\"INVENTORY_QUANTITY\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:ORDERITEM_QUANTITY\" mask=\"!999,999,999\" combodataset=\"ds_order\" combocodecol=\"ORDERITEM_QUANTITY\" combodatacol=\"ORDERITEM_QUANTITY\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:UNIT_PRICE_TOTAL\" mask=\"!999,999,999\" combodataset=\"ds_order\" combocodecol=\"UNIT_PRICE_TOTAL\" combodatacol=\"UNIT_PRICE_TOTAL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset", "absolute", null, "8", "28", "21", "20", null, this);
            obj.set_taborder("3");
            obj.style.set_image("URL('theme://hiclipart.com (1).png')");
            obj.style.set_background("steelblue");
            obj.style.set_border("1solid solid #999999ff");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Button("btn_main", "absolute", "259", "8", "122", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("메인 화면");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1002, 670, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("frmCategoryOrder.xfdl", function(exports) {
        /***************************************************
        * 화면 id: 카테고리별 주문 목록
        * 작성자: 김현주
        * 작성일자: 2024-09-10
        ****************************************************/

        /***************************************************
        * 함수명 : frmCategoryOrder_onload
        * 내  용 : 폼 로드 시 카테고리 데이터를 트랜잭션으로 가져오기
        ****************************************************/
        this.frmCategoryOrder_onload = function(obj,e)
        {
        	 this.fn_category();
        }

        /***************************************************
        * 함수명 : fn_category
        * 내  용 : 카테고리 데이터를 서버에서 조회하는 트랜잭션
        ****************************************************/
        this.fn_category = function()
        {
            var sId    = "categorySearch";
            var sUrl   = "SvcURL::categorySearch";
            var sInDs  = "";
            var sOutDs = "ds_category=outDataset";
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
        * 내  용 : 카테고리 데이터를 서버에서 조회 후 콜백 함수
        ****************************************************/
        this.fn_search = function(sId,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0) {
                trace("Error: " + sErrorMsg);
            } else {
                // 데이터 조회 후 첫 번째 행 자동 선택 및 클릭 처리
                if (this.ds_category.getRowCount() > 0) {
                    this.grd_category.setFocus();  // 그리드에 포커스
                    this.grd_category.selectRow(0);  // 첫 번째 행 선택
                    this.grd_category_oncellclick(this.grd_category, {row: 0});  // 첫 번째 행 클릭한 것처럼 동작
                }
            }
        }

        /***************************************************
        * 함수명 : grd_category_oncellclick
        * 내  용 : 그리드의 셀 클릭 시 첫 번째 열의 카테고리 이름을 가져와서 트랜잭션에 담아 전송
        ****************************************************/
        this.grd_category_oncellclick = function(obj,e)
        {
            var categoryName = obj.getCellText(e.row, 0); 

            trace("Selected CATEGORY_NAME from first column: " + categoryName);

            if (this.ds_cond.getRowCount() == 0) {
                this.ds_cond.addRow();
            }

            this.ds_cond.setColumn(0, "CATEGORY_NAME", categoryName); 

            var sId    = "sendCategoryName";
            var sUrl   = "SvcURL::sendCategoryName";
            var sInDs  = "inDataset=ds_cond";
            var sOutDs = "ds_order=outDataset";
            var sArg   = "";
            var sfunc  = "fn_callback"; 
            
            try {
                this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
            } catch (e) {
                trace("Transaction Error: " + e.message);
            }
        }

        /***************************************************
        * 함수명 : fn_callback
        * 내  용 : 트랜잭션의 콜백 함수, 성공 여부에 따라 로그 출력
        ****************************************************/
        this.fn_callback = function(sId,nErrorCode,sErrorMsg)
        {
            if (nErrorCode < 0) {
                trace("Error: " + sErrorMsg);
            } else {
                trace("Transaction success: " + sId);
            }
        }

        /***************************************************
        * 함수명 : div_reset_btn_emp_onclick
        * 내  용 : 초기화 버튼 클릭 시 데이터셋을 클리어하고 카테고리 데이터를 다시 로드
        ****************************************************/
        this.div_reset_btn_emp_onclick = function(obj,e)
        {
            this.ds_order.clearData();
            this.fn_category(); 
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
            this.addEventHandler("onload", this.frmCategoryOrder_onload, this);
            this.grd_category.addEventHandler("oncellclick", this.grd_category_oncellclick, this);
            this.st_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_reset.addEventHandler("onclick", this.div_reset_btn_emp_onclick, this);
            this.btn_main.addEventHandler("onclick", this.btn_main_onclick, this);

        };

        this.loadIncludeScript("frmCategoryOrder.xfdl", true);

       
    };
}
)();
