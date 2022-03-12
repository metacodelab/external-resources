/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#D39DDB';
    const secondaryColour = '#BA55D3';

    const analogPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_readAnalogPin')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.meta_analogUltrasonic_readDistance = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.META_ANALOGULTRASONIC_READ_DISTANCE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: analogPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DISTANCE',
                        options: [
                            ['2-100cm','100'],
                            ['2-300cm','300']
                        ]
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
