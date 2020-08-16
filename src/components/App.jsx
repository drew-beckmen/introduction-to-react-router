import React, { Fragment } from 'react'; 
import Navigation from './Navigation'; 
import Films from './Films'
import Show from './Show'
import Home from './Home'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 

class App extends React.Component {

    constructor() {
        super(); 
        this.baseURL = "https://ghibliapi.herokuapp.com/"
    }

    render() {
        return (
            <Router>
                <Fragment>
                    {/* Navigation Bar */}
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/films" render={() => <Films url={this.baseURL}/>} />
                        <Route exact path="/films/:id" component={Show} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App; 