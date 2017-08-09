import React from 'react';
import {Link} from 'react-router-dom';

export default class NavView extends React.Component {
    render() {
        return (
            <nav>
                <div>Test React App</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/game">Game</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                    <li><Link to="/report/game">Game Report</Link></li>
                    <li><Link to="/report/star">Star Report</Link></li>
                </ul>
            </nav>
        );
    }
}