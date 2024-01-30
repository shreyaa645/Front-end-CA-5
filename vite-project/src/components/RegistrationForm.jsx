import { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const [alerts, setAlerts] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const [focusState, setFocusState] = useState({
        name: false,
        email: false,
        password: false,
        repeatPassword: false,
    });

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFocus = (name) => {
        setFocusState((prevFocusState) => ({ ...prevFocusState, [name]: true }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAlerts = {};

        // Name Validation
        if (formData.name.length < 3 || formData.name.length > 30) {
            newAlerts.name = 'Name should be between 3 and 30 characters!!!';
        } else {
            newAlerts.name = '';
        }

        // Email Validation
        if (!formData.email.includes('@')) {
            newAlerts.email = 'Please enter a valid email address!!!';
        } else {
            newAlerts.email = '';
        }

        // Password Validation
        if (formData.password.length < 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            newAlerts.password = 'Password should be at least 10 characters with at least one special character.';
        } else {
            newAlerts.password = '';
        }

        // Repeat Password Validation
        if (formData.repeatPassword !== formData.password) {
            newAlerts.repeatPassword = 'Passwords do not match!!!';
        } else {
            newAlerts.repeatPassword = '';
        }

        setAlerts(newAlerts);

        // Registration Success
        if (
            newAlerts.name === '' &&
            newAlerts.email === '' &&
            newAlerts.password === '' &&
            newAlerts.repeatPassword === ''
        ) {
            setRegistrationSuccess(true);
        }
    };

    return (
        <div className="App">
            {registrationSuccess && (
                <div style={{
                    backgroundColor: 'brown',
                    color: 'white',
                    padding: '10px',
                    margin: '10px',
                    borderRadius: '8px',
                    textAlign: 'center',
                }}>Registration Successful!
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <h1>-: Register Here :-</h1>
                <label>
                    <input
                        className="input-box"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        onFocus={() => handleFocus('name')}
                        style={{ borderColor: focusState.name ? 'red' : '#ccc' , }} />
                    <div className="alert">{alerts.name}</div>
                </label>
                <br />
                <label>
                    <input
                        className="input-box"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        onFocus={() => handleFocus('email')}
                        style={{ borderColor: focusState.email ? 'red' : '#ccc', }} />
                    <div className="alert">{alerts.email}</div>
                </label>
                <br />
                <label>
                    <input
                        className="input-box"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        onFocus={() => handleFocus('password')}
                        style={{ borderColor: focusState.password ? 'red' : '#ccc', }} />
                    <div className="alert">{alerts.password}</div>
                </label>
                <br />
                <label>
                    <input
                        className="input-box"
                        type="password"
                        name="repeatPassword"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        placeholder="Repeat your password"
                        onFocus={() => handleFocus('repeatPassword')}
                        style={{ borderColor: focusState.repeatPassword ? 'red' : '#ccc', }} />
                    <div className="alert">{alerts.repeatPassword}</div>
                </label>
                <br />
                <button
                    className='btn' type="submit"> Sign up </button>
            </form>
        </div>
    );
}

export default RegistrationForm;
