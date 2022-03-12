/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        REDLED_CATEGORY: 'red LED',
        REDLED_SET_LED_STATE: '%2 pin %1 LED',
        REDLED_ON: 'open',
        REDLED_OFF: 'close'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        REDLED_CATEGORY: '红色LED',
        REDLED_SET_LED_STATE: '%2 引脚 %1 LED',
        REDLED_ON: '打开',
        REDLED_OFF: '关闭'
    });
    return Blockly;
}

exports = addMsg;
