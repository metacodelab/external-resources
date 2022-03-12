const metaBuzzer2 = formatMessage => ({
    name: formatMessage({
        id: 'metaBuzzer.name',
        default: 'Passive Buzzer'
    }),
    extensionId: 'metaBuzzer2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/metaBuzzer.png`,
    description: formatMessage({
        id: 'metaBuzzer.description',
        default: 'Unlike the active buzzer, the passive buzzer can be used' +
            ' to make different tones of sound and play some ringtones.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'www.ddmagic.com'
});

module.exports = metaBuzzer2;
