import React, { createContext } from 'react';
import Options from '../Options/Options';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AnswerContext = createContext();

const QuizBody = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    // console.log(question);

    const checkAnswer = (answer) => {
        console.log(correctAnswer);
        console.log(answer.target.value);
        // answer = answer.target.value
        if (answer.target.value === correctAnswer) {
            toast.success(`Correct Answer: ${answer.target.value}`)
        }
        else {
            toast.warning('Wrong Answer')
        }
    }

    // Show Correct answer function

    const showCorrectAnswer = () => {
        toast.info(`Correct answer: ${correctAnswer}`, {
            closeOnClick: true,
        });
    }
    return (
        <AnswerContext.Provider value={[checkAnswer]}>
            <div className=' p-4 shadow-md rounded-lg mx-7'>
                <div className='flex items-center justify-around'>
                    <h3 className='text-xl font-bold text-center'>{question}</h3>
                    <button onClick={showCorrectAnswer} className='bg-blue-600 py-2 px-5 rounded-lg text-white'>Check Correct</button>
                </div>
                <div className='grid grid-cols-2 gap-3 mt-5'>
                    {
                        options.map((option, key) => <Options option={option} key={key} question={question}></Options>)
                    }
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </AnswerContext.Provider>
    );
};

export default QuizBody;