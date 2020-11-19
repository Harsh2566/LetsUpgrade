/* eslint no-useless-escape: 0 */

import React from 'react';
import { useForm } from 'react-hook-form';
import { sameAs } from '../../helpers/validators';


const RegisterForm = (props) => {

    const { register, handleSubmit, errors, getValues } = useForm()

    return (
        <form onSubmit={handleSubmit(props.onRegister)}>
            <div className="field">
                <div className="control">
                    <input ref={register({required: true, minLength: 5})}
                    name="firstName"
                    className="input is-medium"
                    type="text"
                    placeholder="First Name" />
                    { errors.firstName && 
                    <div className="form-error">
                        { errors.firstName.type === 'required' && <span className="help is-danger">First Name is required</span> }
                        { errors.firstName.type === 'minLength' && <span className="help is-danger">Minimum length is 5 characters</span> }
                    </div>
                    }
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input ref={register({required: true, minLength: 5})}
                    name="lastName"
                    className="input is-medium"
                    type="text"
                    placeholder="Last Name" />
                    { errors.lastName && 
                    <div className="form-error">
                        { errors.lastName.type === 'required' && <span className="help is-danger">Last Name is required</span> }
                        { errors.lastName.type === 'minLength' && <span className="help is-danger">Minimum length is 5 characters</span> }
                    </div>
                    }
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input ref={register({required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                    name="email"
                    className="input is-medium"
                    type="email"
                    placeholder="Your Email"
                    autoComplete="email" />
                    { errors.email && 
                    <div className="form-error">
                        { errors.email.type === 'required' && <span className="help is-danger">Email is required</span> }
                        { errors.email.type === 'pattern' && <span className="help is-danger">Email address is not valid</span> }
                    </div>
                    }
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input ref={register({required: true, minLength: 6})}
                    name="password"
                    className="input is-medium"
                    type="password"
                    placeholder="Your Password"
                    autoComplete="current-password" />
                    { errors.password &&
                    <div className="form-error">
                        { errors.password.type === 'required' && <span className="help is-danger">Password is required</span> }
                        { errors.password.type === 'minLength' && <span className="help is-danger">Minimum length is 6 characters</span> }
                    </div>
                    }
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input ref={register({required: true, minLength: 6, validate: {sameAs: sameAs(getValues, 'password')}})}
                    name="passwordConfirmation"
                    className="input is-medium"
                    type="password"
                    placeholder="Repeat Password"
                    autoComplete="current-password" />
                    { errors.passwordConfirmation &&
                    <div className="form-error">
                        { errors.passwordConfirmation.type === 'required' && <span className="help is-danger">Password confirmation is required</span> }
                        { errors.passwordConfirmation.type === 'minLength' && <span className="help is-danger">Minimum length is 6 characters</span> }
                        { errors.passwordConfirmation.type === 'sameAs' && <span className="help is-danger">Password is not same</span> }
                    </div>
                    }
                </div>
            </div>
            <button type="submit" className="button is-block is-info is-medium is-fullwidth">
                Register
            </button>
        </form>
    )
}

export default RegisterForm