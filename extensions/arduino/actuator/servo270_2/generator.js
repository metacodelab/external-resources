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
        const degree = Blockly.Arduino.valueToCode(block, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.servo270_setState = `#include <MetaCodeServo.h>`;
        Blockly.Arduino.definitions_[`servo270_setState_${pin}`] =`MetaCodeServo servo_${pin};`;
        Blockly.Arduino.setups_[`servo270_setState_${pin}`] =`servo_${pin}.attach(${pin});`;

        return `servo_${pin}.setAngle_270(${degree});\n`;
    };

    Blockly.Arduino.servo270_setState_135 = function (block) {
        const pin = block.getFieldValue('PIN');
        const degree = Blockly.Arduino.valueToCode(block, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.servo270_setState = `#include <MetaCodeServo.h>`;
        Blockly.Arduino.definitions_[`servo270_setState_${pin}`] =`MetaCodeServo servo_${pin};`;
        Blockly.Arduino.setups_[`servo270_setState_${pin}`] =`servo_${pin}.attach(${pin});`;

        return `servo_${pin}.angle_270(abs(${degree}));\n`;
    };

    return Blockly;
}

exports = addGenerator;
