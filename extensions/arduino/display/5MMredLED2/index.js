/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const redLED2 = formatMessage => ({
    name: formatMessage({
        id: 'redLED.name',
        default: '5MM Red LED module'
    }),
    extensionId: 'redLED2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/redLED.png`,
    description: formatMessage({
        id: 'redLED.description',
        default: 'Red led module.',
        description: 'Description of red LED'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['display'],
    helpLink: 'www.ddmagic.com'
});

module.exports = redLED2;
