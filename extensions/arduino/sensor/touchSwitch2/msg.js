/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TOUCHSWITCH_CATEGORY: 'Touch Switch',
        TOUCHSWITCH_READ_VALUE: 'A touch was detected in pin %1？',
        TOUCHSWITCH_STATE: 'THE state value of touch switch in pin %1？'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TOUCHSWITCH_CATEGORY: '触摸开关',
        TOUCHSWITCH_READ_VALUE: '引脚%1检测到触摸？',
        TOUCHSWITCH_STATE: '引脚%1触摸开关的状态值'
    });
    return Blockly;
}

exports = addMsg;
