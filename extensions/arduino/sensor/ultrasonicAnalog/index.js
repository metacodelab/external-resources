const meta_analogUltrasonic = formatMessage => ({
    name: formatMessage({
        id: 'meta_analogUltrasonic.name',
        default: 'AnalogUltrasonic'
    }),
    extensionId: 'meta_analogUltrasonic',
    version: '1.0.0',
    supportDevice: ['unoCore', 'unoStart'],
    author: 'MakerStudio',
    iconURL: `asset/meta_analogUltrasonic.png`,
    description: formatMessage({
        id: 'meta_analogUltrasonic.description',
        default: 'Standard meta_analogUltrasonic distance measurement module.'
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

module.exports = meta_analogUltrasonic;
