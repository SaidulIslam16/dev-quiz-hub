import React from 'react';

const Options = ({ option, key, question }) => {
    return (
        <label className='border-2 p-4 rounded-lg hover:border-slate-400'> <input
            type="radio"
            name={question}
            value={option} />{option}</label>
    );
};

export default Options;