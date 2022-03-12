/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DHT11_CATEGORY: 'DHT11',
        HUMIDITY: 'humidity(%rh)',
        TEMPERATURE: 'temperature(℃)',
        DHT_READVALUE: 'read dht11 pin %1 %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DHT11_CATEGORY: '温湿度传感器',
        HUMIDITY: '湿度(%rh)',
        TEMPERATURE: '温度(℃)',
        DHT_READVALUE: '读取 dht11 引脚 %1 %2'
    });
    return Blockly;
}

exports = addMsg;
