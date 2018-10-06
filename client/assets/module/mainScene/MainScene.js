let Observer = require('Observer');
let UIMgr = require('UIMgr');
let NetHttpMgr = require('NetHttpMgr');
let GameData = require('GameData');

cc.Class({
    extends: Observer,

    properties: {
        topBarPre: {
            displayName: 'topBarPre',
            default: null,
            type: cc.Prefab
        },
        uiNode: {
            displayName: 'uiNode',
            default: null,
            type: cc.Node
        },
        sevenDayPre: {
            displayName: 'sevenDayPre',
            default: null,
            type: cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:
    _getMsgList() {
        return [
            GameMsgHttp.Msg.SevenDay.msg
        ];
    },
    _onMsg(msg, data) {
        if (msg === GameMsgHttp.Msg.SevenDay.msg) {
            UIMgr.createPrefab(this.sevenDayPre, (root, ui) => {
                this.uiNode.addChild(root);
                ui.getComponent('SevenDay').initView(data);
            });
        }
    },
    onLoad() {
        this._initMsg();
        if (GameData.playerInfo.loginTimes === 1) {
            //七日登陆
            let sendData = {
                userId: GameData.playerInfo.userId
            };
            NetHttpMgr.quest(GameMsgHttp.Msg.SevenDay, sendData);
            return;
        }

    },

    start() {

    },

    // update (dt) {},

    onBtnClickToSevenDay() {
        let sendData = {
            userId: GameData.playerInfo.userId
        };
        NetHttpMgr.quest(GameMsgHttp.Msg.SevenDay, sendData);
    },
});