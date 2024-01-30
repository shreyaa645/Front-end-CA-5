import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

const Home = () => {
    const navigate = useNavigate(); 
    const handleRegisterClick = () => {
        navigate('/reg');
    };

    return (
        <div className="container">
            <nav className='nav-bar'>
                <div className='image'>
                    <Link to='/'> 
                        <img src='https://camo.githubusercontent.com/7798ac9816844b12782b0a86e183dd4029f2070daf2dc3fcd77a1c1138d2ffd7/68747470733a2f2f73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f6b616c76692d656475636174696f6e2e6769746875622e696f2f66726f6e742d656e642d7765622d646576656c6f706d656e742f4b616c7669756d2d4c6f676f2e706e67' alt='Logo'/>
                    </Link>
                </div>

                <div className='register-btn'> 
                <button className='hi' onClick={handleRegisterClick}>Register</button>
                </div>
            </nav>  
            <h1>Search Books</h1>
            <SearchBar />
        </div>
    );
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reg' element={<RegistrationForm />} />
            </Routes>
        </Router>
    );
}

export default App;
