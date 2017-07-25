import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import App from './App';
import './css/index.css';
import Game from './model/Game'
import PersonList from "./model/PersonList";

const API_HOST = 'https://sample-php-api.herokuapp.com/';

function peopleInit() {
    console.log("peopleInit(): Entered.");
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );

    const element = <PersonList />;
    ReactDOM.render(element, document.getElementById('main'));

    console.log("Done.");
    console.log("peopleInit(): Done.");
}

function gameInit() {
    console.log("gameInit(): Entered.");

    ReactDOM.render(
        <Game />,
        document.getElementById('root')
    );

    console.log("gameInit(): Done.");
}

//peopleInit();
//gameInit();

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);