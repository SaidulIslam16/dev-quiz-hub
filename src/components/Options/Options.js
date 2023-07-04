import React, { useContext } from 'react';
import { AnswerContext } from '../QuizBody/QuizBody';

const Options = ({ option, key, question }) => {
    const [checkAnswer] = useContext(AnswerContext);
    return (
        <label className='border-2 p-4 rounded-lg hover:border-slate-400'> <input
            type="radio"
            name={question}
            value={option}
            onClick={checkAnswer} />{option}</label>
    );
};

export default Options;