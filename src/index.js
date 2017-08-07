import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import App from './App';
import './css/index.css';
import Game from './model/Game';
import Report from './model/Report';
import ReportView from './view/ReportView';
//import PersonList from "./model/PersonList";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { createStore } from 'redux'

// Variable Initialization
let report = new Report(
    "Test Report",
    ["name", "type", "damage", "summary"],
    {
        a:{name:"Mind Lash",type:"Arcane",damage:"5 body",summary:"Something about mind attacks. ._."},
        b:{name:"Charm",type:"Arcane",damage:"-",summary:"Charm a player? idk"},
    }
);

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(counter);

store.subscribe(() =>
    console.log('store: ' + store.getState())
);

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});

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

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <Game />
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

const reportView = () => (
    <ReportView report={report} />
);

const NotFoundView = () => (
    <div>
        <h1>404 Not Found :o</h1>
    </div>
);


const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/report">Report</Link></li>
            </ul>

            <hr/>

            <Route path="/" component={Home} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/topics" component={Topics}/>
            <Route path="/report" component={reportView} />

        </div>
    </Router>
);


const SwitchExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/report">Report</Link></li>
            </ul>

            <hr/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About}/>
                <Route exact path="/topics" component={Topics}/>
                <Route path="/report" component={reportView} />
                <Route component={NotFoundView} />
            </Switch>

        </div>
    </Router>
);

ReactDOM.render(
    <SwitchExample />,
    document.getElementById('root')
);