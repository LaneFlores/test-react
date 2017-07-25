import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import App from './App';
import './css/index.css';
import Game from './model/Game';
//import PersonList from "./model/PersonList";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

/*function peopleInit() {
    console.log("peopleInit(): Entered.");
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );

    const element = <PersonList />;
    ReactDOM.render(element, document.getElementById('main'));

    console.log("Done.");
    console.log("peopleInit(): Done.");
}*/

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

/*ReactDOM.render(
    <Game />,
    document.getElementById('root')
);*/

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

const Topics = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);



const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/"/>Home</li>
                <li><Link to="/about"/>About</li>
                <li><Link to="/topics"/>Topics</li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/topics" component={Topics}/>
        </div>
    </Router>
);

ReactDOM.render(
    <BasicExample />,
    document.getElementById('root')
);