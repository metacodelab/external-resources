/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        METABUZZER_CATEGORY: 'Passive Buzzer',
        METABUZZER_INIT: 'init passive buzzer pin %1',
        METABUZZER_PLAYTONEFORBEAT: 'Buzzer %1 play tone %2 for %3 beat',
        METABUZZER_SETTEMPO: 'Buzzer %1 set tempo to (bpm) %2',
        METABUZZER_PLAYRINGTONE: 'Buzzer %1 play ringtone %2',
        METABUZZER_CONNECTION: 'connection',
        METABUZZER_DISCONNECTION: 'disconnet',
        METABUZZER_DIDI: 'button pushed',
        METABUZZER_MODE1: 'mode1',
        METABUZZER_MODE2: 'mode2',
        METABUZZER_MODE3: 'mode3',
        METABUZZER_SURPRISE: 'surprise',
        METABUZZER_OHOOH: 'OhOoh',
        METABUZZER_OHOOH2: 'OhOoh2',
        METABUZZER_CUDDLY: 'cuddly',
        METABUZZER_SLEEPING: 'sleeping',
        METABUZZER_HAPPY: 'happy',
        METABUZZER_SUPERHAPPY: 'super happy',
        METABUZZER_HAPPYSHORT: 'happy short',
        METABUZZER_SAD: 'sad',
        METABUZZER_CONFUSED: 'confused',
        METABUZZER_FART1: 'fart1',
        METABUZZER_FART2: 'fart2',
        METABUZZER_FART3: 'fart3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        METABUZZER_CATEGORY: '无源蜂鸣器',
        METABUZZER_INIT: '初始化无源蜂鸣器引脚 %1',
        METABUZZER_PLAYTONEFORBEAT: '蜂鸣器 %1 播放音调 %2 持续 %3 节拍',
        METABUZZER_SETTEMPO: '蜂鸣器 %1 设置节奏为 (bpm) %2',
        METABUZZER_PLAYRINGTONE: '蜂鸣器 %1 播放铃声 %2',
        METABUZZER_CONNECTION: '连接',
        METABUZZER_DISCONNECTION: '断开',
        METABUZZER_DIDI: '按键按下',
        METABUZZER_MODE1: '模式1',
        METABUZZER_MODE2: '模式2',
        METABUZZER_MODE3: '模式3',
        METABUZZER_SURPRISE: '惊讶',
        METABUZZER_OHOOH: '哦哦',
        METABUZZER_OHOOH2: '哦哦2',
        METABUZZER_CUDDLY: '可爱',
        METABUZZER_SLEEPING: '正在睡觉',
        METABUZZER_HAPPY: '开心',
        METABUZZER_SUPERHAPPY: '非常开心',
        METABUZZER_HAPPYSHORT: '开心短',
        METABUZZER_SAD: '难过',
        METABUZZER_CONFUSED: '困惑',
        METABUZZER_FART1: '放屁1',
        METABUZZER_FART2: '放屁2',
        METABUZZER_FART3: '放屁3'
    });
    return Blockly;
}

exports = addMsg;
