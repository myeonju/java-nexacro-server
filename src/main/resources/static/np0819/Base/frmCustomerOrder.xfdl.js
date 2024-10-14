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
                this.set_name("frmCustomerOrder");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1002,670);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"INT\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORIGIN_QUANTITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_orderItem", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"LIST_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_title", "absolute", "20", "0", null, "36", "80.47%", null, this);
            obj.set_taborder("0");
            obj.set_text("▣ 주문");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Div("div_top", "absolute", null, "0", "766", "43", "20", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Button("btn_reset", "absolute", "613", "9", "28", "21", null, null, this.div_top);
            obj.set_taborder("11");
            obj.style.set_image("URL('theme://hiclipart.com (1).png')");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);
            obj = new Button("btn_chart", "absolute", "643", "9", "122", "21", null, null, this.div_top);
            obj.set_taborder("13");
            obj.set_text("월단위 주문량 차트");
            obj.style.set_background("steelblue");
            obj.style.set_color("aliceblue");
            obj.style.set_cursor("hand");
            this.div_top.addChild(obj.name, obj);

            obj = new Div("div_login", "absolute", "20", "48", "261", "42", null, null, this);
            obj.set_taborder("2");
            obj.style.set_border("1.5solid solid lightskyblue");
            this.addChild(obj.name, obj);
            obj = new Static("st_name", "absolute", "4", "10", "37", "21", null, null, this.div_login);
            obj.set_taborder("0");
            obj.set_text("이름");
            obj.style.set_align("right");
            this.div_login.addChild(obj.name, obj);
            obj = new Edit("edt_name", "absolute", "49", "9", "125", "21", null, null, this.div_login);
            obj.set_taborder("1");
            obj.style.setStyleValue("color", "disabled", "black");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("btn_loginOut", "absolute", "182", "9", "60", "21", null, null, this.div_login);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.style.set_background("steelblue");
            obj.style.set_color("white");
            obj.style.set_cursor("hand");
            this.div_login.addChild(obj.name, obj);

            obj = new Grid("grd_productList", "absolute", "20", "141", null, "220", "20", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_product");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"363\"/><Column size=\"166\"/><Column size=\"129\"/><Column size=\"169\"/><Column size=\"158\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상품명\"/><Cell col=\"1\" text=\"가격\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"주문 후 수량\"/><Cell col=\"4\" text=\"주문\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:PRODUCT_NAME\" combodataset=\"ds_product\" combocodecol=\"PRODUCT_ID\" combodatacol=\"PRODUCT_NAME\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:LIST_PRICE\" mask=\"!999,999,999\" combodataset=\"ds_product\" combocodecol=\"LIST_PRICE\" combodatacol=\"LIST_PRICE\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"none\" style=\"align:right;\" text=\"bind:AMOUNT\" mask=\"!999,999\" editlimit=\"9\" editlimitbymask=\"both\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:QUANTITY\" mask=\"!999,999,999\" combodataset=\"ds_product\" combocodecol=\"QUANTITY\" combodatacol=\"QUANTITY\"/><Cell col=\"4\" displaytype=\"button\" edittype=\"button\" style=\"color2:black;barcolor:black;controlcolor:black;\" text=\"추가\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_poductList", "absolute", "20", "107", null, "36", "80.74%", null, this);
            obj.set_taborder("4");
            obj.set_text("▶상품목록");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("st_orderList", "absolute", "20", "394", null, "36", "80.44%", null, this);
            obj.set_taborder("5");
            obj.set_text("▶주문목록");
            obj.style.set_font("15 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_customerOrderList", "absolute", "20", "429", null, "220", "20", null, this);
            obj.set_autofittype("col");
            obj.set_taborder("6");
            obj.set_binddataset("ds_orderItem");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"408\"/><Column size=\"223\"/><Column size=\"252\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"가격\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:PRODUCT_NAME\" combodataset=\"ds_orderItem\" combocodecol=\"PRODUCT_NAME\" combodatacol=\"PRODUCT_NAME\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:AMOUNT\" mask=\"!999,999\" editlimit=\"9\" editlimitbymask=\"both\" combodataset=\"ds_orderItem\" combocodecol=\"AMOUNT\" combodatacol=\"AMOUNT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:LIST_PRICE\" mask=\"!###,###,###\" combodataset=\"ds_orderItem\" combocodecol=\"LIST_PRICE\" combodatacol=\"LIST_PRICE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_btn", "absolute", null, "376", "182", "44", "20", null, this);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Button("btn_order", "absolute", "110", "22", "70", "21", null, null, this.div_btn);
            obj.set_taborder("0");
            obj.set_text("주문하기");
            obj.style.set_background("steelblue");
            obj.style.set_color("white");
            obj.style.set_cursor("hand");
            this.div_btn.addChild(obj.name, obj);
            obj = new Button("btn_del", "absolute", "48", "22", "60", "21", null, null, this.div_btn);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.style.set_background("steelblue");
            obj.style.set_color("white");
            obj.style.set_cursor("hand");
            this.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_main", "absolute", "100", "8", "122", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("메인 화면");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 289, 39, this.div_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 261, 42, this.div_login,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_border("1.5solid solid lightskyblue");

            	}
            );
            this.div_login.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 182, 44, this.div_btn,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.set_text("Div00");
            		p.set_visible("true");

            	}
            );
            this.div_btn.addLayout(obj.name, obj);

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
        this.registerScript("frmCustomerOrder.xfdl", function(exports) {
        /***************************************************
        * 화면 id: 주문 목록
        * 작성자: 김현주
        * 작성일자: 2024-09-10
        ****************************************************/

        

        // 로그인 상태 변수 선언
        this.isLoggedIn = false;

        /***************************************************
        * 함수명 : div_login_btn_loginOut_onclick
        * 내  용 : 로그인/로그아웃 버튼 클릭 시 로그인 또는 로그아웃 처리
        ****************************************************/
        this.div_login_btn_loginOut_onclick = function(obj,e)
        {
            if (this.isLoggedIn) {
        		alert("로그아웃 되었습니다.");
                this.logout();
                this.reload();
            } else {
        		this.ds_login.setColumn(0,"NAME",this.div_login.edt_name.value);
        		this.div_login.edt_name.set_value(this.ds_login.getColumn(0, "NAME"));
                this.login();
            }
        }

        /***************************************************
        * 함수명 : login
        * 내  용 : 로그인 트랜잭션
        ****************************************************/
        this.login = function() {
            var sId    = "login";
            var sUrl   = "SvcURL::login";
            var sInDs  = "inDataset=ds_login";
            var sOutDs = "ds_product=outDataset, ds_login=outDataset2";
            var sArg   = "";
            var sfunc  = "loginCallback"; 

            try {
                this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
            } catch (e) {
                trace("Transaction Error: " + e.message);
            }
        }

        /***************************************************
        * 함수명 : logout
        * 내  용 : 로그아웃 처리 및 로그인 버튼 텍스트 업데이트
        ****************************************************/
        this.logout = function() {

            this.isLoggedIn = false; 
            this.div_top_btn_reset_onclick();
            this.div_login.btn_loginOut.set_text("로그인");
            
        }

        
        /***************************************************
        * 함수명 : loginCallback
        * 내  용 : 로그인 트랜잭션의 콜백 함수, 성공 시 로그인 상태 업데이트
        ****************************************************/
        this.loginCallback = function(sId,nErrorCode,sErrorMsg) {
            if (nErrorCode == 0) {
                this.isLoggedIn = true;  
                alert("로그인에 성공하였습니다.");
                this.div_login.edt_name.set_enable(false);
                this.div_login.btn_loginOut.set_text("로그아웃");
            } else {
                alert("로그인에 실패했습니다.");
            }
        }

        /***************************************************
        * 함수명 : grd_productList_oncellclick
        * 내  용 : 상품 목록 그리드에서 수량 입력 후 추가 버튼 클릭 시 주문 항목 추가 및 재고 업데이트
        ****************************************************/
        this.grd_productList_oncellclick = function(obj,e)
        {
            if (e.col == 4) { 
                var ds_product = this.objects.ds_product;
                var ds_orderItem = this.objects.ds_orderItem;

                var product_name = ds_product.getColumn(e.row, "PRODUCT_NAME");
                var amount = ds_product.getColumn(e.row, "AMOUNT");
                var list_price = ds_product.getColumn(e.row, "LIST_PRICE");
                var product_id = ds_product.getColumn(e.row, "PRODUCT_ID");
        		var quantity = ds_product.getColumn(e.row, "QUANTITY"); 
        		

                if (!amount || amount.trim() == "" || amount == 0) {
                    alert("수량을 입력하세요.");
                    return;
                }
                
                list_price = parseFloat(list_price);
                amount = parseFloat(amount);
        		quantity = parseFloat(quantity);
        		
        		if (amount > quantity) {
                    alert("수량이 부족합니다.");
                    return;
                }
                
                var total_price = list_price * amount;
                total_price = Math.round(total_price);
                
                trace(total_price);
                
                var rowCount = ds_orderItem.getRowCount();
                var existingRowIndex = -1; // 이미 추가된 상품이 있는지 찾기 위한 인덱스 초기화

                for (var i = 0; i < rowCount; i++) {
                    if (ds_orderItem.getColumn(i, "PRODUCT_ID") === product_id) {
                        existingRowIndex = i; // 이미 존재하는 상품의 인덱스 저장
                        break;
                    }
                }

                if (existingRowIndex >= 0) {
                    var existingAmount = ds_orderItem.getColumn(existingRowIndex, "AMOUNT");
                    existingAmount = parseFloat(existingAmount);
                    var newAmount = existingAmount + amount;

                    // 누적된 AMOUNT * grd_productList의 LIST_PRICE 값을 계산
                    var updated_total_price = newAmount * list_price;
                    updated_total_price = Math.round(updated_total_price);

                    ds_orderItem.setColumn(existingRowIndex, "AMOUNT", newAmount);
                    ds_orderItem.setColumn(existingRowIndex, "LIST_PRICE", updated_total_price);
                
                } else {
                    var newRow = ds_orderItem.addRow();
                    ds_orderItem.setColumn(newRow, "PRODUCT_NAME", product_name);
                    ds_orderItem.setColumn(newRow, "AMOUNT", amount);
                    ds_orderItem.setColumn(newRow, "LIST_PRICE", total_price);
                    ds_orderItem.setColumn(newRow, "PRODUCT_ID", product_id);
        			ds_orderItem.setColumn(newRow, "PRICE", list_price);
                }
                
                var remainingQuantity = quantity - amount;
                ds_product.setColumn(e.row, "QUANTITY", remainingQuantity.toString());
            }
        }

        

        /***************************************************
        * 함수명 : grd_customerOrderList_onkeydown
        * 내  용 : 고객 주문 리스트 그리드의 키 다운 이벤트 (엔터키 입력 시 셀 클릭 처리)
        ****************************************************/
        this.grd_customerOrderList_onkeydown = function(obj,e) {
        	if (e.keycode == 13) {  
                var row = e.row;
                var ds_orderItem = this.objects.ds_orderItem;
                var ds_product = this.objects.ds_product;

                var amount = parseFloat(this.ds_orderItem.getColumn(row, "AMOUNT")) || 0;
                var product_id = this.ds_orderItem.getColumn(row, "PRODUCT_ID");

                if (isNaN(amount) || !product_id) {
                    return;  
                }

                var list_price = 0;
                var product_row = -1;
                for (var i = 0; i < ds_product.getRowCount(); i++) {
                    if (ds_product.getColumn(i, "PRODUCT_ID") === product_id) {
                        list_price = parseFloat(this.ds_product.getColumn(i, "LIST_PRICE")) || 0;
                        product_row = i;
                        break;
                    }
                }

                if (product_row === -1) {
                    return;  
                }

                // LIST_PRICE를 재계산
                var new_list_price = amount * list_price;
                new_list_price = Math.round(new_list_price);
                var formatted_list_price = new_list_price.toLocaleString();

                ds_orderItem.setColumn(row, "LIST_PRICE", formatted_list_price);

                // ds_product에서 ORIGIN_QUANTITY와 QUANTITY를 업데이트
                var origin_quantity = parseFloat(ds_product.getColumn(product_row, "ORIGIN_QUANTITY")) || 0;
                var new_quantity = origin_quantity - amount;

                ds_product.setColumn(product_row, "QUANTITY", new_quantity);
            }
        }

        /***************************************************
        * 함수명 : grd_customerOrderList_onkillfocus
        * 내  용 : 고객 주문 리스트 그리드의 포커스 해제 이벤트
        ****************************************************/
        this.grd_customerOrderList_onkillfocus = function(obj,e)
        {
        	  if (e.col == 2) { 
                var row = e.row;
                var ds_orderItem = this.objects.ds_orderItem;
                var ds_product = this.objects.ds_product;

                var amount = parseFloat(ds_orderItem.getColumn(row, "AMOUNT")) || 0;
                var product_id = ds_orderItem.getColumn(row, "PRODUCT_ID");

                if (isNaN(amount) || !product_id) {
                    return;  
                }

                var list_price = 0;
                var product_row = -1;
                for (var i = 0; i < ds_product.getRowCount(); i++) {
                    if (ds_product.getColumn(i, "PRODUCT_ID") === product_id) {
                        list_price = parseFloat(ds_product.getColumn(i, "LIST_PRICE")) || 0;
                        product_row = i;
                        break;
                    }
                }

                if (product_row === -1) {
                    return;  
                }

                // LIST_PRICE를 재계산
                var new_list_price = amount * list_price;
                new_list_price = Math.round(new_list_price);
                var formatted_list_price = new_list_price.toLocaleString();

                ds_orderItem.setColumn(row, "LIST_PRICE", formatted_list_price);

                // ds_product에서 ORIGIN_QUANTITY와 QUANTITY를 업데이트
                var origin_quantity = parseFloat(ds_product.getColumn(product_row, "ORIGIN_QUANTITY")) || 0;
                var new_quantity = origin_quantity - amount;

                ds_product.setColumn(product_row, "QUANTITY", new_quantity);
            }
        }

        /***************************************************
        * 함수명 : grd_customerOrderList_onnodataareaclick
        * 내  용 : 고객 주문 리스트 그리드의 데이터 영역 클릭 이벤트
        ****************************************************/
        this.grd_customerOrderList_onnodataareaclick = function(obj,e)
        {
        	  if (e.col == 2) { 
                var row = e.row;
                var ds_orderItem = this.objects.ds_orderItem;
                var ds_product = this.objects.ds_product;

                var amount = parseFloat(ds_orderItem.getColumn(row, "AMOUNT")) || 0;
                var product_id = ds_orderItem.getColumn(row, "PRODUCT_ID");

                if (isNaN(amount) || !product_id) {
                    return;  
                }

                var list_price = 0;
                var product_row = -1;
                for (var i = 0; i < ds_product.getRowCount(); i++) {
                    if (ds_product.getColumn(i, "PRODUCT_ID") === product_id) {
                        list_price = parseFloat(ds_product.getColumn(i, "LIST_PRICE")) || 0;
                        product_row = i;
                        break;
                    }
                }

                if (product_row === -1) {
                    return;  
                }

                // LIST_PRICE를 재계산
                var new_list_price = amount * list_price;
                new_list_price = Math.round(new_list_price);
                var formatted_list_price = new_list_price.toLocaleString();

                ds_orderItem.setColumn(row, "LIST_PRICE", formatted_list_price);

                // ds_product에서 ORIGIN_QUANTITY와 QUANTITY를 업데이트
                var origin_quantity = parseFloat(ds_product.getColumn(product_row, "ORIGIN_QUANTITY")) || 0;
                var new_quantity = origin_quantity - amount;

                ds_product.setColumn(product_row, "QUANTITY", new_quantity);
            }
        }

        
        /***************************************************
        * 함수명 : grd_customerOrderList_oncellclick
        * 내  용 : 고객 주문 리스트 그리드의 셀 클릭 시 주문 항목의 LIST_PRICE 재계산 및 재고 업데이트
        ****************************************************/
        this.grd_customerOrderList_oncellclick = function(obj,e) {
            if (e.col == 2) { 
                var row = e.row;
                var ds_orderItem = this.objects.ds_orderItem;
                var ds_product = this.objects.ds_product;

                var amount = parseFloat(ds_orderItem.getColumn(row, "AMOUNT")) || 0;
                var product_id = ds_orderItem.getColumn(row, "PRODUCT_ID");

                if (isNaN(amount) || !product_id) {
                    return;  
                }

                var list_price = 0;
                var product_row = -1;
                for (var i = 0; i < ds_product.getRowCount(); i++) {
                    if (ds_product.getColumn(i, "PRODUCT_ID") === product_id) {
                        list_price = parseFloat(ds_product.getColumn(i, "LIST_PRICE")) || 0;
                        product_row = i;
                        break;
                    }
                }

                if (product_row === -1) {
                    return;  
                }

                // LIST_PRICE를 재계산
                var new_list_price = amount * list_price;
                new_list_price = Math.round(new_list_price);
                var formatted_list_price = new_list_price.toLocaleString();

                ds_orderItem.setColumn(row, "LIST_PRICE", formatted_list_price);

                // ds_product에서 ORIGIN_QUANTITY와 QUANTITY를 업데이트
                var origin_quantity = parseFloat(ds_product.getColumn(product_row, "ORIGIN_QUANTITY")) || 0;
                var new_quantity = origin_quantity - amount;

                ds_product.setColumn(product_row, "QUANTITY", new_quantity);
            }
        }

        
        /***************************************************
        * 함수명 : grd_customerOrderList_onheadclick
        * 내  용 : 고객 주문 리스트 그리드의 헤더 클릭 시 체크 박스 전체 상태 변경
        ****************************************************/
        this.grd_customerOrderList_onheadclick = function(obj,e)
        {
        	if(e.col == 0) {
        		if(obj.getCellProperty("head", e.col, "text") == 0) {
        			obj.setCellProperty("head", e.col, "text", 1);
        		} else {
        			obj.setCellProperty("head", e.col, "text", 0);
        		}
        		var checkStatus = obj.getCellProperty("head", e.col, "text");
        	}
        	
        	var rowCount = this.ds_orderItem.getRowCount();
        	for (var i = 0; i < rowCount ; i++) {
        		this.ds_orderItem.setColumn(i, "CHECK", checkStatus);
        	}
        }

        
        /***************************************************
        * 함수명 : div_btn_Button01_onclick
        * 내  용 : 주문하기 버튼 클릭 시 주문 트랜잭션 
        ****************************************************/
        this.div_btn_btn_order_onclick = function(obj,e)
        {
        	// 체크된 항목이 있는지 확인
            var hasChecked = false;
            
            for (var i = 0; i < this.ds_orderItem.rowcount; i++) {
                if (this.ds_orderItem.getColumn(i, "CHECK") == 1) {
                    hasChecked = true;
                    break;
                }
            }
            
            // 체크된 항목이 없을 때
            if (!hasChecked) {
                alert("체크된 항목이 없습니다. 주문할 항목을 선택해 주세요.");
                return;
            }
            
        	var result = application.confirm("주문하시겠습니까?","question","question");
        	if (result) {
        		this.fn_order();
        	} 
        }

        this.fn_order = function()
        {
        	var sId    = "order";
            var sUrl   = "SvcURL::order";
            var sInDs  = "inDataset=ds_orderItem, inDataset2=ds_login"; 
            var sOutDs = "";
            var sArg   = ""; 
            var sfunc  = "fn_orderCallback";
            
            trace("ds_orderItem XML: " + this.ds_orderItem.saveXML());
            this.transaction(sId, sUrl, sInDs, sOutDs, sArg, sfunc);
        }

        this.fn_orderCallback = function(sId,nErrorCode,sErrorMsg) {
            if (nErrorCode == 0) {
        		alert("주문이 완료되었습니다.");
        		
        		 // 주문이 완료된 목록에서 체크된 항목 삭제
                for (var i = this.ds_orderItem.rowcount - 1; i >= 0; i--) {
                    if (this.ds_orderItem.getColumn(i, "CHECK") == 1) {
                        this.ds_orderItem.deleteRow(i);
                    }
                }
                
        		var nRowCount = this.ds_product.getRowCount();
            
        		// ds_product의 모든 행을 순회하면서 AMOUNT 값을 null로 설정
        		for (var i = 0; i < nRowCount; i++) {
        			this.ds_product.setColumn(i, "AMOUNT", null);
        		}
               
            } else {
                alert("주문 실패: " + sErrorMsg);
            }
        }

        
        /***************************************************
        * 함수명 : div_btn_btn_del_onclick
        * 내  용 : 삭제 버튼 클릭 시 체크된 주문 항목 삭제 및 재고 업데이트
        ****************************************************/
        this.div_btn_btn_del_onclick = function(obj,e)
        {
        	// 체크된 항목이 있는지 확인
            var hasChecked = false;
            
            for (var i = 0; i < this.ds_orderItem.rowcount; i++) {
                if (this.ds_orderItem.getColumn(i, "CHECK") == 1) {
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
        		var ds_orderItem = this.objects.ds_orderItem;
        		var ds_product = this.objects.ds_product; 
            
        		var rowCount = ds_orderItem.getRowCount();
        		var productIds = [];
        		var amounts = [];
            
        		for (var i = rowCount - 1; i >= 0; i--) {
        			var isChecked = ds_orderItem.getColumn(i, "CHECK");
                
        			if (isChecked == "1") {
        				var productId = ds_orderItem.getColumn(i, "PRODUCT_ID");
        				var amount = ds_orderItem.getColumn(i, "AMOUNT");
                    
        				productIds.push(productId);
        				amounts.push(amount);
                    
        				ds_orderItem.deleteRow(i);
        			}
        		}
        		trace("PRODUCT_IDs: " + productIds.join(", "));
        		trace("AMOUNTs: " + amounts.join(", "));
            
        		// ds_product에서 각 PRODUCT_ID에 대해 QUANTITY 값을 업데이트
        		for (var j = 0; j < productIds.length; j++) {
        			var currentProductId = productIds[j];
        			var currentAmount = parseFloat(amounts[j]);

        			var productRow = ds_product.findRow("PRODUCT_ID", currentProductId);

        			if (productRow >= 0) {
        				var existingQuantity = parseFloat(ds_product.getColumn(productRow, "QUANTITY")) || 0;
        				var newQuantity = existingQuantity + currentAmount;
                    
        				ds_product.setColumn(productRow, "QUANTITY", newQuantity.toString());
        			}
        		}
        	} 
        }

        /***************************************************
        * 함수명 : div_top_btn_reset_onclick
        * 내  용 : 초기화 버튼 클릭 시 데이터셋 초기화
        ****************************************************/
        this.div_top_btn_reset_onclick = function(obj,e)
        {	
        	var nRowCount = this.ds_product.getRowCount();
            
            // ds_product의 모든 행을 순회하면서 QUANTITY 값을 ORIGIN_QUANTITY로 설정
            for (var i = 0; i < nRowCount; i++) {
                var originQuantity = this.ds_product.getColumn(i, "ORIGIN_QUANTITY");
                this.ds_product.setColumn(i, "QUANTITY", originQuantity);
            }
            
             // AMOUNT 값을 null로 설정
            for (var i = 0; i < nRowCount; i++) {
                this.ds_product.setColumn(i, "AMOUNT", null);
            }
        	this.ds_orderItem.clearData();
        }

        
        /***************************************************
        * 함수명 : div_login_edt_name_onkeydown
        * 내  용 : 로그인 입력 필드에서 엔터키 입력 시 로그인 처리
        ****************************************************/
        this.div_login_edt_name_onkeydown = function(obj,e)
        {
        	obj.updateToDataset();
        	
            if (e.keycode === 13) {
                this.div_login_btn_loginOut_onclick();  
            }
        }
        this.ds_orderItem_oncolumnchanged = function(obj,e)
        {
        	  if (e.col == 2) { 
                var row = e.row;
                var ds_orderItem = this.objects.ds_orderItem;
                var ds_product = this.objects.ds_product;

                var amount = parseFloat(ds_orderItem.getColumn(row, "AMOUNT")) || 0;
                var product_id = ds_orderItem.getColumn(row, "PRODUCT_ID");

                if (isNaN(amount) || !product_id) {
                    return;  
                }

                var list_price = 0;
                var product_row = -1;
                for (var i = 0; i < ds_product.getRowCount(); i++) {
                    if (ds_product.getColumn(i, "PRODUCT_ID") === product_id) {
                        list_price = parseFloat(ds_product.getColumn(i, "LIST_PRICE")) || 0;
                        product_row = i;
                        break;
                    }
                }

                if (product_row === -1) {
                    return;  
                }

                // LIST_PRICE를 재계산
                var new_list_price = amount * list_price;
                new_list_price = Math.round(new_list_price);
                var formatted_list_price = new_list_price.toLocaleString();

                ds_orderItem.setColumn(row, "LIST_PRICE", formatted_list_price);

                // ds_product에서 ORIGIN_QUANTITY와 QUANTITY를 업데이트
                var origin_quantity = parseFloat(ds_product.getColumn(product_row, "ORIGIN_QUANTITY")) || 0;
                var new_quantity = origin_quantity - amount;

                ds_product.setColumn(product_row, "QUANTITY", new_quantity);
            }
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
            this.ds_orderItem.addEventHandler("oncolumnchanged", this.ds_orderItem_oncolumnchanged, this);
            this.addEventHandler("onload", this.frmCustomerOrder_onload, this);
            this.st_title.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_top.btn_reset.addEventHandler("onclick", this.div_top_btn_reset_onclick, this);
            this.div_top.btn_chart.addEventHandler("onclick", this.Div01_Button02_onclick, this);
            this.div_login.edt_name.addEventHandler("onkeydown", this.div_login_edt_name_onkeydown, this);
            this.div_login.btn_loginOut.addEventHandler("onclick", this.div_login_btn_loginOut_onclick, this);
            this.grd_productList.addEventHandler("oncellclick", this.grd_productList_oncellclick, this);
            this.grd_productList.addEventHandler("onkeyup", this.grd_productList_onkeyup, this);
            this.grd_productList.addEventHandler("onkeydown", this.grd_productList_onkeydown, this);
            this.st_orderList.addEventHandler("onclick", this.Static00_onclick, this);
            this.grd_customerOrderList.addEventHandler("oncellclick", this.grd_customerOrderList_oncellclick, this);
            this.grd_customerOrderList.addEventHandler("onheadclick", this.grd_customerOrderList_onheadclick, this);
            this.grd_customerOrderList.addEventHandler("onkeydown", this.grd_customerOrderList_onkeydown, this);
            this.grd_customerOrderList.addEventHandler("onnodataareaclick", this.grd_customerOrderList_onnodataareaclick, this);
            this.grd_customerOrderList.addEventHandler("onkillfocus", this.grd_customerOrderList_onkillfocus, this);
            this.div_btn.btn_order.addEventHandler("onclick", this.div_btn_btn_order_onclick, this);
            this.div_btn.btn_del.addEventHandler("onclick", this.div_btn_btn_del_onclick, this);
            this.btn_main.addEventHandler("onclick", this.btn_main_onclick, this);

        };

        this.loadIncludeScript("frmCustomerOrder.xfdl", true);

       
    };
}
)();
