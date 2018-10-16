import {decryptString} from '../encrypt'

const decryptStory = (story, password) => {
    let decryptedStory = {}

    for (let prop in story) {
        if (story.hasOwnProperty(prop)) {
            decryptedStory[prop] = decryptString(story[prop], password)
        }
    }

    return decryptedStory
}

export default decryptStory
