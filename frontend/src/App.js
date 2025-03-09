import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JobsPage from './pages/JobsPage';
import ApplyPage from './pages/ApplyPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/jobs' element={<JobsPage />} />
                <Route path='/apply/:id' element={<ApplyPage />} />
            </Routes>
        </Router>
    );
};

export default App;
