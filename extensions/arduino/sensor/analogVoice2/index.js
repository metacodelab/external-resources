const analogVoice2 = formatMessage => ({
    name: formatMessage({
        id: 'analogVoice.name',
        default: '5800B light sensor'
    }),
    extensionId: 'analogVoice2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/analogVoice.png`,
    description: formatMessage({
        id: 'analogVoice.description',
        default: 'A light sensor based on a 58,900 B environmentally sensitive photodiode can be used to detect the intensity of the ambient light.It is usually used to produce interactive works that produce special effects with varying light intensity.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'www.baidu.com'
});

module.exports = analogVoice2;
