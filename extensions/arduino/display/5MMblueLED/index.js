/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const blueLED = formatMessage => ({
    name: formatMessage({
        id: 'blueLED.name',
        default: '5MM Blue LED module'
    }),
    extensionId: 'blueLED',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/blueLED.png`,
    description: formatMessage({
        id: 'blueLED.description',
        default: 'Blue led module.',
        description: 'Description of Blue LED'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['display'],
    helpLink: 'www.ddmagic.com'
});

module.exports = blueLED;
