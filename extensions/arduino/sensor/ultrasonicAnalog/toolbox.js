/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_META_ANALOGULTRASONIC_CATEGORY}" id="META_ANALOGULTRASONIC_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="meta_analogUltrasonic_readDistance" id="meta_analogUltrasonic_readDistance">
        <field name="PIN">A0</field>
        <field name="DISTANCE">300</field>
    </block>
</category>    `;
}
exports = addToolbox;
