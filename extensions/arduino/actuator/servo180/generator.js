/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    
    Blockly.Arduino.filed180_0 = function (block) {
        const num = block.getFieldValue('NUM');
    
        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.filed180_90 = function (block) {
        const num = block.getFieldValue('NUM');
    
        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.servo180_setState_0 = function (block) {
        const pin = block.getFieldValue('PIN');
        var text = block.getField('PIN').text_;
        const degree = Blockly.Arduino.valueToCode(block, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);

        if(text[1]!='W'){
            text = text.slice(1)
        }

        Blockly.Arduino.includes_.servo180_setState = `#include <MetaCodeServo.h>`;
        Blockly.Arduino.definitions_[`servo180_setState_${text}`] =`MetaCodeServo servo_${text};`;
        Blockly.Arduino.setups_[`servo180_setState_${text}`] =`servo_${text}.attach(${pin});`;

        return `servo_${text}.setAngle_180(${degree});\n`;
    };

    Blockly.Arduino.servo180_setState_90 = function (block) {
        const pin = block.getFieldValue('PIN');
        var text = block.getField('PIN').text_;
        const degree = Blockly.Arduino.valueToCode(block, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);

        if(text[1]!='W'){
            text = text.slice(1)
        }

        Blockly.Arduino.includes_.servo180_setState = `#include <MetaCodeServo.h>`;
        Blockly.Arduino.definitions_[`servo180_setState_${text}`] =`MetaCodeServo servo_${text};`;
        Blockly.Arduino.setups_[`servo180_setState_${text}`] =`servo_${text}.attach(${pin});`;

        return `servo_${text}.angle_180(abs(${degree}));\n`;
    };

    return Blockly;
}

exports = addGenerator;
