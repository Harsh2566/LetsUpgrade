/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { register } from '../actions';
import { useToasts } from 'react-toast-notifications';
import { Redirect } from 'react-router-dom';
import onlyGuest from '../components/hoc/onlyGuest';
// import { withRouter } from 'react-router-dom';

const Register = (props) => {

    const [ redirect, setRedirect ] = useState(false)
    const { addToast } = useToasts()

    const registerUser = (userData) => {

        
        // props.history.push('/')
        
        register(userData)
        .then(
            _ => setRedirect(true),
            errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true ,autoDismissTimeout: 3000 }))
    }

    if (redirect) { return <Redirect to="/" />}

    return (
        <div className="auth-page">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    
                    <div className="box">
                        <h3 className="title has-text-black">
                            Register Form
                        </h3>
                        <RegisterForm onRegister={registerUser} />
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default withRouter(Register)
export default onlyGuest(Register)