var GameOverUI = cc.Layer.extend({

    _distanceText:null,
    _scoreText:null,
    _gameScene:null,
    _timeText:null,

    ctor:function(gameScene){
        this._super();
        this._gameScene = gameScene;

        var winSize = cc.director.getWinSize();
        var bg = new cc.LayerColor(cc.color(0,0,0,200), winSize.width, winSize.height);
        this.addChild(bg);

        var fnt = "res/fonts/font.fnt";
        var title = new cc.LabelBMFont("Rabbit WAS KILLED!", fnt);
        this.addChild(title);
        title.setColor(cc.color(243,231,95));
        title.x = winSize.width/2;
        title.y = winSize.height - 120;

        this._distanceText = new cc.LabelBMFont("DISTANCE TRAVELLED: 0000000", fnt);
        this.addChild(this._distanceText);
        this._distanceText.x = winSize.width/2;
        this._distanceText.y = winSize.height - 220;

        this._scoreText = new cc.LabelBMFont("Coins: 0000000", fnt);
        this.addChild(this._scoreText);
        this._scoreText.x = winSize.width/2;
        this._scoreText.y = winSize.height - 270;


        var replayBtn = new cc.MenuItemImage("#gameOver_playAgainButton.png", "#gameOver_playAgainButton.png", this._replay.bind(this));
        var aboutBtn = new cc.MenuItemImage("#gameOver_aboutButton.png", "#gameOver_aboutButton.png", this._about);
        var mainBtn = new cc.MenuItemImage("#gameOver_mainButton.png", "#gameOver_mainButton.png", this._return);
        var menu = new cc.Menu(replayBtn, mainBtn, aboutBtn);
        menu.alignItemsVertically();
        this.addChild(menu);
        menu.y = winSize.height/2 - 100;

        /////////////////////////////////微信分享箭头 微信中显示掌阅logo/////////////////////
        /*var wxShareBtn= new cc.MenuItemSprite(
            new cc.Sprite("#gameOver_aboutButton.png"), // normal state image
            new cc.Sprite("#gameOver_aboutButton.png"), //select state image
            this.wxShare, this);
        var wxfxBtn = new cc.Menu(wxShareBtn);  //7. create the menu
        wxfxBtn.setPosition(size.width/2, size.height/2-250);
        this.addChild(wxfxBtn);*/
    },

    init:function(){
        this._distanceText.setString("DISTANCE TRAVELLED: " + parseInt(Game.user.distance));
        this._scoreText.setString("SCORE: " + Game.user.score);

    },

    _replay:function(){
        this._gameScene.init();
    },

    _about:function(){
        cc.director.runScene(new Share());

    },

    _return:function(){
        cc.director.runScene(new MenuScene());
    }

});