import React from 'react'

//----------------------------------------------//
const Status = props => {
  const { notFound } = props

  if (notFound) return <div className="col-sm-3"> Story not found.</div>
  return <div />
}
const ReadStoryForm = props => {
  const {
    firstName,
    lastName,
    password,
    hash,
    handleChange,
    handleSubmit,
    notFound
  } = props

  return (
    <div className="mt-3 mb-5">
      <h3> Retrieve A Story</h3>
      <p>Enter your name, secret key, and your hash below.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="firstName" className="col-sm-3 col-form-label">
            First Name:
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={firstName}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-3 col-form-label">
            Last Name:
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={lastName}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="secretKey" className="col-sm-3 col-form-label">
            Secret Key:
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={password}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="hash" className="col-sm-3 col-form-label">
            Hash:
          </label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control"
              id="hash"
              placeholder="Hash"
              onChange={handleChange}
              value={hash}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-3">
            <button className="btn btn-dark " type="submit">
              Submit
            </button>
          </div>
          <Status notFound={notFound} />
        </div>
      </form>
    </div>
  )
}

export default ReadStoryForm
//----------------------------------------------//
