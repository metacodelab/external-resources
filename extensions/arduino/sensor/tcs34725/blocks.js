/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#D39DDB';
    const secondaryColour = '#BA55D3';

    // const analogPins = Blockly.getMainWorkspace().getFlyout()
    //     .getFlyoutItems()
    //     .find(block => block.type === 'arduino_pin_readAnalogPin')
    //     .getField('PIN')
    //     .getOptions();

    Blockly.Blocks.tcs34725_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TCS34725_INIT,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tcs34725_readrgb = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TCS34725_READRGB,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'rgb',
                        options: [
                            ['R', 'Red'],
                            ['G', 'Green'],
                            ['B', 'Blue']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'gamma',
                        options: [
                            [Blockly.Msg.GAMMA_ON, 'ToGamma'],
                            [Blockly.Msg.GAMMA_OFF, '']]
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
