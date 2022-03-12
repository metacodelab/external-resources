const conductorDetection2 = formatMessage => ({
    name: formatMessage({
        id: 'conductorDetection.name',
        default: 'The conductor detection module'
    }),
    extensionId: 'conductorDetection2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/conductorDetection.png`,
    description: formatMessage({
        id: 'conductorDetection.description',
        default: 'A conductor detection module is an electronic module that can be used to detect whether an object is conductive.The maximum detection object is 10 meu, which can detect both copper, iron, silver and other metal good conductors, but also can detect the human body, fruits, plants, salt water and other bad conductors.'
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

module.exports = conductorDetection2;
