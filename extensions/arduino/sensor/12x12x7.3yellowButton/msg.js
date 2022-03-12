/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        YELLOWKEY_CATEGORY: 'Yellow button',
        YELLOWKEY_READ_STATE: 'interface %1 yellow button was be pushed？',
        YELLOWKEY_READ_VALUE: 'The state value of yellow button in interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        YELLOWKEY_CATEGORY: '黄色按键开关',
        YELLOWKEY_READ_STATE: '接口%1黄色按钮被按下？',
        YELLOWKEY_READ_VALUE: '接口%1黄色按钮的状态值'
    });
    return Blockly;
}

exports = addMsg;
