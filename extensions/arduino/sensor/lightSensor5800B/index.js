const lightSensor5800B = formatMessage => ({
    name: formatMessage({
        id: 'lightSensor5800B.name',
        default: '5800B light sensor'
    }),
    extensionId: 'lightSensor5800B',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/lightSensor5800B.png`,
    description: formatMessage({
        id: 'lightSensor5800B.description',
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

module.exports = lightSensor5800B;
