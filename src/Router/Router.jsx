import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Home/Home';
import Root from '../Root/Root';
import JobDetails from '../JobDetails/JobDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Root />
            },
            {
                path: '/statistics',
                element: <h1>Hello statistics Component</h1>
            },
            {
                path: '/appliedjobs',
                element: <h1>Hello appliedjobs Component</h1>
            },
            {
                path: '/blog',
                element: <h1>Hello blog Component</h1>
            },
            {
                path: '/startapplying',
                element: <h1>Hello startapplying Component</h1>
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: ({props}) => fetch('/data/jobs.json')
            },
        ]
    }
])

export default router;