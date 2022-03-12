/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DS18B20_CATEGORY}" id="DS18B20_CATEGORY" colour="#009393" secondaryColour="#007979">
    <block type="ds18b20_read" id="ds18b20_read">
        <field name="PIN">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
