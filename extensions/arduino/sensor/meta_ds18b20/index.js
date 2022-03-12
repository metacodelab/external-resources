const meta_ds18b20 = formatMessage => ({
    name: formatMessage({
        id: 'meta_ds18b20.name',
        default: 'DS18B20 Sensor'
    }),
    extensionId: 'meta_ds18b20',
    version: '1.0.0',
    supportDevice: ['unoCore'],
    author: 'MakerStudio',
    iconURL: `asset/ds18b20.png`,
    description: formatMessage({
        id: 'meta_ds18b20.description',
        default: 'Single bus digital temperature sensor based on DS18B20.'
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

module.exports = meta_ds18b20;
