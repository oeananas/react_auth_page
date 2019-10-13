import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import {Link} from 'react-router-dom'

class Register extends React.Component {
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="3"></MDBCol>
                    <MDBCol md="6">
                        <form>
                            <h1 className="text-center mb-4">Sign up</h1>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                Your name
                            </label>
                            <input
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                            />
                            <br/>
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="defaultFormRegisterEmailEx"
                                className="form-control"
                            />
                            <br/>
                            <label
                                htmlFor="defaultFormRegisterPasswordEx"
                                className="grey-text"
                            >
                                Your password
                            </label>
                            <input
                                type="password"
                                id="defaultFormRegisterPasswordEx"
                                className="form-control"
                            />
                            <br/>
                            <label
                                htmlFor="defaultFormRegisterConfirmEx"
                                className="grey-text"
                            >
                                Confirm password
                            </label>
                            <input
                                type="password"
                                id="defaultFormRegisterConfirmEx"
                                className="form-control"
                            />
                            <div className="text-center mt-4">
                                <MDBBtn className="btn btn-primary" type="submit">Register</MDBBtn>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            <Link to='/'>Sign In</Link>
                        </div>
                    </MDBCol>
                    <MDBCol md="3"></MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}

export default Register;