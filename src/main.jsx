import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import Contact from './routes/contact';
import Blog from './routes/blog';
import About from './routes/about';

import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
