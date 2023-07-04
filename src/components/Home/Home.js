import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = () => {
    const quizTopic = useLoaderData();
    const quizData = quizTopic.data;
    return (
        <div className='mx-24'>
            <h1 className='text-3xl font-semibold text-center my-12'>Select the quiz your want to Participate</h1>
            <div className='grid grid-cols-4 gap-10'>
                {
                    quizData.map(topic => <QuizTopic key={topic.id} topic={topic}></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;