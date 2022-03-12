/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_METABUZZER_CATEGORY}" id="METABUZZER_CATEGORY" colour="#B943FF" secondaryColour="#9900FF">
    <block type="metaBuzzer_init" id="metaBuzzer_init">
        <field name="PIN">A0</field>
    </block>
    <block type="metaBuzzer_playToneForBeat" id="metaBuzzer_playToneForBeat">
        <field name="PIN">A0</field>
        <field name="FREQ">note_C4</field>
    </block>
    <block type="metaBuzzer_setTempo" id="metaBuzzer_setTempo">
        <field name="PIN">A0</field>
        <value name="BPM">
            <shadow type="math_whole_number">
                <field name="NUM">120</field>
            </shadow>
        </value>
    </block>
    <block type="metaBuzzer_playRingtone" id="metaBuzzer_playRingtone">
        <field name="PIN">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
