/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_BLUELED_CATEGORY}" id="BLUELED_CATEGORY" colour="#4C97FF" secondaryColour="#4C97FF">
    <block type="blueLED_setLEDState" id="blueLED_setLEDState">
        <field name="pin">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
