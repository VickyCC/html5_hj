
var GameSceneTimeUI = cc.Layer.extend({

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
        lifeLabel.x =380;
        lifeLabel.y = winSize.height - 25;

        this._lifeText = new cc.LabelBMFont("0", fnt);
        this.addChild(this._lifeText);
        this._lifeText.x =380;
        this._lifeText.y = winSize.height - 60;

        var distanceLabel = new cc.LabelBMFont("Distance", fnt);
        this.addChild(distanceLabel);
        distanceLabel.x =620;
        distanceLabel.y = winSize.height - 25;

        this._distanceText = new cc.LabelBMFont("0", fnt);
        this.addChild(this._distanceText);
        this._distanceText.x = 620;
        this._distanceText.y = winSize.height - 60;

        var scoreLabel = new cc.LabelBMFont("Coins", fnt);
        this.addChild(scoreLabel);
        scoreLabel.x =855;
        scoreLabel.y = winSize.height - 25;

        this._scoreText = new cc.LabelBMFont("0", fnt);
        this.addChild(this._scoreText);
        this._scoreText.x = 855;
        this._scoreText.y = winSize.height - 60;

        var pauseButton = new cc.MenuItemImage("#pauseButton.png", "#pauseButton.png", this._pauseResume);
        var soundButton = new SoundButton();
        var menu = new cc.Menu(soundButton, pauseButton);
        menu.alignItemsHorizontallyWithPadding(30);
        menu.x = 80;
        menu.y = winSize.height - 45;
        this.addChild(menu);
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
});
