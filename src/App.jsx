import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Home from './pages/HomePage';
import Error from './pages/ErrorPage';
import Login from './pages/LoginPage';
import SignIn from './pages/SignInPage';
import Recompense from './pages/RecompensePage';

/*import { useDispatch } from 'react-redux';
import { getEmployee } from './actions/employee.action';*/


function App() {

    //const dispatch = useDispatch();

    //dispatch(getEmployee());

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/recompense" element={<Recompense/>}/>
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer></Footer>
        </Router>
    )
}

export default App;
