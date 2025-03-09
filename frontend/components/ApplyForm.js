import React from 'react';

const ApplyForm = () => {
    return (
        <form>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <textarea placeholder='Cover Letter'></textarea>
            <button type='submit'>Apply</button>
        </form>
    );
};

export default ApplyForm;
