import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {AddStoryContainer, ReadStoryContainer, Home} from './components'

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/add" component={AddStoryContainer} />
                    <Route path="/read" component={ReadStoryContainer} />
                    <Route path="/home" component={Home} />
                    <Route path="*" component={Home} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Routes)
