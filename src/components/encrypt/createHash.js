const crypto = require('crypto')

export default plainText =>
    crypto
        .createHash('sha256')
        .update(plainText)
        .digest('base64')
