import React, { Component } from "react";
import { ReadStoryBranch } from "../components";
import axios from "axios";
import { decryptStory } from "./encrypt";
//----------------------------------------------//

const defaultState = {
  loading: true,
  retrieved: false,
  hash: "",
  password: "",
  firstName: "",
  lastName: "",
  dateOfEvent: null,
  eventDetails: ""
};

class ReadStoryContainer extends Component {
  constructor() {
    super();
    this.state = defaultState;
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleChange(event) {
    const id = event.target.id;
    this.setState({ [id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    //need to account for white space, capitalization, etc. later.
    const { hash, password } = this.state;

    try {
      axios.post("/api/stories/read/", { hash }).then(res => {
        console.log(res);
        if (res.status === 200) {
          const decryptedStory = decryptStory(res.data, password);

          this.setState({
            retrieved: true,
            story: decryptedStory
          });
        }
      });
    } catch (e) {
      console.log(hash);
      console.log(e);
    }
  }

  render() {
    return (
      <ReadStoryBranch
        handleSubmit={this.handleSubmit.bind(this)}
        handleChange={this.handleChange.bind(this)}
        {...this.state}
      />
    );
  }
}

//----------------------------------------------//

export default ReadStoryContainer;
