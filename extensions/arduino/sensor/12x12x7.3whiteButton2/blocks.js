/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#4F4F4F';
    const secondaryColour = '#3C3C3C';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.whiteButton_readState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WHITEBUTTON_READ_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
                // extensions: ['output_number']
                // extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.whiteButton_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WHITEBUTTON_READ_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
