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

       var aboutText = "�������ɾ�����һ���Խ���Ϊ������������Ϸ������ǲ���ɼ򵥵���Ϸ������ʽ������ҵĹ�����/n/n" +
           "�ڰ���ɭ������һ����ֱ��·�ܳ��ܳ�����֪·�ľ�ͷ�����һ·�Ͽ����ɰ��İ�ɫС���Ӷ��ڿ񱼣���ʱ���Բ�ע/n/n" +
           "�����Ӿͻᱻ·��ͻȻ���ֵ�С����Ϯ�������ֻ������еĸо�����Ϸ����Ҫ������ʱ���ڿ���������/n/n" +
           "��·����Ծ�ƶ�����ϰ��ͻ�ȡ��Ϸ��ָ��Կ������������ʹ�ô������ѹ�������Ȼ�����л��и��ָ������ϰ������ӵ�ǰ�У�/n/n" +
           "��������Ϸ��������ʲô�أ�ϲ��������һ���˰ɡ�"

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
