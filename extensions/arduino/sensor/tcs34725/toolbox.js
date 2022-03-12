/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_TCS34725_CATEGORY}" id="TCS34725_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="tcs34725_init" id="tcs34725_init"></block>
    <block type="tcs34725_readrgb" id="tcs34725_readrgb">
        <field name="rgb">Red</field>
        <field name="gamma">ToGamma</field>
    </block>
</category>    `;
}
exports = addToolbox;
