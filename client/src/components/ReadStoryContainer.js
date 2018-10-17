import React, { Component } from 'react'
import { ReadStoryBranch } from '../components'
import axios from 'axios'
import { decryptString, decryptStory } from './encrypt'
//----------------------------------------------//

const defaultState = {
  loading: true,
  notFound: false,
  retrieved: false,
  hash: '',
  password: '',
  firstName: '',
  lastName: '',
  dateOfEvent: null,
  eventDetails: ''
}

class ReadStoryContainer extends Component {
  constructor() {
    super()
    this.state = defaultState
  }

  componentDidMount() {
    this.setState({ loading: false })
  }

  handleChange(event) {
    const id = event.target.id
    this.setState({ [id]: event.target.value })
  }

  verifyStory(data, password) {
    const { firstName } = this.state
    const encryptedFirstName = data.firstName
    const decryptedFirstName = decryptString(encryptedFirstName, password)
    console.log(firstName, encryptedFirstName, decryptedFirstName)
    console.log(decryptedFirstName !== firstName)
    if (decryptedFirstName !== firstName) {
      data = null
      this.setState({ notFound: true })
    } else {
      const decryptedStory = decryptStory(data, password)
      this.setState({
        retrieved: true,
        story: decryptedStory
      })
    }
  }

  async handleSubmit(event) {
    event.preventDefault()
    await this.setState({ notFound: false, retrieved: false })

    //need to account for white space, capitalization, etc. later.
    const { hash, password } = this.state
    try {
      const { data } = await axios.post('/api/stories/read/', { hash })
      this.verifyStory(data, password)
    } catch (e) {
      console.log('error in component', e)
      this.setState({ notFound: true })
    }
  }

  render() {
    return (
      <ReadStoryBranch
        handleSubmit={this.handleSubmit.bind(this)}
        handleChange={this.handleChange.bind(this)}
        {...this.state}
      />
    )
  }
}

//----------------------------------------------//

export default ReadStoryContainer
