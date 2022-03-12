const blueButton = formatMessage => ({
    name: formatMessage({
        id: 'blueButton.name',
        default: 'blueButton detection module'
    }),
    extensionId: 'blueButton',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/blueButton.png`,
    description: formatMessage({
        id: 'blueButton.description',
        default: 'blueButton sensor switch.'
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

module.exports = blueButton;
