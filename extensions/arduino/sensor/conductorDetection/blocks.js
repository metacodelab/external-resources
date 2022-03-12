/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#D39DDB';
    // const secondaryColour = '#BA55D3';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.conductorDetection_readState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.CONDUCTORDETECTION_READ_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.conductorDetection_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.CONDUCTORDETECTION_READ_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
