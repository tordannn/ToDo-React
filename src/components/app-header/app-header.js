import React from 'react';
import './app-header.css';

const AppHeader = (props) => {

    return (
    <div className="app-header d-flex">
        <h1>My Todo List</h1>
        <h2> {props.todo} more to do, {props.done} done </h2>
    </div>
    );
};

export default AppHeader;