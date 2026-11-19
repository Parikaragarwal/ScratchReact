import React from 'react';
import ReactDOM from 'react-dom/client';
import {philosophers} from './philosophers.js';

export const App = () => {
    return (
        React.createElement('section', null,
            [
                React.createElement('h1', {
                    className: 'title',
                    key: 'heading'
                },
                'List of Philosophers'),
                 
                ...(philosophers.map((philosopher) => {
                    return React.createElement('div', {
                        className: 'data',
                        key: philosopher.id
                    }, [
                        React.createElement('h2', {
                            className: 'name',
                            key: 'name'
                        }, philosopher.name),
                        React.createElement('p', {
                            className: 'description',
                            key: 'description'
                        }, philosopher.description)
                    ]);
                }))
            ]
        )
    );
}