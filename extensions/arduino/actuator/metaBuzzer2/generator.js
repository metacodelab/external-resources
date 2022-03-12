/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.metaBuzzer_init = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.metaBuzzer_init = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.beatTime_init = `float beatTime = 60.0 / 120;`;
        Blockly.Arduino.definitions_[`metaBuzzer_${pin}_init`] = `Buzzer buzzer_${pin}(${pin});`;
        // Blockly.Arduino.definitions_.metaBuzzer_init = `Buzzer buzzer(${pin});\n` +
        //     `float beatTime = 60.0 / 120;`;

        return ``;
    };

    Blockly.Arduino.metaBuzzer_playToneForBeat = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.metaBuzzer_init = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.beatTime_init = `float beatTime = 60.0 / 120;`;
        Blockly.Arduino.definitions_[`metaBuzzer_${pin}_init`] = `Buzzer buzzer_${pin}(${pin});`;
        
        const freq = this.getFieldValue('FREQ');
        const time = this.getFieldValue('TIME');

        return `buzzer_${pin}.tone(${freq}, ${time} * 1000 * beatTime);\n`;
    };

    Blockly.Arduino.metaBuzzer_setTempo = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.metaBuzzer_init = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.beatTime_init = `float beatTime = 60.0 / 120;`;
        Blockly.Arduino.definitions_[`metaBuzzer_${pin}_init`] = `Buzzer buzzer_${pin}(${pin});`;
        const bpm = Blockly.Arduino.valueToCode(block, 'BPM', Blockly.Arduino.ORDER_ATOMIC);

        return `beatTime = 60.0 / ${bpm};\n`;
    };

    Blockly.Arduino.metaBuzzer_playRingtone = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.metaBuzzer_init = `#include <Buzzer.h>`;
        Blockly.Arduino.definitions_.beatTime_init = `float beatTime = 60.0 / 120;`;
        Blockly.Arduino.definitions_[`metaBuzzer_${pin}_init`] = `Buzzer buzzer_${pin}(${pin});`;

        const no = this.getFieldValue('NO');

        return `buzzer_${pin}.playRingtone(${no});\n`;
    };

    return Blockly;
}

exports = addGenerator;
