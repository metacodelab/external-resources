/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#6495ED';
    const pwmPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setInterfacePwmOutput')
        .getField('PIN')
        .getOptions();

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.motor_setMOTORState = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTOR_SET_MOTOR_STATE,
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
                            [Blockly.Msg.MOTOR_ON, '1'],
                            [Blockly.Msg.MOTOR_OFF, '0']]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.motor_setMOTORState2 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MOTOR_SET_MOTOR_STATE2,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: pwmPins
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
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
