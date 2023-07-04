import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const quizTopic = useLoaderData();
    const quizData = quizTopic.data;
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-7'>Select the quiz your want to Participate</h1>
        </div>
    );
};

export default Home;