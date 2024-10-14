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
                this.set_name("frmEdit");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,801,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_del", "absolute", "48%", "24", null, "25", "43.5%", null, this);
            obj.set_taborder("0");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_edit", "absolute", "57.13%", "24", null, "25", "34.38%", null, this);
            obj.set_taborder("1");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "3%", "2", null, "60", "82%", null, this);
            obj.set_taborder("2");
            obj.set_text("▣ 직원 수정");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "52.5%", "72", null, "24", "34.38%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_text("Combo00");

            obj = new Combo("Combo01", "absolute", "52.5%", "100", null, "24", "34.38%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_text("Combo00");

            obj = new Calendar("Calendar00", "absolute", "52.5%", "127", null, "24", "34.38%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");

            obj = new Combo("Combo02", "absolute", "28.38%", "128", null, "23", "58%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_text("Combo02");

            obj = new Static("Static01", "absolute", "42.13%", "72", null, "24", "48%", null, this);
            obj.set_taborder("9");
            obj.set_text("관리자");
            obj.style.set_background("darkorange");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "42.13%", "127", null, "24", "48%", null, this);
            obj.set_taborder("11");
            obj.set_text("고용일");
            obj.style.set_background("darkorange");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "42.13%", "100", null, "24", "48%", null, this);
            obj.set_taborder("12");
            obj.set_text("직책");
            obj.style.set_background("darkorange");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "3%", "128", null, "24", "87.13%", null, this);
            obj.set_taborder("13");
            obj.set_text("EMAIL");
            obj.style.set_background("darkorange");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "3%", "155", null, "24", "87.13%", null, this);
            obj.set_taborder("14");
            obj.set_text("PHONE");
            obj.style.set_background("darkorange");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "3%", "100", null, "24", "87.13%", null, this);
            obj.set_taborder("15");
            obj.set_text("이름");
            obj.style.set_background("darkorange");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "3%", "72", null, "24", "87.13%", null, this);
            obj.set_taborder("16");
            obj.set_text("관리번호");
            obj.style.set_background("darkorange");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "13.25%", "100", null, "24", "73.25%", null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "13.25%", "127", null, "24", "73.25%", null, this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "13.25%", "155", null, "24", "58.13%", null, this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "13.25%", "72", null, "24", "58.13%", null, this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "28.38%", "100", null, "24", "58.13%", null, this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 801, 600, this,
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
        this.registerScript("frmEdit.xfdl", function(exports) {
        this.frmSave_onload = function(obj,e)
        {
        	var parentData = this.opener;
            
            if (parentData && parentData.ds_manager) {
                var ds_manager_xml = parentData.ds_manager;
                this.ds_manager.loadXML(ds_manager_xml); // XML 데이터를 데이터셋에 로드
                
                trace("Row count: " + this.ds_manager.rowcount);
            }
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static02_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static02_onclick, this);

        };

        this.loadIncludeScript("frmEdit.xfdl", true);

       
    };
}
)();
