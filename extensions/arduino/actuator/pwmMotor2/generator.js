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
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.pwmMotor_init = `#include <PWM_Motor.h>`;
        Blockly.Arduino.definitions_[`pwmMotor_init_${pin}`] =`PWM_Motor pwmMotor_${pin};`;
        Blockly.Arduino.setups_[`pwmMotor_init_${pin}`] =`pwmMotor_${pin}.attach(${pin});`;

        return `pwmMotor_${pin}.speed(${state}${value});\n`;
    };

    return Blockly;
}

exports = addGenerator;
