/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DOUBLEPROBE_CATEGORY}" id="DOUBLEPROBE_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="doubleProbe_readLeftState" id="doubleProbe_readLeftState">
        <field name="left_pin">A0</field>
    </block>
    <block type="doubleProbe_readLeftValue" id="doubleProbe_readLeftValue">
        <field name="left_pin">A0</field>
    </block>
    <block type="doubleProbe_readRightState" id="doubleProbe_readRightState">
        <field name="right_pin">A1</field>
    </block>
    <block type="doubleProbe_readRightValue" id="doubleProbe_readRightValue">
        <field name="right_pin">A1</field>
    </block>
</category>`;
}
exports = addToolbox;
