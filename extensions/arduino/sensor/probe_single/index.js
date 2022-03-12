const singleProbe = formatMessage => ({
    name: formatMessage({
        id: 'singleProbe.name',
        default: 'singleProbe detection module'
    }),
    extensionId: 'singleProbe',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/singleProbe.png`,
    description: formatMessage({
        id: 'singleProbe.description',
        default: 'singleProbe sensor switch.'
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

module.exports = singleProbe;
