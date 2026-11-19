import React from "https://esm.sh/react@19.0.0";
import ReactDOM from "https://esm.sh/react-dom@19.0.0/client";

const Stand = (props)=>{
    console.log(props);
    return React.createElement('div',{
        className:'stand',
        id:props.id
    },
    props.data || `A Stand was here`
);
}

const App = () =>{
    return (
        React.createElement('section', null,
            [
            'Summoning Stand',
            // React.creatElement((props)=>Stand(props,null,null))
            React.createElement(Stand,{
                id:'the-star',
                data:'Star Platinum - Za Wordooo => Tomare Toki O...'
            },null)
            ]
        )
    );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// If I do this then React will not be able to trace chnages to the function
// root.render(App());


//Now it treats App as a component so any changes in the original function will be reflected here - for example state changes
root.render(React.createElement(App));
