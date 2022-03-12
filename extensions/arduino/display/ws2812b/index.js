const ws2812b = formatMessage => ({
    name: formatMessage({
        id: 'ws2812b.name',
        default: '8x16 LED Matrix'
    }),
    extensionId: 'ws2812b',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/ws2812b.png`,
    description: formatMessage({
        id: 'ws2812b.description',
        default: 'LED Matrix module based on Tm1640.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'www.ddmagic.com'
});

module.exports = ws2812b;
