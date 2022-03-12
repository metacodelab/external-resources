/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const pwmMotor2 = formatMessage => ({
    name: formatMessage({
        id: 'pwmMotor.name',
        default: 'pwmMotor'
    }),
    extensionId: 'pwmMotor2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
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

module.exports = pwmMotor2;
