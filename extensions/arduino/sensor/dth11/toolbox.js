/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_DHT11_CATEGORY}" id="DHT11_CATEGORY" colour="#42CCFF" secondaryColour="#00BFFF">
    <block type="dht_readValue" id="dht_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}

exports = addToolbox;
