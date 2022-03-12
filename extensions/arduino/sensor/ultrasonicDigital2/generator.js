/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.digitalUltrasonic_readDistance = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.digitalUltrasonic_readDistance = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`digitalUltrasonic_init_${pin}`] =`Ultrasonic us_${pin};`;
        Blockly.Arduino.setups_[`digitalUltrasonic_init_${pin}`] =`us_${pin}.digitalUltrasonicSetPin(${pin});`;

        return [`us_${pin}.getDigitalUltrasonicDistance()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.digitalUltrasonic_readDistanceTemp = function (block) {
        const pin = block.getFieldValue('PIN');
        const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.digitalUltrasonic_readDistance = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`digitalUltrasonic_init_${pin}`] =`Ultrasonic us_${pin};`;
        Blockly.Arduino.setups_[`digitalUltrasonic_init_${pin}`] =`us_${pin}.digitalUltrasonicSetPin(${pin});`;

        return [`us_${pin}.getDigitalUltrasonicDistance(${pin}, ${num})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
