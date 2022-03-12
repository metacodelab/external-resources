const unoCore = formatMessage => ({
    name: 'UnoCore',
    deviceId: 'unoCore_arduinoUno',
    manufactor: 'D.D.Magic',
    leanMore: '',
    iconURL: 'asset/unoCore.png',
    description: formatMessage({
        id: 'unoCore.description',
        default: 'Description for the D.D.Magic unoCore device.'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/unoCore-illustration.svg',
    connectionSmallIconURL: 'asset/unoCore-small.svg',
    programMode: ['upload'],
    programLanguage: ['block','c','cpp'],
    tags: ['arduino', 'kit'],
    deviceExtensions: [],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: ' '
});

module.exports = unoCore;
