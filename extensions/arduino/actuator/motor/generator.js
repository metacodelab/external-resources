/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.motor_setMOTORState = function (block) {
        const pin = block.getFieldValue('pin');
        const state = block.getFieldValue('state');

        return `pinMode(${pin}, OUTPUT);\ndigitalWrite(${pin}, ${state});\n`;
    };

    Blockly.Arduino.motor_setMOTORState2 = function (block) {
        const pin = block.getFieldValue('pin');
        const speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);

        return `analogWrite(${pin}, ${speed});\n`;
    };

    return Blockly;
}

exports = addGenerator;
