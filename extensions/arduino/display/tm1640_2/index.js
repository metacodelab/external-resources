const tm1640_2 = formatMessage => ({
    name: formatMessage({
        id: 'tm1640.name',
        default: '8x16 LED Matrix'
    }),
    extensionId: 'tm1640_2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/tm1640.png`,
    description: formatMessage({
        id: 'tm1640.description',
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

module.exports = tm1640_2;
