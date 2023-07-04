import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizBody from '../QuizBody/QuizBody';

const Quiz = () => {
    const quizData = useLoaderData();
    const questions = quizData.data.questions;
    return (
        <div className='mx-24'>
            <h1 className='text-3xl my-10 font-bold text-center'>Test your Knowledge Here:</h1>
            <div className='grid grid-cols-1 gap-12'>
                {
                    questions.map(question => <QuizBody key={question.id} quiz={question}></QuizBody>)
                }
            </div>
        </div>
    );
};

export default Quiz;