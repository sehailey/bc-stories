import React from 'react'

//----------------------------------------------//

const StorySubmittedView = ({password, hash}) => {
    return (
        <form>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-3 col-form-label">
                    Password:
                </label>
                <div className="col-sm-7">
                    <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="password"
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
                        readOnly
                        className="form-control-plaintext"
                        id="hash"
                        value={hash}
                    />
                </div>
            </div>
            <div className="form-group row">
                <div className="col">
                    Don't lose these or your data will be unable to be
                    decrypted.
                </div>
            </div>
        </form>
    )
}

//----------------------------------------------//

export default StorySubmittedView
