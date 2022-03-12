/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#B943FF';
    const secondaryColour = '#9900FF';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    const note = [
        ['C3', 'note_C3'],
        ['C#3', 'note_Db3'],
        ['D3', 'note_D3'],
        ['D#3', 'note_Eb3'],
        ['E3', 'note_E3'],
        ['F3', 'note_F3'],
        ['F#3', 'note_Gb3'],
        ['G3', 'note_G3'],
        ['G#3', 'note_Ab3'],
        ['A3', 'note_A3'],
        ['A#3', 'note_Bb3'],
        ['B3', 'note_B3'],
        ['C4', 'note_C4'],
        ['C#4', 'note_Db4'],
        ['D4', 'note_D4'],
        ['D#4', 'note_Eb4'],
        ['E4', 'note_E4'],
        ['F4', 'note_F4'],
        ['F#4', 'note_Gb4'],
        ['G4', 'note_G4'],
        ['G#4', 'note_Ab4'],
        ['A4', 'note_A4'],
        ['A#4', 'note_Bb4'],
        ['B4', 'note_B4'],
        ['C5', 'note_C5'],
        ['C#5', 'note_Db5'],
        ['D5', 'note_D5'],
        ['D#5', 'note_Eb5'],
        ['E5', 'note_E5'],
        ['F5', 'note_F5'],
        ['F#5', 'note_Gb5'],
        ['G5', 'note_G5'],
        ['G#5', 'note_Ab5'],
        ['A5', 'note_A5'],
        ['A#5', 'note_Bb5'],
        ['B5', 'note_B5']
    ];

    const beatTime = [
        ['1', '1'],
        ['1/2', '0.5'],
        ['1/4', '0.25'],
        ['1/8', '0.125'],
        ['1/16', '0.0625'],
        ['2', '2'],
        ['4', '4']
    ];

    Blockly.Blocks.metaBuzzer_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.METABUZZER_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.metaBuzzer_playToneForBeat = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.METABUZZER_PLAYTONEFORBEAT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'FREQ',
                        options: note
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TIME',
                        options: beatTime
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.metaBuzzer_setTempo = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.METABUZZER_SETTEMPO,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'BPM'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.metaBuzzer_playRingtone = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.METABUZZER_PLAYRINGTONE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'NO',
                        options: [
                            [Blockly.Msg.METABUZZER_CONNECTION, 'R_connection'],
                            [Blockly.Msg.METABUZZER_DISCONNECTION, 'R_disconnection'],
                            [Blockly.Msg.METABUZZER_DIDI, 'R_buttonPushed'],
                            [Blockly.Msg.METABUZZER_MODE1, 'R_mode1'],
                            [Blockly.Msg.METABUZZER_MODE2, 'R_mode2'],
                            [Blockly.Msg.METABUZZER_MODE3, 'R_mode3'],
                            [Blockly.Msg.METABUZZER_SURPRISE, 'R_surprise'],
                            [Blockly.Msg.METABUZZER_OHOOH, 'R_OhOoh'],
                            [Blockly.Msg.METABUZZER_OHOOH2, 'R_OhOoh2'],
                            [Blockly.Msg.METABUZZER_CUDDLY, 'R_cuddly'],
                            [Blockly.Msg.METABUZZER_SLEEPING, 'R_sleeping'],
                            [Blockly.Msg.METABUZZER_HAPPY, 'R_happy'],
                            [Blockly.Msg.METABUZZER_SUPERHAPPY, 'R_superHappy'],
                            [Blockly.Msg.METABUZZER_HAPPYSHORT, 'R_happy_short'],
                            [Blockly.Msg.METABUZZER_SAD, 'R_sad'],
                            [Blockly.Msg.METABUZZER_CONFUSED, 'R_confused'],
                            [Blockly.Msg.METABUZZER_FART1, 'R_fart1'],
                            [Blockly.Msg.METABUZZER_FART2, 'R_fart2'],
                            [Blockly.Msg.METABUZZER_FART3, 'R_fart3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
