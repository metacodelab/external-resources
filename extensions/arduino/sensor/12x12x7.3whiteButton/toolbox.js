/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_WHITEBUTTON_CATEGORY}" id="WHITEBUTTON_CATEGORY" colour="#4F4F4F" secondaryColour="#3C3C3C" iconURI="">
    <block type="whiteButton_readState" id="whiteButton_readState">
        <field name="pin">A0</field>
    </block>
    <block type="whiteButton_readValue" id="whiteButton_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
