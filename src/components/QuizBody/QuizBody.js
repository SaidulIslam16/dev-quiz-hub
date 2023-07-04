import React from 'react';
import Options from '../Options/Options';

const QuizBody = ({ quiz }) => {
    const { question, options } = quiz;
    return (
        <div className=' p-4 shadow-md rounded-lg'>
            <h3 className='text-xl font-bold text-center'>{question}</h3>
            <div className='grid grid-cols-2 gap-3 mt-5'>
                {
                    options.map((option, key) => <Options option={option} key={key} question={question}></Options>)
                }
            </div>
        </div>
    );
};

export default QuizBody;