/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino['LM35_readTemperature'] = function(block) {
        const pin = block.getFieldValue('pin');
        const text = block.getField('pin').text_.slice(1);

        Blockly.Arduino.includes_['LM35_readTemperature'] = `#include <LM35.h>`;
        Blockly.Arduino.definitions_.LEDMatrix_init = `LM35 LM35_${text};`;
        // var arg0 = block.getFieldValue('pin') || 'A0';
        // var code = "LM35.readTemperature(" + arg0 + ")";
        // var code = "readTemperature(" + "analogRead(" + arg0 + "))";

        return [`LM35_${text}.readTemperature(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
        
    };
    
    return Blockly;
}

exports = addGenerator;
