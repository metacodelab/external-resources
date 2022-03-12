/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_YELLOWKEY_CATEGORY}" id="YELLOWKEY_CATEGORY" colour="#FFD306" secondaryColour="#FFFF6F" iconURI="">
    <block type="yellowKey_readState" id="yellowKey_readState">
        <field name="pin">A0</field>
    </block>
    <block type="yellowKey_readValue" id="yellowKey_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
