/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    
    Blockly.Arduino.filed270_0 = function (block) {
        const num = block.getFieldValue('NUM');
    
        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.filed270_135 = function (block) {
        const num = block.getFieldValue('NUM');
    
        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.servo270_setState_0 = function (block) {
        const pin = block.getFieldValue('PIN');
        var text = block.getField('PIN').text_;
        const degree = Blockly.Arduino.valueToCode(block, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);

        if(text[1]!='W'){
            text = text.slice(1)
        }

        Blockly.Arduino.includes_.servo270_setState = `#include <MetaCodeServo.h>`;
        Blockly.Arduino.definitions_[`servo270_setState_${text}`] =`MetaCodeServo servo_${text};`;
        Blockly.Arduino.setups_[`servo270_setState_${text}`] =`servo_${text}.attach(${pin});`;

        return `servo_${text}.setAngle_270(${degree});\n`;
    };

    Blockly.Arduino.servo270_setState_135 = function (block) {
        const pin = block.getFieldValue('PIN');
        var text = block.getField('PIN').text_;
        const degree = Blockly.Arduino.valueToCode(block, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);

        if(text[1]!='W'){
            text = text.slice(1)
        }

        Blockly.Arduino.includes_.servo270_setState = `#include <MetaCodeServo.h>`;
        Blockly.Arduino.definitions_[`servo270_setState_${text}`] =`MetaCodeServo servo_${text};`;
        Blockly.Arduino.setups_[`servo270_setState_${text}`] =`servo_${text}.attach(${pin});`;

        return `servo_${text}.angle_270(abs(${degree}));\n`;
    };

    return Blockly;
}

exports = addGenerator;
