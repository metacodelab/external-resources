/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        WHITELED_CATEGORY: 'white LED',
        WHITELED_SET_LED_STATE: '%2 pin %1 LED',
        WHITELED_ON: 'open',
        WHITELED_OFF: 'close'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        WHITELED_CATEGORY: '白色LED',
        WHITELED_SET_LED_STATE: '%2 引脚 %1 LED',
        WHITELED_ON: '打开',
        WHITELED_OFF: '关闭'
    });
    return Blockly;
}

exports = addMsg;
