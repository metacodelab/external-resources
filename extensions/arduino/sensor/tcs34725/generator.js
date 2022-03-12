/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tcs34725_init = function () {

        Blockly.Arduino.includes_.tcs34725_init = `#include <TCS34725.h>`;
        Blockly.Arduino.definitions_.tcs34725_init =`TCS34725 tcs34725;`;
        Blockly.Arduino.setups_.tcs34725_init =`tcs34725.begin();`;

        return ``;
    };

    Blockly.Arduino.tcs34725_readrgb = function (block) {
        const rgb = block.getFieldValue('rgb');
        const gamma = block.getFieldValue('gamma');

        Blockly.Arduino.includes_.tcs34725_init = `#include <TCS34725.h>`;
        Blockly.Arduino.definitions_.tcs34725_init =`TCS34725 tcs34725;`;
        Blockly.Arduino.setups_.tcs34725_init =`tcs34725.begin();`;

        return [`tcs34725.get${rgb}${gamma}()`, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
