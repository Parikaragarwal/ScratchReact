import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/internalize', (req, res) => {
    const appHtml = ReactDOMServer.renderToString(React.createElement(App));
    res.setHeader('Content-Type', 'text/html');
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Internalized React App</title>
    </head>
    <body>
        <div id="root">${appHtml}</div>
    </body>
    </html>`);
});

app.listen(3211,()=>{
    console.log('Server is running on port 3211! Click `http://localhost:3211` to view the app');
});