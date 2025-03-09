import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Job Board</h1>
            <Link to='/jobs'>View Jobs</Link>
        </div>
    );
};

export default Home;
