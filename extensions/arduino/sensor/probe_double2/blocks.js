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

    Blockly.Blocks.doubleProbe_readLeftState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DOUBLEPROBE_READ_LEFT_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'left_pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.doubleProbe_readRightState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DOUBLEPROBE_READ_RIGHT_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'right_pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.doubleProbe_readLeftValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DOUBLEPROBE_READ_LEFT_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'left_pin',
                        options: digitalPins
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.doubleProbe_readRightValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DOUBLEPROBE_READ_RIGHT_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'right_pin',
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
