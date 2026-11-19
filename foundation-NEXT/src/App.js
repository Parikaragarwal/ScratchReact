import React from 'react';

export default function App(){
    return React.createElement('div',{style:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'orange',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#333',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        textAlign: 'center'
    }},
    [
        React.createElement('h1', null, 'Welcome to My App'),
        React.createElement('p', null, 'This is a simple React application with custom styling.')
    ]);
};