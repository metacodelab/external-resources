/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.dht_readValue = function (block) {
        const pin = block.getFieldValue('pin');
        const type = block.getFieldValue('type');

        Blockly.Arduino.includes_.dht_init = `#include <DHT.h>`;
        Blockly.Arduino.definitions_[`dht11_init_${pin}`] = `DHT dht11_${pin};`;
        Blockly.Arduino.setups_.read_value = `dht11_${pin}.begin(${pin});`;
        return [`dht11_${pin}.${type}()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
