import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import App from './App';
import './index.css';

var API_HOST = 'https://sample-php-api.herokuapp.com/';

var init = function() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );

    console.log("Hello world?!");

    const element = <ThingList />;
    ReactDOM.render(element, document.getElementById('main'));

    console.log("Done.");
};

export default class ThingList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person: [],
            data: []
        };
    }

    componentDidMount() {
        this.ThingList();
    }



    ThingList() {
        return $.getJSON(API_HOST + 'person')
            .then((data) => {
                console.log("Received data:");
                console.log(data);
                this.setState({
                    //person: data.data,
                    data: data
                });
            });
        console.log("Finished with data.");
    }

    render() {
        console.log("ThingList.render(): Entered.");
        console.log("ThingList.render(): this.state:");
        console.log(this.state);
        const persons = this.state.data.map((item, i) => {
            console.log("ThingList.render.persons(" + i + "): " + item);
            return <div>
                <h1>{item.id}: {item.name}</h1>
            </div>
        });

        return <div id="layout-content" className="layout-content-wrapper">
            <div className="panel-list">{ persons }</div>
        </div>
    }
}

class Square extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next Player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

console.log("About to start initialization.");

//init();

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);