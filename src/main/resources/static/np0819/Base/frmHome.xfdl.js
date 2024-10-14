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
                this.set_name("frmHome");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_local", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            obj = new Button("btn_orderList", "absolute", "252", "206", "163", "70", null, null, this.div_local);
            obj.set_taborder("0");
            obj.set_text("카테고리별 주문목록");
            this.div_local.addChild(obj.name, obj);

            obj = new Button("btn_employee", "absolute", "46", "33", "163", "69", null, null, this);
            obj.set_taborder("0");
            obj.set_text("직원 목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_warehouse", "absolute", "48", "120", "163", "69", null, null, this);
            obj.set_taborder("1");
            obj.set_text("창고 목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_inventory", "absolute", "47", "208", "163", "69", null, null, this);
            obj.set_taborder("2");
            obj.set_text("재고 목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_categoryOrder", "absolute", "253", "30", "163", "69", null, null, this);
            obj.set_taborder("3");
            obj.set_text("카테고리 주문 목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_customerOrder", "absolute", "253", "118", "163", "69", null, null, this);
            obj.set_taborder("4");
            obj.set_text("회원 주문 목록");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_local,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.div_local.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
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
        this.registerScript("frmHome.xfdl", function(exports) {
        // 직원 목록
        this.btn_employee_onclick = function(obj,e)
        {
        	// div_employees 제대로 참조되는지 확인하고 URL 설정
            if (this.div_local) {
                this.div_local.set_url("Base::frmEmployees.xfdl");
                
                 // 버튼들을 숨김 처리
                this.btn_employee.set_visible(false);
                this.btn_warehouse.set_visible(false);
                this.btn_inventory.set_visible(false);
                this.btn_categoryOrder.set_visible(false);
                this.btn_customerOrder.set_visible(false);
            } else {
                alert("div_local 찾을 수 없습니다.");
            }
        }

        // 창고 목록
        this.btn_warehouse_onclick = function(obj,e)
        {
        	this.div_local.set_url("Base::frmWarehouse.xfdl");
                
            // 버튼들을 숨김 처리
            this.btn_employee.set_visible(false);
            this.btn_warehouse.set_visible(false);
            this.btn_inventory.set_visible(false);
            this.btn_categoryOrder.set_visible(false);
            this.btn_customerOrder.set_visible(false);
        }

        // 재고 목록
        this.btn_inventory_onclick = function(obj,e)
        {
        	this.div_local.set_url("Base::frmInventory.xfdl");
        	
        	// 버튼들을 숨김 처리
        	this.btn_employee.set_visible(false);
            this.btn_warehouse.set_visible(false);
            this.btn_inventory.set_visible(false);
            this.btn_categoryOrder.set_visible(false);
            this.btn_customerOrder.set_visible(false);
        }

        // 카테고리 주문 목록
        this.btn_categoryOrder_onclick = function(obj,e)
        {
        	this.div_local.set_url("Base::frmCategoryOrder.xfdl");
                
            // 버튼들을 숨김 처리
            this.btn_employee.set_visible(false);
            this.btn_warehouse.set_visible(false);
            this.btn_inventory.set_visible(false);
            this.btn_categoryOrder.set_visible(false);
            this.btn_customerOrder.set_visible(false);
            
        }

        
        // 회원 주문 목록
        this.btn_customerOrder_onclick = function(obj,e)
        {
        	this.div_local.set_url("Base::frmCustomerOrder.xfdl");
                
            // 버튼들을 숨김 처리
            this.btn_employee.set_visible(false);
            this.btn_warehouse.set_visible(false);
            this.btn_inventory.set_visible(false);
            this.btn_categoryOrder.set_visible(false);
            this.btn_customerOrder.set_visible(false);   
        }

        this.div_local_btn_orderList_onclick = function(obj,e)
        {
        	this.div_local.set_url("Base::frmOrderList.xfdl");
                
            // 버튼들을 숨김 처리
            this.btn_employee.set_visible(false);
            this.btn_warehouse.set_visible(false);
            this.btn_inventory.set_visible(false);
            this.btn_categoryOrder.set_visible(false);
            this.btn_customerOrder.set_visible(false);   
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_local.btn_orderList.addEventHandler("onclick", this.div_local_btn_orderList_onclick, this);
            this.btn_employee.addEventHandler("onclick", this.btn_employee_onclick, this);
            this.btn_warehouse.addEventHandler("onclick", this.btn_warehouse_onclick, this);
            this.btn_inventory.addEventHandler("onclick", this.btn_inventory_onclick, this);
            this.btn_categoryOrder.addEventHandler("onclick", this.btn_categoryOrder_onclick, this);
            this.btn_customerOrder.addEventHandler("onclick", this.btn_customerOrder_onclick, this);

        };

        this.loadIncludeScript("frmHome.xfdl", true);

       
    };
}
)();
