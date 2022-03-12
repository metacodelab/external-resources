/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    
    Blockly.Arduino.filedPwmValue = function (block) {
        const num = block.getFieldValue('NUM');
    
        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.pwmMotor_setState = function (block) {
        const pin = block.getFieldValue('PIN');
        var state = block.getFieldValue('STATE');
        if(state === ' '){
            state = '';
        }
        var text = block.getField('PIN').text_;
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

        if(text[1]!='W'){
            text = text.slice(1)
        }

        Blockly.Arduino.includes_.pwmMotor_init = `#include <PWM_Motor.h>`;
        Blockly.Arduino.definitions_[`pwmMotor_init_${text}`] =`PWM_Motor pwmMotor_${text};`;
        Blockly.Arduino.setups_[`pwmMotor_init_${text}`] =`pwmMotor_${text}.attach(${pin});`;

        return `pwmMotor_${text}.speed(${state}${value});\n`;
    };

    return Blockly;
}

exports = addGenerator;
