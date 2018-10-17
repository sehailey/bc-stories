const MIN = 10
const MAX = 20
const ALL_CHARS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}:,.<>?'

const generatePassword = () => {
    let key = ''
    const passwordLength = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    for (let i = 0; i < passwordLength; i++) {
        key += ALL_CHARS.charAt(Math.floor(Math.random() * ALL_CHARS.length))
    }
    return key
}

export default generatePassword
