/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TCS34725_CATEGORY: 'Color Sensor',
        GAMMA_ON: 'Turn',
        GAMMA_Off: 'Don"t turn',
        TCS34725_INIT: 'RGB | Init the TCS34725 color senser',
        TCS34725_READRGB: 'RGB | read TCS34725 color senser %1 %2 GAMMA'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TCS34725_CATEGORY: '颜色传感器',
        GAMMA_ON: '转GAMMA',
        GAMMA_OFF: '不转GAMMA',
        TCS34725_INIT: 'RGB | 初始化TCS34725颜色传感器',
        TCS34725_READRGB: 'RGB | 读取TCS34725颜色传感器 %1 %2'
    });
    return Blockly;
}

exports = addMsg;
