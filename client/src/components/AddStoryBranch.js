import React from 'react'
import {LoadingView, AddStoryForm, StorySubmittedView} from '../components'

const AddStoryBranch = props => {
    const {loading, submitted, error, password, hash} = props

    if (loading) return <LoadingView />
    if (submitted) return <StorySubmittedView password={password} hash={hash} />
    if (error) return <div>I'm sorry, please try again.</div>
    return <AddStoryForm {...props} />
}

export default AddStoryBranch

// 5{!79TCyUAG
// l74uCkfN5dtCf8RT4CFeyMcSpEuUSwYQNx+mB9s1IME=
