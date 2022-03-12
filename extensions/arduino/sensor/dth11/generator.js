/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.dht_readValue = function (block) {
        // const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('pin');
        const type = block.getFieldValue('type');
        const text = block.getField('pin').text_.slice(1);
        // const model = this.getFieldValue('MODEL');

        Blockly.Arduino.includes_.dht_init = `#include <DHT.h>`;
        Blockly.Arduino.definitions_[`dht11_init_${text}`] = `DHT dht11_${text};`;
        Blockly.Arduino.setups_.read_value = `dht11_${text}.begin(${pin});`;
        return [`dht11_${text}.${type}()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    // Blockly.Arduino.dht_readHumidity = function (block) {
    //     const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    //     return [`dht_${no}.readHumidity()`, Blockly.Arduino.ORDER_ATOMIC];
    // };

    // Blockly.Arduino.dht_readTemperature = function (block) {
    //     const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    //     const unit = this.getFieldValue('UNIT');
    //     return [`dht_${no}.readTemperature(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
    // };

    return Blockly;
}

exports = addGenerator;
