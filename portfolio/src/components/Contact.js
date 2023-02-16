//contact form with fields for 
//name, 
//email address, and
// a message

import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { useForm, ValidationError } from '@formspree/react';
//import Navigation from './components/Navigation';
require('dotenv').config();

function Contact() {
    const [state, handleSubmit] = useForm("contactForm");

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    //const handleSubmit = (e) => {
    //    e.preventDefault();
    // if (!errorMessage) {
        // console.log('Submit Form', formState);
        // }
    //};

    // function refreshPage() {
    //     window.location.reload(true);
    // }


    if (state.succeeded) {
        return (
            <div>
        <p>Thanks for joining!</p>;
        <>button className="button is middium is-primary is half m-6" onClick={()=> window.open("#contact")}>Back to About</button>
        {/* This form button is not working. It was supposed to refresh the page so that a new page can be submitted but now it will just take you back to the About me*/}
        </div>
        );
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    return (
        <div>
            <p className="content is -medium">Contact Me</p>
            <hr />
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="field">
            <label htmlFor="email">Email address:</label>
            <textarea name="email" rows="1" defaultValue={email} onBlur={handleChange} />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button className="button is middium is-primary is half m-6" type="submit" disabled={state.submitting}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
