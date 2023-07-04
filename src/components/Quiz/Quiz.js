import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizBody from '../QuizBody/QuizBody';

const Quiz = () => {
    const quizData = useLoaderData();
    const questions = quizData.data.questions;
    console.log(questions);

    return (
        <div className='md:flex gap-3'>
            <div>
                <h1 className='text-3xl my-10 font-bold text-center'>Test your Knowledge Here:</h1>
                <div className='grid grid-cols-1 gap-12'>
                    {
                        questions.map(question => <QuizBody key={question.id} quiz={question}></QuizBody>)
                    }
                </div>
            </div>
            <div className='bg-slate-200 md:w-1/3 p-3'>
                <h3 className='text-xl font-semibold my-5'>Quiz Summary:</h3>
                <p>Correct: </p>
                <p>Wrong: </p>
            </div>
        </div>
    );
};

export default Quiz;