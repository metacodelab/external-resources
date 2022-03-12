/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_YELLOWLED_CATEGORY}" id="YELLOWLED_CATEGORY" colour="#FF8C00" secondaryColour="#FF8C00">
    <block type="yellowLED_setLEDState" id="yellowLED_setLEDState">
        <field name="pin">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
