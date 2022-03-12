/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const servo180_2 = formatMessage => ({
    name: formatMessage({
        id: 'servo180.name',
        default: '130 DC servo180 servo180'
    }),
    extensionId: 'servo180_2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/Servo180.png`,
    description: formatMessage({
        id: 'servo180.description',
        default: 'SERVO180 module.',
        description: 'Description of SERVO180'
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

module.exports = servo180_2;
