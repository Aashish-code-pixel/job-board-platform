import React, { useState } from 'react';

const JobPost = () => {
    const [formData, setFormData] = useState({ title: '', company: '', description: '', location: '', salary: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/jobs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name='title' placeholder='Job Title' onChange={handleChange} />
            <input name='company' placeholder='Company' onChange={handleChange} />
            <textarea name='description' placeholder='Description' onChange={handleChange}></textarea>
            <input name='location' placeholder='Location' onChange={handleChange} />
            <input name='salary' placeholder='Salary' type='number' onChange={handleChange} />
            <button type='submit'>Post Job</button>
        </form>
    );
};

export default JobPost;
