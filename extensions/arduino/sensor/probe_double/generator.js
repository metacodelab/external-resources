/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino['doubleProbe_readLeftState'] = function(block) {
        var arg0 = block.getFieldValue('left_pin') || 'A0';
        var code = "(digitalRead(" + arg0 + ")==1)";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino['doubleProbe_readRightState'] = function(block) {
        var arg0 = block.getFieldValue('right_pin') || 'A1';
        var code = "(digitalRead(" + arg0 + ")==1)";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino['doubleProbe_readLeftValue'] = function(block) {
        var arg0 = block.getFieldValue('left_pin') || 'A0';
        var code = "digitalRead(" + arg0 + ")";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }

    Blockly.Arduino['doubleProbe_readRightValue'] = function(block) {
        var arg0 = block.getFieldValue('right_pin') || 'A1';
        var code = "digitalRead(" + arg0 + ")";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }
    
    return Blockly;
}

exports = addGenerator;
