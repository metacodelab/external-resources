const LM35_2 = formatMessage => ({
    name: formatMessage({
        id: 'LM35.name',
        default: 'LM35线性温度传感器'
    }),
    extensionId: 'LM35_2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/LM35.png`,
    description: formatMessage({
        id: 'LM35.description',
        default: 'LM35 linear temperature sensor module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'www.ddmagic.com'
});

module.exports = LM35_2;
