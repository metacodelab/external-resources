/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF8C00';
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.yellowLED_setLEDState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.YELLOWLED_SET_LED_STATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state',
                        options: [
                            [Blockly.Msg.YELLOWLED_ON, '1'],
                            [Blockly.Msg.YELLOWLED_OFF, '0']]
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
