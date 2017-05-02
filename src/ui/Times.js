
var TimeLayer = cc.Layer.extend({
    sprite:null,
    _rootNode: null,
    _widget: null,

    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;

        this.m_timer=Game.user.m_timer;

        this._rootNode = cc.Node.create();
        this.addChild(this._rootNode);
        //read widget
        this._widget=ccs.uiReader.widgetFromJsonFile( "res/graphics/uiLayer_0.json");

        this._rootNode.addChild(this._widget);

        this.djs_fen = ccui.helper.seekWidgetByName(this._widget, "daojishi-fen");
        this.djs_miao = ccui.helper.seekWidgetByName(this._widget, "daojishi-miao");

        this.djs_fen.setProperty("03","res/graphics/number.png",16, 22, "0");
        var timeSize = this.djs_fen.getContentSize();
        this.djs_fen.setScale(38/timeSize.width,30/timeSize.height);
        this.djs_fen.x = timeSize.width/2+323;
        this.djs_fen.y = timeSize.height/2+565;

        this.djs_miao.setProperty("00","res/graphics/number.png", 16, 22, "0");
        this.djs_miao.setProperty("03","res/graphics/number.png", 16, 22, "0");
        var timeSize1 = this.djs_miao.getContentSize();
        this.djs_miao.setScale(38/timeSize1.width,30/timeSize1.height);
        this.djs_miao.x = timeSize.width/2+380;
        this.djs_miao.y = timeSize.height/2+565;

        this.scheduleUpdate();

        return true;
    },
    update:function(dt){
        this.daojishi(dt);
    },
    daojishi:function(dt){
//        float m_timer;
        this.m_timer-=dt;

        var time = this.m_timer;

//计算多杀秒
        var miao = time%60;
        time/= 60;
//多少分钟
        var fen = time%60;
        time/= 60;
//多少小时
        var xiaoshi = time%24;

//多杀天
        var tian = time/24;

//        cc.log("%d天%d小时%d分钟%d秒",tian,xiaoshi,fen,miao);
//        cc.log("%d天%d小时%d分钟%d秒",parseInt(fen),parseInt(miao));
        miao = parseInt(miao);
        fen = parseInt(fen);

        if(fen<10){
            this.djs_fen.setProperty("0"+fen+":",  "res/graphics/number.png", 16, 22, "00");
        }
        else{
            this.djs_fen.setProperty(fen, "res/graphics/number.png", 16, 22, "00");
        }
        if(miao<10){
            this.djs_miao.setProperty("0"+miao, "res/graphics/number.png", 16, 22, "000");
        }
        else{
            this.djs_miao.setProperty(miao,  "res/graphics/number.png", 16, 22, "000");
        }

    },

   /* update:function() {

        this._timeText.setString(Game.user.m_timer.toString());

    }
*/
});



