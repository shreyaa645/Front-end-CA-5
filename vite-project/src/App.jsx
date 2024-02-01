import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

function App() {
    return (
        // Router component for handling navigation
        <Router>
            {/* Routes component to define different routes */}
            <Routes>
                {/* Route for the home page, displaying the SearchBar component */}
                <Route path="/" element={<SearchBar />} />
                {/* Route for the registration form page, displaying the RegistrationForm component */}
                <Route path="/registrationform" element={<RegistrationForm />} />
            </Routes>
        </Router>
    );
}

export default App;
