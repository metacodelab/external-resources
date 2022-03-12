/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const greenLED = formatMessage => ({
    name: formatMessage({
        id: 'greenLED.name',
        default: '5MM Green LED module'
    }),
    extensionId: 'greenLED',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/greenLED.png`,
    description: formatMessage({
        id: 'greenLED.description',
        default: 'Green led module.',
        description: 'Description of Green LED'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['display'],
    helpLink: 'www.ddmagic.com'
});

module.exports = greenLED;
