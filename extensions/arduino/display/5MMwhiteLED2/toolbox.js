/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_WHITELED_CATEGORY}" id="WHITELED_CATEGORY" colour="#808080" secondaryColour="#808080">
    <block type="whiteLED_setLEDState" id="whiteLED_setLEDState">
        <field name="pin">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
