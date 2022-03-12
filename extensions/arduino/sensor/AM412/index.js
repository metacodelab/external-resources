const AM412 = formatMessage => ({
    name: formatMessage({
        id: 'AM412.name',
        default: '热释电红外运动传感器'
    }),
    extensionId: 'AM412',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/AM412.png`,
    description: formatMessage({
        id: 'AM412.description',
        default: 'AM412 sensor module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['sensor'],
    helpLink: 'www.ddmagic.com'
});

module.exports = AM412;
