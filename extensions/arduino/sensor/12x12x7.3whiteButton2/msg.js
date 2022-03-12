/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        WHITEBUTTON_CATEGORY: 'White button',
        WHITEBUTTON_READ_STATE: 'pin %1 white button was be pushed？',
        WHITEBUTTON_READ_VALUE: 'The state value of white button in pin %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        WHITEBUTTON_CATEGORY: '白色按键开关',
        WHITEBUTTON_READ_STATE: '引脚%1白色按钮被按下？',
        WHITEBUTTON_READ_VALUE: '引脚%1白色按钮的状态值'
    });
    return Blockly;
}

exports = addMsg;
