const digitalUltrasonic2 = formatMessage => ({
    name: formatMessage({
        id: 'digitalUltrasonic.name',
        default: 'AnalogUltrasonic'
    }),
    extensionId: 'digitalUltrasonic2',
    version: '1.0.0',
    supportDevice: ['unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/digitalUltrasonic.png`,
    description: formatMessage({
        id: 'digitalUltrasonic.description',
        default: 'Standard digitalUltrasonic distance measurement module.'
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

module.exports = digitalUltrasonic2;
