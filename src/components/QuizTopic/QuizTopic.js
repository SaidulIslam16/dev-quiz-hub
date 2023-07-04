import React from 'react';

const QuizTopic = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div className='rounded-lg p-4 bg-slate-100'>
            <img className='w-full' src={logo} alt="" />
            <h1 className='text-3xl text-slate-400 my-4'>Topic: <span className='font-bold text-black'>{name}</span></h1>
            <div className='flex items-center justify-between'>
                <p>Quistions: {total}</p>
                <button className='bg-blue-600 px-5 py-2 rounded-lg text-white'>Start Test</button>
            </div>
        </div>
    );
};

export default QuizTopic;