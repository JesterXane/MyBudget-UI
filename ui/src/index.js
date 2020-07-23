import React from 'react'
import ReactDom from 'react-dom'


const App = ({title}) => {
    return (<div className="header">{title}</div>)
};


ReactDom.render(
    <App title="My Budget"/>,
    document.getElementById('root')
)