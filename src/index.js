import React from 'react';
import ReactDOM from 'react-dom';
//import $ from "jquery";
import App from './App';
import './css/index.css';
import Game from './model/Game';
import Report from './model/Report';
import ReportView from './view/ReportView';

import NotFoundView from './view/NotFoundView';
import NavView from './view/NavView';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { createStore } from 'redux';

// Variable Initialization
let gameReport = new Report(
    "Test Report 1",
    ["name", "type", "damage", "summary"],
    {
        a:{name:"Mind Lash",type:"Arcane",damage:"5 body",summary:"Something about mind attacks. ._."},
        b:{name:"Charm",type:"Arcane",damage:"-",summary:"Charm a player? idk"},
    }
);
let starReport = new Report(
    "Test Report 2",
    ["CallDate", "Location", "CallFrom", "CallTo", "RingTime", "TalkTime", "Disposition"],
    {
        a:{
            CallDate:"1000-01-01 10:00:00 AM UST",
            Location:"Sarasota",
            CallFrom:"Someone!",
            CallTo:"Someone Else!",
            RingTime:"00:00:10",
            TalkTime:"00:30:00",
            Disposition:"SOME DISPOSITION"
        },
        b:{
            CallDate:"1000-01-01 12:00:00 AM UST",
            Location:"Bradenton",
            CallFrom:"A person!",
            CallTo:"WHAO SOMEONE ELSE",
            RingTime:"00:00:15",
            TalkTime:"00:30:50",
            Disposition:"SOME OTHER DISPOSITION"
        }
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

        This is the home page. Not much on it.
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

/*const Topics = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);*/

const Topics = ({ id }) => (
    <div>
        <h3>{id}</h3>
    </div>
);

const Test = (id) => {
    return (
        <div>
            <h3>{id}</h3>
        </div>
    );
};

const gameReportView = () => <ReportView report={gameReport} />;
const starReportView = () => <ReportView report={starReport} />;

const PageView = () => (
    <Router>
        <div id="content-root">
            <NavView/>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/game" component={Game}/>
                <Route path="/report/game" component={gameReportView} />
                <Route path="/report/star" component={starReportView} />
                <Route path="/topics/:id" component={Test}/>
                <Route component={NotFoundView} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(<PageView />, document.getElementById('root'));

/* <Route exact path="/topics" component={Topics({params:{topicId:"asdf"}})}/>*/