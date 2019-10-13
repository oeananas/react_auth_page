import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import {Link} from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="3"></MDBCol>
                    <MDBCol md="6">
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
                                <MDBBtn className="btn btn-primary" type="submit">Login</MDBBtn>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </MDBCol>
                    <MDBCol md="3"></MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}

export default Login;