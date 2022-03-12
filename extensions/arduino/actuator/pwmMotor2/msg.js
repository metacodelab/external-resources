/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        PWM_MOTOR_CATEGORY: 'PWM Motor',
        PWM_MOTOR_SET_STATE: 'pin %1 motor rotate %3 at %2 \% speed',
        PWM_MOTOR_ON:'CW',
        PWM_MOTOR_OFF:'CCW'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        PWM_MOTOR_CATEGORY: 'PWM电机',
        PWM_MOTOR_SET_STATE: '设置接口 %1 电机以 %2 \% 的速度 %3',
        PWM_MOTOR_ON:'正转',
        PWM_MOTOR_OFF:'反转'
    });
    return Blockly;
}

exports = addMsg;
