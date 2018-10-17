function generateSalt() {
    // Generate a 128-bit salt using a CSPRNG.
    return crypto.randomBytes(PBKDF2_SALT_SIZE)
}
export default generateSalt
