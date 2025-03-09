import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/api/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div>
            <h2>Job Listings</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job._id}>
                        <Link to={`/apply/${job._id}`}>{job.title} - {job.company}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
