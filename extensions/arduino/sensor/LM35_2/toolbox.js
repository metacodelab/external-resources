/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_LM35_CATEGORY}" id="LM35_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="LM35_readTemperature" id="LM35_readTemperature">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
