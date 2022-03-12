/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        META_ANALOGULTRASONIC_CATEGORY: 'Analog ultrasonic',
        META_ANALOGULTRASONIC_READ_DISTANCE: 'analogUltrasonic sensor pin TRIG %1 ECHO %2 read distance %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        META_ANALOGULTRASONIC_CATEGORY: '模拟超声波',
        META_ANALOGULTRASONIC_READ_DISTANCE: '读取模拟超声波模块 %1 距离（cm），量程 %2'
    });
    return Blockly;
}

exports = addMsg;
