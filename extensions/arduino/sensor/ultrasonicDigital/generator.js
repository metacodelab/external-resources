/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.digitalUltrasonic_readDistance = function (block) {
        const pin = block.getFieldValue('PIN');
        const text = block.getField('PIN').text_.slice(1);

        Blockly.Arduino.includes_.digitalUltrasonic_readDistance = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`digitalUltrasonic_init_${text}`] =`Ultrasonic us_${text};`;
        Blockly.Arduino.setups_[`digitalUltrasonic_init_${text}`] =`us_${text}.digitalUltrasonicSetPin(${pin});`;

        return [`us_${text}.getDigitalUltrasonicDistance()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.digitalUltrasonic_readDistanceTemp = function (block) {
        const pin = block.getFieldValue('PIN');
        const text = block.getField('PIN').text_.slice(1);
        const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.digitalUltrasonic_readDistance = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`digitalUltrasonic_init_${text}`] =`Ultrasonic us_${text};`;
        Blockly.Arduino.setups_[`digitalUltrasonic_init_${text}`] =`us_${text}.digitalUltrasonicSetPin(${pin});`;

        // return `us_${text}.getDigitalUltrasonicDistance(${pin}, ${num});\n`;
        return [`us_${text}.getDigitalUltrasonicDistance(${pin}, ${num})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
