import {encryptString} from '../encrypt'

const encryptStory = (story, hash) => {
    let encryptedStory = {}

    for (let prop in story) {
        if (story.hasOwnProperty(prop)) {
            encryptedStory[prop] = encryptString(story[prop], hash)
        }
    }

    return encryptedStory
}

export default encryptStory
