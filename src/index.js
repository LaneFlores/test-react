import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import App from './App';
import './index.css';

//var API_HOST = 'http://localhost:8083/';
var API_HOST = 'https://agile-mountain-42351-dev.herokuapp.com/';

var init = function() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );

    console.log("Hello world?!");

    const element = <ThingList />;
    ReactDOM.render(element, document.getElementById('root'));
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
        return $.getJSON(API_HOST + 'journal')
            .then((data) => {
                console.log("Received data:");
                console.log(data);
                this.setState({
                    //person: data.data,
                    data: data
                });
            });
    }

    render() {
        console.log("ThingList.render(): Entered.");
        console.log("ThingList.render(): this.state:");
        console.log(this.state);
        const persons = this.state.data.map((item, i) => {
            return <div>
                <h1>{item.data}</h1>
            </div>
        });

        return <div id="layout-content" className="layout-content-wrapper">
            <div className="panel-list">{ persons }</div>
        </div>
    }
}

init();