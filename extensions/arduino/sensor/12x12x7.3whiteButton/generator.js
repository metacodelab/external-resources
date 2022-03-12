/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino['whiteButton_readState'] = function(block) {
        var arg0 = block.getFieldValue('pin') || 'A0';
        var code = "(digitalRead(" + arg0 + ")==1)";
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino['whiteButton_readValue'] = function(block) {
        var arg0 = block.getFieldValue('pin') || 'A0';
        var code = "digitalRead(" + arg0 + ")";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    return Blockly;
}

exports = addGenerator;
