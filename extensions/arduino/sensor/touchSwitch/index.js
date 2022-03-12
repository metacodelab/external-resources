const touchSwitch = formatMessage => ({
    name: formatMessage({
        id: 'touchSwitch.name',
        default: 'touchSwitch detection module'
    }),
    extensionId: 'touchSwitch',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/touchSwitch.png`,
    description: formatMessage({
        id: 'touchSwitch.description',
        default: 'touchSwitch sensor switch.'
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

module.exports = touchSwitch;
