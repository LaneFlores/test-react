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
    Link
} from 'react-router-dom';
import { createStore } from 'redux'

// Variable Initialization
let report = new Report(
    "Test Report",
    ["left", "right"],
    {
        a:{left:"lllll",right:"rrrrr"}
    }
);
let reportView = new ReportView(report);

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

/*const ReportPage = () => (
    <ReportView
        title="Test Report"
        fields={["one", "two", "three"]}
        records={{
            a:{one:"a", two:"aa", three:"aaa"},
            b:{one:"b", two:"bb"},
            c:{one:"c", two:"cc", three:"ccc"}
        }}
        //fields={{first:"first", second:"second"}}
    />
);*/

const ReportTest = (new Game()).render();


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

            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/topics" component={Topics}/>
            <Route path="/render" render={ReportTest} />
        </div>
    </Router>
);

ReactDOM.render(
    <BasicExample />,
    document.getElementById('root')
);