const joyStick2 = formatMessage => ({
    name: formatMessage({
        id: 'joyStick.name',
        default: 'joyStick module'
    }),
    extensionId: 'joyStick2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/joyStick.png`,
    description: formatMessage({
        id: 'joyStick.description',
        default: 'a joyStick module.'
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

module.exports = joyStick2;
