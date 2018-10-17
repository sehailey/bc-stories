import React from 'react'

//----------------------------------------------//

const StoryRetrievedView = props => {
    const {firstName, lastName, dateOfEvent, eventDetails} = props.story
    console.log(props)
    return (
        <div className="mt-5 mb-5">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input
                            readOnly
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={firstName}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <input
                            readOnly
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={lastName}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="eventDetails" className="col-form-label">
                        Event Details
                    </label>

                    <textarea
                        readOnly
                        className="form-control"
                        type="text"
                        rows="10"
                        id="eventDetails"
                        value={eventDetails}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dateOfEvent" className="col-form-label">
                        Date of Event
                    </label>

                    <div className="form-group ">
                        <input
                            readOnly
                            type="text"
                            className="form-control"
                            id="dateOfEvent"
                            value={dateOfEvent}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

//----------------------------------------------//

export default StoryRetrievedView
