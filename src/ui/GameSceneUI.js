
var GameSceneUI = cc.Layer.extend({

    _lifeText:null,
    _distanceText:null,
    _scoreText:null,
    _timeText:null,
    sprite:null,
    _rootNode: null,
    _widget: null,

    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.m_timer = 120;

        var fnt = "res/fonts/font.fnt";
        var winSize = cc.director.getWinSize();

        var lifeLabel = new cc.LabelBMFont("life", fnt);
        this.addChild(lifeLabel);
        lifeLabel.x = 550;
        lifeLabel.y = winSize.height - 25;

        this._lifeText = new cc.LabelBMFont("0", fnt);
        this.addChild(this._lifeText);
        this._lifeText.x = 550;
        this._lifeText.y = winSize.height - 60;

        var distanceLabel = new cc.LabelBMFont("Distance", fnt);
        this.addChild(distanceLabel);
        distanceLabel.x = 750;
        distanceLabel.y = winSize.height - 25;

        this._distanceText = new cc.LabelBMFont("0", fnt);
        this.addChild(this._distanceText);
        this._distanceText.x = 750;
        this._distanceText.y = winSize.height - 60;

        var timeLabel = new cc.LabelBMFont("Time", fnt);
        this.addChild(timeLabel);
        timeLabel.x = 370;
        timeLabel.y = winSize.height - 25;

        this._timeText = new cc.LabelBMFont(":", fnt);
        this.addChild(this._timeText);
        this._timeText.x = 370;
        this._timeText.y = winSize.height - 60;

       var scoreLabel = new cc.LabelBMFont("Coins", fnt);
        this.addChild(scoreLabel);
        scoreLabel.x = 915;
        scoreLabel.y = winSize.height - 25;

        this._scoreText = new cc.LabelBMFont("0", fnt);
        this.addChild(this._scoreText);
        this._scoreText.x = 915;
        this._scoreText.y = winSize.height - 60;

       /* this._rootNode = cc.Node.create();
        this.addChild(this._rootNode);
        this._widget = ccs.uiReader.widgetFromJsonFile("res/graphics/uiLayer.json");

        this._rootNode.addChild(this._widget);
        this.djs_fen = ccui.helper.seekWidgetByName(this._widget, "daojishi-fen");
        this.djs_miao = ccui.helper.seekWidgetByName(this._widget, "daojishi-miao");

        this.djs_fen.setProperty("03", res.number_png, 16, 22, "0");
        var timeSize = this.djs_fen.getContentSize();
        this.djs_fen.setScale(238/timeSize.width,200/timeSize.height);
        this.djs_fen.x = timeSize.width/2+100;
        this.djs_fen.y = timeSize.height/2+350;

        this.djs_miao.setProperty("00", res.number_png, 16, 22, "0");
        this.djs_miao.setProperty("03", res.number_png, 16, 22, "0");
        var timeSize1 = this.djs_miao.getContentSize();
        this.djs_miao.setScale(138/timeSize1.width,100/timeSize1.height);


        this.scheduleUpdate();
        */


        var pauseButton = new cc.MenuItemImage("#pauseButton.png", "#pauseButton.png", this._pauseResume);
        var soundButton = new SoundButton();
        var menu = new cc.Menu(soundButton, pauseButton);
        menu.alignItemsHorizontallyWithPadding(30);
        menu.x = 80;
        menu.y = winSize.height - 45;
        this.addChild(menu);
        //this.addTime();

        return true;

    },

    _pauseResume:function() {
        if(cc.director.isPaused())
            cc.director.resume();
        else
            cc.director.pause();
    },

    update:function() {
        this._lifeText.setString(Game.user.lives.toString());
        this._distanceText.setString(parseInt(Game.user.distance).toString());
        this._scoreText.setString(Game.user.score.toString());


    },
    /*addTime:function(){
        var timeLayer = new HelloWorldLayer();
        this.addChild(timeLayer);
    },
   /* daojishi:function(dt){
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
            this.djs_fen.setProperty("0"+fen, res.number_png, 16, 22, "00");
        }
        else{
            this.djs_fen.setProperty(fen, res.number_png, 16, 22, "00");
        }
        if(miao<10){
            this.djs_miao.setProperty("0"+miao, res.number_png, 16, 22, "000");
        }
        else{
            this.djs_miao.setProperty(miao, res.number_png, 16, 22, "000");
        }

    }*/


});