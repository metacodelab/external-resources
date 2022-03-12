/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const fan = formatMessage => ({
    name: formatMessage({
        id: 'fan.name',
        default: '130 DC motor fan'
    }),
    extensionId: 'fan',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/fan.png`,
    description: formatMessage({
        id: 'fan.description',
        default: 'Fan module.',
        description: 'Description of Fan'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['actuator'],
    helpLink: 'www.ddmagic.com'
});

module.exports = fan;
