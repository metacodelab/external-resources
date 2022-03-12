/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_CONDUCTORDETECTION_CATEGORY}" id="CONDUCTORDETECTION_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="conductorDetection_readState" id="conductorDetection_readState">
        <field name="pin">A0</field>
    </block>
    <block type="conductorDetection_readValue" id="conductorDetection_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
