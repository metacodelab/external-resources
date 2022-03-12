/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.fan_setFANState = function (block) {
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('pin');
        const state = block.getFieldValue('state');
        // const state = this.getFieldValue('state');

        // return `digitalWrite(${pin}, ${state});\n`;
        Blockly.Arduino.setups_.fan_init = `pinMode(${pin}, OUTPUT);`;
        return `digitalWrite(${pin}, ${state});\n`;
        // return ``;
    };

    Blockly.Arduino.fan_setFANState2 = function (block) {
        const pin = block.getFieldValue('pin');
        // const pin = block.getFieldValue('speed');
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);

        return `analogWrite(${pin}, ${speed});\n`;
    };

    return Blockly;
}

exports = addGenerator;
