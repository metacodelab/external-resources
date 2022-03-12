/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MAGNETICSENSOR_CATEGORY: 'magnetic Sensor',
        MAGNETICSENSOR_READ_STATE: 'magnetic field was detected around pin %1？',
        MAGNETICSENSOR_READ_VALUE: 'The state value of magnetic Sensor in pin %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MAGNETICSENSOR_CATEGORY: '磁感应传感器',
        MAGNETICSENSOR_READ_STATE: '引脚%1检测到磁场？',
        MAGNETICSENSOR_READ_VALUE: '引脚%1磁感应传感器的状态值'
    });
    return Blockly;
}

exports = addMsg;
