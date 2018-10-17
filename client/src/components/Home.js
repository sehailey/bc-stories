import React from 'react'

const Home = () => {
  return (
    <div>
      <h3>Welcome to Stories. </h3>
      <p>
        To submit a story on the "Add" page, enter your name and details. All of
        your data will be encrypted before being sent to the server using an
        automatically-generated password, which will be given to you, along with
        the SHA256 hash value of the encrypted story.
      </p>
      <p>
        When you're ready to retrieve your story, you will need the password and
        the hash value. Without these, the data are unable to be retrieved.
      </p>
    </div>
  )
}

export default Home
