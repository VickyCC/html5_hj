var GameBackground = cc.Layer.extend({

    _bg1:null,
    _bg2:null,

    speed:5,

    ctor:function () {
        this._super();
        this.scheduleUpdate();

        var buildParallaxBackground = function(texture){
            var layer = new cc.Layer();
            var bg1 = new cc.Sprite(texture);
            bg1.x = bg1.width/2;
            bg1.y = bg1.height/2;
            layer.addChild(bg1);
            var bg2 = new cc.Sprite(texture);
            bg2.x = bg2.width/2 + bg2.width;
            bg2.y = bg2.height/2;
            layer.addChild(bg2);

            var bg3 = new cc.Sprite(texture);
            bg3.x =bg1. width/2-500;
            bg3.y = bg1.height/2;
            layer.addChild(bg3);
            return layer;
        };


        this._bg1 = buildParallaxBackground("res/graphics/bgLayer.jpg");
        this.addChild(this._bg1);



        this._bg2 = buildParallaxBackground("res/graphics/BG1.png");
        this.addChild(this._bg2);

        this._bg3= buildParallaxBackground("res/graphics/road.png");
        this.addChild(this._bg3);


        return true;
    },

    update:function(dt) {
        var winSize = cc.director.getWinSize();
        this._bg1.x -= Math.ceil(this.speed * 0.02);
        if (this._bg1.x < -parseInt(winSize.width))
            this._bg1.x = 0;
       /// this._bg2.x -= Math.ceil(this.speed * 1);
       // if (this._bg2.x < -parseInt(winSize.width))
          //  this._bg2.x = 0;
    },
    addroad:function() {
        console.log("addroad");
        roadObject = new cc.Sprite.create("");
        roadObject.attr({
            x: roadObject.getContentSize().width / 2 + 200,
            y: roadObject.getContentSize().width / 2 + 400,
            scale: 1,
            ratation: 0
        });
        this.addChild( roadObject);
    },
});
