import { useState } from 'react';

function RegistrationForm() {
    // State for form data, validation alerts, focus state, and registration success
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

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle input focus
    const handleFocus = (name) => {
        setFocusState((prevFocusState) => ({ ...prevFocusState, [name]: true }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation for name, email, password, and repeat password
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

        // Set validation alerts
        setAlerts(newAlerts);

        // If all validations pass, set registration success and log data
        if (
            newAlerts.name === '' &&
            newAlerts.email === '' &&
            newAlerts.password === '' &&
            newAlerts.repeatPassword === ''
        ) {
            setRegistrationSuccess(true);
            // Log registration data to the console
            console.log('Registration Data:', formData);
        }
    };

    return (
        <div className="App">
            {/* Display registration success message */}
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
            {/* Registration form */}
            <form onSubmit={handleSubmit}>
                <h1>-: Register Here :-</h1>
                {/* Input field for name */}
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
                {/* Input field for email */}
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
                {/* Input field for password */}
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
                {/* Input field for repeat password */}
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
                {/* Submit button */}
                <button className='btn' type="submit"> Sign up </button>
            </form>
        </div>
    );
}

export default RegistrationForm;
