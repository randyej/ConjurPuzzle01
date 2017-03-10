
class Base64Util {

  static encode(stringToEncode /*:string*/) {
    const buffer = Buffer.from(stringToEncode, 'utf8');
    const encoded = buffer.toString('base64');
    return encoded;
  }

  static decode(stringToDecode /*:string*/) {
    const buffer = Buffer.from(stringToDecode, 'base64');
    //const decoded = buffer.toString('utf8');
    const decoded = buffer.toString('ascii');
    return decoded;
  }

}

module.exports = Base64Util;
