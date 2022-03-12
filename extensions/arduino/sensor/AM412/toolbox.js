/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_AM412_CATEGORY}" id="AM412_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="AM412_readValue" id="AM412_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
