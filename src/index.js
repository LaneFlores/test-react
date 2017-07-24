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

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status = (winner) ? 'Winner: ' + winner : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

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

function calculateWinner(squares) {
    let winner = getHorizontalWinner(squares);
    if (winner) return winner;

    winner = getVerticalWinner(squares);
    if (winner) return winner;

    return getDiagonalWinner(squares);
}

function getHorizontalWinner(squares) {
    for (let i=0; i<9; i+=3) {
        if (squares[i] && squares[i] === squares[i+1] && squares[i] === squares[i+2]) {
            return squares[i];
        }
    }

    return false;
}

function getVerticalWinner(squares) {
    for (let i=0; i<3; i++) {
        if (squares[i] && squares[i] === squares[i+3] && squares[i] === squares[i+6]) {
            return squares[i];
        }
    }
    return false;
}

function getDiagonalWinner(squares) {
    if (squares[0] && squares[0] === squares[4] && squares[0] === squares[8]) {
        return squares[i];
    }
    if (squares[2] && squares[2] === squares[4] && squares[2] === squares[6]) {
        return squares[i];
    }
    return false;
}

console.log("About to start initialization.");

//init();

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);