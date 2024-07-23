import UAParser from 'ua-parser-js';

export function getClientIp(req) {
    const forwarded = req.headers['x-forwarded-for'];

    let ipAddress = forwarded
        ? forwarded.split(/, /)[0]
        : req.connection.remoteAddress;

    return ipAddress.startsWith('::ffff:') ? ipAddress.split('::ffff:')[1] : ipAddress;
}

export function getClientDevice(req) {
    const parser = new UAParser(req.headers['user-agent']);
    return parser.getResult().device.type || 'desktop';
}