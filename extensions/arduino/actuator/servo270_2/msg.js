/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SERVO270_CATEGORY: 'servo of 270',
        SERVO270_SET_STATE_0: 'set pin %1 270 degree servo at %2 degrees, centered at 0 degrees',
        SERVO270_SET_STATE_135: 'set pin %1 270 degree servo at %2 degrees, centered at 135 degrees'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SERVO270_CATEGORY: '270度舵机',
        SERVO270_SET_STATE_0: '设置引脚 %1 270度伺服舵机为 %2 度，以0度为中心',
        SERVO270_SET_STATE_135: '设置引脚 %1 270度伺服舵机为 %2 度，以135度为中心'
    });
    return Blockly;
}

exports = addMsg;
