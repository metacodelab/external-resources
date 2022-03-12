/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_GREENLED_CATEGORY}" id="GREENLED_CATEGORY" colour="#3CB371" secondaryColour="#3CB371">
    <block type="greenLED_setLEDState" id="greenLED_setLEDState">
        <field name="pin">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
