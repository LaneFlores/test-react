import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import App from './App';
import './index.css';

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

    calculateWinner() {
        let winner = this.getHorizontalWinner();
        if (winner) return winner;

        winner = this.getVerticalWinner();
        if (winner) return winner;

        return this.getDiagonalWinner();
    }

    getHorizontalWinner() {
        for (let i=0; i<9; i+=3) {
            if (
                this.state.squares[i]
                && this.state.squares[i] === this.state.squares[i+1]
                && this.state.squares[i] === this.state.squares[i+2]
            ) {
                return this.state.squares[i];
            }
        }

        return false;
    }



    getVerticalWinner() {
        for (let i=0; i<3; i++) {
            if (this.state.squares[i] && this.state.squares[i] === this.state.squares[i+3] && this.state.squares[i] === this.state.squares[i+6]) {
                return this.state.squares[i];
            }
        }
        return false;
    }

    getDiagonalWinner() {
        if (isMatching(0,4,8)) return this.state.squares[0];
        if (isMatching(2,4,6)) return this.state.squares[2];

        /*if (this.state.squares[0] && this.state.squares[0] === this.state.squares[4] && this.state.squares[0] === this.state.squares[8]) {
            return this.state.squares[0];
        }
        if (this.state.squares[2] && this.state.squares[2] === this.state.squares[4] && this.state.squares[2] === this.state.squares[6]) {
            return this.state.squares[2];
        }*/
        return false;
    }

    isMatching(x, y, z) {
        return (this.state.squares[x] && this.state.squares[x] === this.state.squares[y] && this.state.squares[x] === this.state.squares[z]);
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
        return squares[0];
    }
    if (squares[2] && squares[2] === squares[4] && squares[2] === squares[6]) {
        return squares[2];
    }
    return false;
}

console.log("About to start initialization.");

//init();

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);