import React, { createContext, useContext } from 'react';
import Options from '../Options/Options';
export const AnswerContext = createContext();

const QuizBody = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    console.log(question);

    const checkAnswer = (answer) => {
        console.log(correctAnswer);
        console.log(answer.target.value);
        // answer = answer.target.value
        if (answer.target.value === correctAnswer) {
            alert('Correct Answer');
        }
        else {
            alert('wrong answer')
        }
    }
    return (
        <AnswerContext.Provider value={[checkAnswer]}>
            <div className=' p-4 shadow-md rounded-lg'>
                <div className=''>
                    <h3 className='text-xl font-bold text-center'>{question}</h3>
                    <button>Check Correct</button>
                </div>
                <div className='grid grid-cols-2 gap-3 mt-5'>
                    {
                        options.map((option, key) => <Options option={option} key={key} question={question}></Options>)
                    }
                </div>
            </div>
        </AnswerContext.Provider>
    );
};

export default QuizBody;