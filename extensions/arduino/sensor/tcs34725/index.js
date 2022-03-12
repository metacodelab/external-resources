const tcs34725 = formatMessage => ({
    name: formatMessage({
        id: 'tcs34725.name',
        default: 'AnalogUltrasonic'
    }),
    extensionId: 'tcs34725',
    version: '1.0.0',
    supportDevice: ['unoCore', 'unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/tcs34725.png`,
    description: formatMessage({
        id: 'tcs34725.description',
        default: 'Standard tcs34725 distance measurement module.'
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

module.exports = tcs34725;
