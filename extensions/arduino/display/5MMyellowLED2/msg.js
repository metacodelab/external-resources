/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        YELLOWLED_CATEGORY: 'yellow LED',
        YELLOWLED_SET_LED_STATE: '%2 pin %1 LED',
        YELLOWLED_ON: 'open',
        YELLOWLED_OFF: 'close'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        YELLOWLED_CATEGORY: '黄色LED',
        YELLOWLED_SET_LED_STATE: '%2 引脚 %1 LED',
        YELLOWLED_ON: '打开',
        YELLOWLED_OFF: '关闭'
    });
    return Blockly;
}

exports = addMsg;
