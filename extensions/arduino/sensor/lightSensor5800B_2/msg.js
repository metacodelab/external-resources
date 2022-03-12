/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LIGHTSENSOR5800B_CATEGORY: 'light sensor ',
        LIGHTSENSOR5800B_READ_VALUE: 'read the value of pin %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LIGHTSENSOR5800B_CATEGORY: '光线传感器',
        LIGHTSENSOR5800B_READ_VALUE: '读取引脚%1光线强度'
    });
    return Blockly;
}

exports = addMsg;
