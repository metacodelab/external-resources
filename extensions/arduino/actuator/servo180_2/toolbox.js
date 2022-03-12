/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SERVO180_CATEGORY}" id="SERVO180_CATEGORY" colour="#6495ED" secondaryColour="#6495ED">
    <block type="servo180_setState_0" id="servo180_setState">
        <field name="PIN">A0</field>
        <value name="DEGREE">
            <shadow type="filed180_0">
                <field name="NUM">0</field>
            </shadow>
       </value>
    </block>
    <block type="servo180_setState_90" id="servo180_setState2">
        <field name="PIN">A0</field>
        <value name="DEGREE">
            <shadow type="filed180_90">
                <field name="NUM">90</field>
            </shadow>
       </value>
    </block>
</category>`;
}

exports = addToolbox;
