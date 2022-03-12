/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LM35_CATEGORY: 'LM35',
        LM35_READ_TEMPERATURE: 'read interface %1 temperature(℃)'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LM35_CATEGORY: '线性温度传感器',
        LM35_READ_TEMPERATURE: '读取接口%1温度(℃)'
    });
    return Blockly;
}

exports = addMsg;
