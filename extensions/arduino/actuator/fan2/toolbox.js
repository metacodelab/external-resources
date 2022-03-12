/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_FAN_CATEGORY}" id="FAN_CATEGORY" colour="#6495ED" secondaryColour="#6495ED">
    <block type="fan_setFANState" id="fan_setFANState">
        <field name="pin">A0</field>
		<field name="state">1</field>
    </block>
    <block type="fan_setFANState2" id="fan_setFANState2">
        <field name="pin">3</field>
        <value name="speed">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
       </value>
    </block>
</category>`;
}

exports = addToolbox;
