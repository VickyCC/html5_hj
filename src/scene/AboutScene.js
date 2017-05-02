var AboutScene = cc.Scene.extend({

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
        var Ab = new cc.Sprite("res/graphics/about.png");
        Ab.x = winSize.width/2+20;
        Ab.y = winSize.height/2+100;
        layer.addChild(Ab);

       var aboutText = "《梦游仙境》是一款以教育为背景的休闲游戏，用消遣放松简单的游戏互动方式引起玩家的共鸣。/n/n" +
           "黑暗的森林中有一条笔直的路很长很长，不知路的尽头在哪里，一路上看到可爱的白色小兔子儿在狂奔，有时候稍不注/n/n" +
           "意兔子就会被路上突然出现的小怪兽袭击，有种祸不单行的感觉。游戏中你要在有限时间内控制兔子在/n/n" +
           "道路上跳跃移动躲避障碍和获取游戏中指定钥匙数量，才能使兔从梦中醒过来。虽然过程中会有各种各样的障碍阻兔子的前行，/n/n" +
           "不过有游戏达人在怕什么呢，喜欢的朋友一起嗨吧。"

       /* var helloLabel = new cc.LabelTTF(aboutText, "Arial", 18);
        helloLabel.x = winSize.width/2;
        helloLabel.y = winSize.height/2 + 80;
        layer.addChild(helloLabel);*/
       // this.nameTxt.setString(decodeURI(this.data.name));
       //aboutText.put("name", aboutText.encode("UTF-8"));
       /* var currText = new cc.LabelTTF("","Arial", 24);
        currText.x =  winSize.width/2+200;
        currText.y = winSize.height/2 + 80;
        layer.addChild(currText,2);
        currText.setString(decodeURI(""));*/

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

    addAbout:function() {
        console.log("addAbout");
        aboutObj = new cc.Sprite.create("res/graphics/about.png");
        aboutObj.attr({
            x:aboutObj.getContentSize().width / 2 ,
            y:aboutObj.getContentSize().width / 2,
            scale: 1,
            ratation: 0
        });
        this.addChild(aboutObj);
    }

});
