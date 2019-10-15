import React from 'react';
import {Link} from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <form>
                            <h1 className="text-center mb-4">Sign in</h1>
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="defaultFormLoginEmailEx"
                                className="form-control"
                            />
                            <br/>
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                Your password
                            </label>
                            <input
                                type="password"
                                id="defaultFormLoginPasswordEx"
                                className="form-control"
                            />
                            <div className="text-center mt-4">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        );
    };
}

export default Login;