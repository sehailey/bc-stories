import React from 'react'
import '../static/Calendar.css'
import '../static/Clock.css'
import DateTimePicker from 'react-datetime-picker/'

//----------------------------------------------//

const StoryForm = props => {
  const { firstName, lastName, dateOfEvent, eventDetails } = props

  return (
    <div className="mt-5 mb-5">
      <form onSubmit={props.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              onChange={props.handleTextChange}
              value={firstName}
            />
          </div>

          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              onChange={props.handleTextChange}
              value={lastName}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="eventDetails" className="col-form-label">
            Event Details
          </label>

          <textarea
            className="form-control"
            type="text"
            rows="5"
            id="eventDetails"
            onChange={props.handleTextChange}
            value={eventDetails}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfEvent" className="col-form-label">
            Date of Event
          </label>

          <DateTimePicker
            className="mb-4 form-control"
            id="dateOfEvent"
            onChange={props.handleDateChange}
            value={dateOfEvent}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

//----------------------------------------------//

export default StoryForm
