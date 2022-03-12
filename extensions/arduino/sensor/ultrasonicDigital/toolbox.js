/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DIGITALULTRASONIC_CATEGORY}" id="DIGITALULTRASONIC_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="digitalUltrasonic_readDistance" id="digitalUltrasonic_readDistance">
        <field name="PIN">2</field>
    </block>
    <block type="digitalUltrasonic_readDistanceTemp" id="digitalUltrasonic_readDistanceTemp">
        <field name="PIN">2</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">25.5</field>
            </shadow>
        </value>
    </block>
</category>    `;
}
exports = addToolbox;
