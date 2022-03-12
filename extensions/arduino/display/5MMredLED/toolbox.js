/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_REDLED_CATEGORY}" id="REDLED_CATEGORY" colour="#CD5C5C" secondaryColour="#CD5C5C">
    <block type="redLED_setLEDState" id="redLED_setLEDState">
        <field name="pin">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
