import React, {Component} from 'react'
import axios from 'axios'

import {
    createHash,
    generatePassword,
    encryptStory,
    AddStoryBranch,
} from '../components'

// for testing
// import {testStory} from './encrypt'
//----------------------------------------------//

const defaultState = {
    loading: true,
    submitted: false,
    password: '',
    hash: '',
    firstName: '',
    lastName: '',
    dateOfEvent: new Date(),
    eventDetails: '',
}

class AddStoryContainer extends Component {
    constructor() {
        super()
        this.state = defaultState
    }
    componentDidMount() {
        this.setState({loading: false})
    }

    async handleSubmit(evt) {
        evt.preventDefault()
        const story = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dateOfEvent: String(this.state.dateOfEvent),
            eventDetails: this.state.eventDetails,
        }

        const password = generatePassword()
        console.log('Password', password)
        const encryptedStory = encryptStory(story, password)
        encryptedStory.hash = createHash(encryptedStory.eventDetails)

        try {
            await axios.post('/api/stories/', encryptedStory).then(res => {
                console.log(res.data)

                this.setState({
                    submitted: true,
                    password,
                    hash: encryptedStory.hash,
                })
            })
        } catch (e) {
            console.log(e)
            this.setState({error: e})
        }
    }

    handleDateChange(dateOfEvent) {
        this.setState({dateOfEvent})
    }

    handleTextChange(event) {
        const id = event.target.id

        this.setState({[id]: event.target.value})
    }

    render() {
        return (
            <AddStoryBranch
                handleSubmit={this.handleSubmit.bind(this)}
                handleTextChange={this.handleTextChange.bind(this)}
                handleDateChange={this.handleDateChange.bind(this)}
                {...this.state}
            />
        )
    }
}

//----------------------------------------------//

export default AddStoryContainer
