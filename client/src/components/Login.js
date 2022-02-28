import '../App.css';
import React, { useState } from 'react';

function Login() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        console.log('submitted');
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            console.log('submitted time');
        }, 4000)
    }

  return (
    <div className="Login-form">
        {submitting &&
            <div>Submtting Form...</div>
            }
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                <p>Name</p>
                <input name="name" />
                </label>
            </fieldset>
            
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Login;
