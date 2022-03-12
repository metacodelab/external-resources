/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ds18b20_read = function (block) {
        const pin = block.getFieldValue('PIN');
        const text = block.getField('PIN').text_.slice(1);

        Blockly.Arduino.includes_.ds18b20_init = `#include <DS18B20.h>`;
        Blockly.Arduino.definitions_[`ds18b20_init_${text}`] = `DS18B20 ds18b20_${text};`;
        Blockly.Arduino.setups_[`ds18b20_init_${text}`] = `ds18b20_${text}.begin(${pin});`;

        // var code = "ds18b20_" + pin + ".getTempC()";
        return [`ds18b20_${text}.getTempC()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
