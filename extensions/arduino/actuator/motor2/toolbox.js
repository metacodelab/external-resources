/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_MOTOR_CATEGORY}" id="MOTOR_CATEGORY" colour="#6495ED" secondaryColour="#6495ED">
    <block type="motor_setMOTORState" id="motor_setMOTORState">
        <field name="pin">A0</field>
		<field name="state">1</field>
    </block>
    <block type="motor_setMOTORState2" id="motor_setMOTORState2">
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
