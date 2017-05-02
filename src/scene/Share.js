
var Share = cc.Scene.extend({

    ctor:function () {
        this._super();
        var layer = new cc.Layer();
        this.addChild(layer);

        var winSize = cc.director.getWinSize();
        var bgWelcome = new cc.Sprite("res/graphics/bgWelcome.jpg");
        bgWelcome.x = winSize.width/2;
        bgWelcome.y = winSize.height/2;
        layer.addChild(bgWelcome);

        var Ab = cc.director.getWinSize();
        var Ab = new cc.Sprite("res/graphics/weixin.png");
        Ab.x = winSize.width/2+120;
        Ab.y = winSize.height/2+220;
        layer.addChild(Ab);


        var backButton = new cc.MenuItemImage("#about_backButton.png", "#about_backButton.png", this._back);
        backButton.x = 150;
        backButton.y = -70;
        var menu = new cc.Menu(backButton);
        layer.addChild(menu);

        return true;
        this.addAbout();

    },

    _back:function() {
        Sound.playCoffee();
        cc.director.runScene(new MenuScene());
    },


});
