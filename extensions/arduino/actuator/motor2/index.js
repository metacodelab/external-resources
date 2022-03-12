/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const motor2 = formatMessage => ({
    name: formatMessage({
        id: 'motor.name',
        default: '130 DC motor motor'
    }),
    extensionId: 'motor2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/motor.png`,
    description: formatMessage({
        id: 'motor.description',
        default: 'MOTOR module.',
        description: 'Description of MOTOR'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['actuator'],
    helpLink: 'www.ddmagic.com'
});

module.exports = motor2;