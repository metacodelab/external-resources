const greenButton2 = formatMessage => ({
    name: formatMessage({
        id: 'greenButton.name',
        default: 'greenButton detection module'
    }),
    extensionId: 'greenButton2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/greenButton.png`,
    description: formatMessage({
        id: 'greenButton.description',
        default: 'greenButton sensor switch.'
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

module.exports = greenButton2;
