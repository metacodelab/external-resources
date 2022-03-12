const dht11 = formatMessage => ({
    name: formatMessage({
        id: 'dht11.name',
        default: 'DHT Sensor'
    }),
    extensionId: 'dht11',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/dth11.png`,
    description: formatMessage({
        id: 'dht11.description',
        default: 'DHT Temperature and humidity sensor module.'
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

module.exports = dht11;
