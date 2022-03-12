/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const servo270 = formatMessage => ({
    name: formatMessage({
        id: 'servo270.name',
        default: '130 DC servo270 servo270'
    }),
    extensionId: 'servo270',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/Servo270.png`,
    description: formatMessage({
        id: 'servo270.description',
        default: 'SERVO270 module.',
        description: 'Description of SERVO270'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'www.ddmagic.com'
});

module.exports = servo270;
