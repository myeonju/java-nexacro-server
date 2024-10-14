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
                this.set_name("Hello");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,800,600);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnHello", "absolute", "87", "81", "164", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Hello! nexacro platform 14");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Hello");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Hello.xfdl", function(exports) {

        this.btnHello_onclick = function(obj,e)
        {
        	this.alert("Hello! nexacro platform 14");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnHello.addEventHandler("onclick", this.btnHello_onclick, this);

        };

        this.loadIncludeScript("Hello.xfdl", true);

       
    };
}
)();
