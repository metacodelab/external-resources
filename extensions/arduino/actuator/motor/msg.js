/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MOTOR_CATEGORY: 'DC motor',
        MOTOR_SET_MOTOR_STATE: 'interface %1 %2 motor',
        MOTOR_SET_MOTOR_STATE2: 'set interface %1 motor speed as %2',
        MOTOR_ON: 'OPEN',
        MOTOR_OFF: 'CLOSE'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MOTOR_CATEGORY: '震动马达',
        MOTOR_SET_MOTOR_STATE: '接口 %1 %2 马达',
        MOTOR_SET_MOTOR_STATE2: '设置接口 %1 马达的速度为 %2',
        MOTOR_ON: '打开',
        MOTOR_OFF: '关闭'
    });
    return Blockly;
}

exports = addMsg;
