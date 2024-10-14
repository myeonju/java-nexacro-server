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
                this.set_name("fmStorage");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,800,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "4.63%", "36", null, "36", "80.38%", null, this);
            obj.set_taborder("0");
            obj.set_text("▣ 창고 목록");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "5.75%", "90", null, "19", "90%", null, this);
            obj.set_taborder("1");
            obj.set_text("지역");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "23%", "90", null, "19", "72.75%", null, this);
            obj.set_taborder("2");
            obj.set_text("국가");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "39.25%", "90", null, "19", "51.5%", null, this);
            obj.set_taborder("3");
            obj.set_text("창고위치");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "10%", "90", null, "19", "79.63%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_text("Combo00");

            obj = new Combo("Combo01", "absolute", "26.75%", "90", null, "19", "62.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_text("Combo00");

            obj = new Combo("Combo02", "absolute", "45.88%", "90", null, "19", "43.75%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_text("Combo00");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 768, this,
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);

        };

        this.loadIncludeScript("fmStorage.xfdl", true);

       
    };
}
)();
