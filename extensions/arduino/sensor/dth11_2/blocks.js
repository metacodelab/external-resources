/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#42CCFF';
    const secondaryColour = '#00BFFF';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();


    Blockly.Blocks.dht_readValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.DHT_READVALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [
                            [Blockly.Msg.TEMPERATURE, 'getTemperature'],
                            [Blockly.Msg.HUMIDITY, 'getHumidity']]
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
