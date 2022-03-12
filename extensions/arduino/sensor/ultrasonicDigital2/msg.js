/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DIGITALULTRASONIC_CATEGORY: 'Analog ultrasonic',
        DIGITALULTRASONIC_READ_DISTANCE: 'Read the distance of the digital ultrasonic module %1 (cm)',
        DIGITALULTRASONIC_READ_DISTANCETEMP: 'Read digital ultrasonic module %1 distance (cm), ambient temperature calibration %2 ℃'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DIGITALULTRASONIC_CATEGORY: '数字超声波',
        DIGITALULTRASONIC_READ_DISTANCE: '读取数字超声波模块 %1 距离（cm）',
        DIGITALULTRASONIC_READ_DISTANCETEMP: '读取数字超声波模块 %1 距离（cm），环境温度校准 %2 ℃'
    });
    return Blockly;
}

exports = addMsg;
