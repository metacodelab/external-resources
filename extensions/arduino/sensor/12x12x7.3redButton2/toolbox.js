/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_REDBUTTON_CATEGORY}" id="REDBUTTON_CATEGORY" colour="#FF2D2D" secondaryColour="#ff7575" iconURI="">
    <block type="redButton_readState" id="redButton_readState">
        <field name="pin">A0</field>
    </block>
    <block type="redButton_readValue" id="redButton_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
