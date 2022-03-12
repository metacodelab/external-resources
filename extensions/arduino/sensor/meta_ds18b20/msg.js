/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DS18B20_CATEGORY: 'DS18B20',
        DS18B20_READ: 'read interface %1 DS18B20 value(℃)'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DS18B20_CATEGORY: 'DS18B20温度传感器',
        DS18B20_READ: '读取接口 %1 DS18B20 温度(℃)'
    });
    return Blockly;
}

exports = addMsg;
