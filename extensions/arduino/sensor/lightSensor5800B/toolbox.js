/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_LIGHTSENSOR5800B_CATEGORY}" id="LIGHTSENSOR5800B_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="lightSensor5800B_readValue" id="lightSensor5800B_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
