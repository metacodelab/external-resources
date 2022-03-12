/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        GREENLED_CATEGORY: 'green LED',
        GREENLED_SET_LED_STATE: '%2 pin %1 LED',
        GREENLED_ON: 'open',
        GREENLED_OFF: 'close'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        GREENLED_CATEGORY: '绿色LED',
        GREENLED_SET_LED_STATE: '%2 引脚 %1 LED',
        GREENLED_ON: '打开',
        GREENLED_OFF: '关闭'
    });
    return Blockly;
}

exports = addMsg;
