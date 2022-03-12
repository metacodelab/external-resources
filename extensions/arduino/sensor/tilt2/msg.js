/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TILT_CATEGORY: 'Tilt detection module',
        TILT_READ_STATE: 'A tilt was detected in pin %1？',
        TILT_READ_VALUE: 'A state value of tilt module in pin %1？'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TILT_CATEGORY: '倾斜检测模块',
        TILT_READ_STATE: '引脚 %1 检测到倾斜？',
        TILT_READ_VALUE: '引脚 %1 倾斜检测模块的状态值'
    });
    return Blockly;
}

exports = addMsg;
