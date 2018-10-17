const crypto = require('crypto')

const ALGORITHM_NAME = 'aes-128-gcm'
const ALGORITHM_NONCE_SIZE = 12
const ALGORITHM_KEY_SIZE = 16
const PBKDF2_NAME = 'sha256'
const PBKDF2_SALT_SIZE = 16
const PBKDF2_ITERATIONS = 32767

/*
    * generate password (needs hash)
    * generate salt (random)
    * generate key (needs salt and password) (only once!)
    * encrypt text (needs salt, nonce, and key)
    * store encrypted text w/ hash on unencrypted text (this seems bad,
        even though there's some randomness in the key generation)
    * user has key and 'password'
    * database has password and story
    * user enters password and receives encrypted text, enters key to decrypt

*/

function encryptString(plaintext, password) {
    // Generate a 128-bit salt using a CSPRNG.
    let salt = crypto.randomBytes(PBKDF2_SALT_SIZE)

    // Derive a key using PBKDF2.
    let key = crypto.pbkdf2Sync(
        new Buffer(password, 'utf8'),
        salt,
        PBKDF2_ITERATIONS,
        ALGORITHM_KEY_SIZE,
        PBKDF2_NAME
    )

    // Encrypt and prepend salt.
    let ciphertextAndNonceAndSalt = Buffer.concat([
        salt,
        encrypt(new Buffer(plaintext, 'utf8'), key),
    ])

    // Return as base64 string.
    return ciphertextAndNonceAndSalt.toString('base64')
}

function encrypt(plaintext, key) {
    // Generate a 96-bit nonce using a CSPRNG.
    let nonce = crypto.randomBytes(ALGORITHM_NONCE_SIZE)

    // Create the cipher instance.
    let cipher = crypto.createCipheriv(ALGORITHM_NAME, key, nonce)

    // Encrypt and prepend nonce.
    let ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()])

    return Buffer.concat([nonce, ciphertext, cipher.getAuthTag()])
}

export default encryptString
