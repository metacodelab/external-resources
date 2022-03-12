/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SERVO180_CATEGORY: 'servo of 180',
        SERVO180_SET_STATE_0: 'set pin %1 180 degree servo at %2 degrees, centered at 0 degrees',
        SERVO180_SET_STATE_90: 'set pin %1 180 degree servo at %2 degrees, centered at 90 degrees'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SERVO180_CATEGORY: '180度舵机',
        SERVO180_SET_STATE_0: '设置引脚 %1 180度伺服舵机为 %2 度，以0度为中心',
        SERVO180_SET_STATE_90: '设置引脚 %1 180度伺服舵机为 %2 度，以90度为中心'
    });
    return Blockly;
}

exports = addMsg;
