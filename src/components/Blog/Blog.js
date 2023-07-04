import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center my-7 text-slate-500'>This is Blog</h1>
            <div className='p-5 shadow-lg mx-7 rounded-lg my-7'>
                <h1 className='text-4xl font-bold mb-6 text-slate-500'>What is useRef Hook?</h1>
                <p><span className='font-bold'>Answer: </span>The useRef hook is a built-in hook in React that allows you to create a mutable value that persists across renders of a component. Unlike useState, updating a useRef value does not trigger a re-render of the component. The primary use case of useRef is to access or store a reference to a DOM element or a value that needs to persist without causing re-renders.</p>
            </div>
            <div className='p-5 shadow-lg mx-7 rounded-lg my-7'>
                <h1 className='text-4xl font-bold mb-6 text-slate-500'>How react router work?</h1>
                <p><span className='font-bold'>Answer: </span>React Router is a popular library for handling routing in React applications. It allows you to create a single-page application (SPA) with multiple views or pages, enabling navigation between different components based on the current URL.</p>
            </div>
            <div className='p-5 shadow-lg mx-7 rounded-lg my-7'>
                <h1 className='text-4xl font-bold mb-6 text-slate-500'>History of react </h1>
                <p><span className='font-bold'>Answer: </span>React is a JavaScript library for building user interfaces, initially developed by Facebook. Here is a brief history of React:

                    - 2011: Jordan Walke, a software engineer at Facebook, created an internal prototype of React called "FaxJS" to address the performance issues of Facebook's news feed.
                    - May 2013: React was publicly announced at the JSConf US conference by Jordan Walke. It gained attention for its virtual DOM implementation and component-based architecture.
                    - June 2013: React was open-sourced by Facebook, making it available for developers outside of Facebook to use and contribute to.
                    - 2015: React Native was introduced, allowing developers to build native mobile applications using React syntax.
                    - April 2016: React Fiber, a reimplementation of the React core algorithm, was announced. Fiber aimed to improve React's rendering performance, concurrency, and better support for large applications.
                    - May 2018: React 16.3 was released, introducing the Context API and React's new lifecycle methods.
                    - October 2018: React 16.6 was released, introducing React Hooks, a new way to write stateful logic and reuse behavior in functional components.
                    - February 2019: React 16.8 was released with React Hooks officially being introduced as a stable feature, providing a more concise and composable way to handle state and side effects.
                    - September 2020: React 17 was released with no major new features but focused on improving the upgrade process and providing better error handling and warnings.
                    - React continues to evolve, with regular releases and updates from the React team, community contributions, and the adoption of new features and improvements.

                    Today, React is widely used in the industry, powering countless web applications and mobile apps. It has a large and active community, and its ecosystem includes a range of additional libraries, tools, and frameworks that complement and enhance React development.</p>
            </div>
        </div>
    );
};

export default Blog;