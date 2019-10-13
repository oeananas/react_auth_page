import React from "react";
import {Route, Switch} from 'react-router-dom'
import Login from "./Login";
import Register from "./Register";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/signup' component={Register} />
                </Switch>
            </div>
        );
    }
}

export default App;