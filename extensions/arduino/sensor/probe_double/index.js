const doubleProbe = formatMessage => ({
    name: formatMessage({
        id: 'doubleProbe.name',
        default: 'doubleProbe detection module'
    }),
    extensionId: 'doubleProbe',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/doubleProbe.png`,
    description: formatMessage({
        id: 'doubleProbe.description',
        default: 'doubleProbe sensor switch.'
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

module.exports = doubleProbe;
