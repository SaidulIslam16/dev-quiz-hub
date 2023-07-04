import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quizTopicData = useLoaderData();
    const data = quizTopicData.data;
    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='text-3xl text-center font-semibold my-5'>Quiz Question Statistics</h1>
                <BarChart width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis dataKey='total'></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey='total' fill='#8884d8'></Bar>

                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;