/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SERVO270_CATEGORY}" id="SERVO270_CATEGORY" colour="#6495ED" secondaryColour="#6495ED">
    <block type="servo270_setState_0" id="servo270_setState">
        <field name="PIN">A0</field>
        <value name="DEGREE">
            <shadow type="filed270_0">
                <field name="NUM">0</field>
            </shadow>
       </value>
    </block>
    <block type="servo270_setState_135" id="servo270_setState2">
        <field name="PIN">A0</field>
        <value name="DEGREE">
            <shadow type="filed270_135">
                <field name="NUM">135</field>
            </shadow>
       </value>
    </block>
</category>`;
}

exports = addToolbox;
