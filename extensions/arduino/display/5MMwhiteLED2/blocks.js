/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#808080';
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.whiteLED_setLEDState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.WHITELED_SET_LED_STATE,
                args0: [
                    // {
                    //     type: 'input_value',
                    //     name: 'pin'
                    // },
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state',
                        options: [
                            [Blockly.Msg.WHITELED_ON, '1'],
                            [Blockly.Msg.WHITELED_OFF, '0']]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
