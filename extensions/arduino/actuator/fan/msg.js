/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        FAN_CATEGORY: 'DC fan',
        FAN_SET_FAN_STATE: 'interface %1 %2 fan',
        FAN_SET_FAN_STATE2: 'set interface %1 fan speed as %2',
        FAN_ON: 'OPEN',
        FAN_OFF: 'CLOSE'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        FAN_CATEGORY: '直流风扇',
        FAN_SET_FAN_STATE: '接口 %1 %2 风扇',
        FAN_SET_FAN_STATE2: '设置接口 %1 风扇的速度为 %2',
        FAN_ON: '打开',
        FAN_OFF: '关闭'
    });
    return Blockly;
}

exports = addMsg;
