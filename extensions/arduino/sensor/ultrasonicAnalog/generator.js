/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.meta_analogUltrasonic_readDistance = function (block) {
        const pin = block.getFieldValue('PIN');
        var text = block.getField('PIN').text_;
        if(text[0]=='P'){
            text = text.slice(1)
        }
        
        const distance = block.getFieldValue('DISTANCE');

        Blockly.Arduino.includes_.analogUltrasonic_readDistance = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`analogUltrasonic_init_${text}`] =`Ultrasonic us_${text};`;
        Blockly.Arduino.setups_[`analogUltrasonic_init_${text}`] =`us_${text}.analogUltrasonicSetPin(${pin});`;

        return [`us_${text}.getAnalogUltrasonicDistance(${distance})`, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
