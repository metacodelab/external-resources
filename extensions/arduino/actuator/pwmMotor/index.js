/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const pwmMotor = formatMessage => ({
    name: formatMessage({
        id: 'pwmMotor.name',
        default: '130 DC pwmMotor'
    }),
    extensionId: 'pwmMotor',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/pwmMotor.png`,
    description: formatMessage({
        id: 'pwmMotor.description',
        default: 'pwmMotor module.',
        description: 'Description of pwmMotor'
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

module.exports = pwmMotor;
