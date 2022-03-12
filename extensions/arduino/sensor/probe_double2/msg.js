/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DOUBLEPROBE_CATEGORY: 'double-probe patrol sensor',
        DOUBLEPROBE_READ_LEFT_STATE: 'White was detected by the left-probe patrol sensor in pin %1？',
        DOUBLEPROBE_READ_RIGHT_STATE: 'White was detected by the right-probe of double-probe patrol sensor in pin %1？',
        DOUBLEPROBE_READ_LEFT_VALUE: 'A state value of left-probe of double-probe patrol sensor in pin %1？',
        DOUBLEPROBE_READ_RIGHT_VALUE: 'A state value of right-probe patrol sensor in pin %1？'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DOUBLEPROBE_CATEGORY: '双探头寻线传感器',
        DOUBLEPROBE_READ_LEFT_STATE: '引脚 %1 双探头巡线传感器左侧探头检测到白色？',
        DOUBLEPROBE_READ_RIGHT_STATE: '引脚 %1 双探头巡线传感器右侧探头检测到白色？',
        DOUBLEPROBE_READ_LEFT_VALUE: '引脚 %1 双探头巡线传感器左侧探头的状态值',
        DOUBLEPROBE_READ_RIGHT_VALUE: '引脚 %1 双探头巡线传感器右侧探头的状态值'
    });
    return Blockly;
}

exports = addMsg;
