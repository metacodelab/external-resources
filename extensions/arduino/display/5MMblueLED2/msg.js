/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BLUELED_CATEGORY: 'blue LED',
        BLUELED_SET_LED_STATE: '%2 pin %1 LED',
        BLUELED_ON: 'open',
        BLUELED_OFF: 'close'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BLUELED_CATEGORY: '蓝色LED',
        BLUELED_SET_LED_STATE: '%2 引脚 %1 LED',
        BLUELED_ON: '打开',
        BLUELED_OFF: '关闭'
    });
    return Blockly;
}

exports = addMsg;
