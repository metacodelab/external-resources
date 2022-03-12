const whiteButton = formatMessage => ({
    name: formatMessage({
        id: 'whiteButton.name',
        default: 'whiteButton detection module'
    }),
    extensionId: 'whiteButton',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/whiteButton.png`,
    description: formatMessage({
        id: 'whiteButton.description',
        default: 'whiteButton sensor switch.'
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

module.exports = whiteButton;
