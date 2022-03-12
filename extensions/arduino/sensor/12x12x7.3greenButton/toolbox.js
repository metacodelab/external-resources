/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_GREENBUTTON_CATEGORY}" id="GREENBUTTON_CATEGORY" colour="#009100" secondaryColour="#007500" iconURI="">
    <block type="greenButton_readState" id="greenButton_readState">
        <field name="pin">A0</field>
    </block>
    <block type="greenButton_readValue" id="greenButton_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
