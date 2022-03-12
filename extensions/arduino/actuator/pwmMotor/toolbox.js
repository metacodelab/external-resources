/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_PWM_MOTOR_CATEGORY}" id="PWM_MOTOR_CATEGORY" colour="#6495ED" secondaryColour="#6495ED">
    <block type="pwmMotor_setState" id="pwmMotor_setState">
        <field name="PIN">10</field>
        <value name="VALUE">
            <shadow type="filedPwmValue">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <field name="STATE"> </field>
    </block>
</category>`;
}

exports = addToolbox;
