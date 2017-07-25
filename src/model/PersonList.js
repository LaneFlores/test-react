import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import App from '../App';

export default class PersonList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person: [],
            data: []
        };
    }

    componentDidMount() {
        this.PersonList();
    }



    PersonList() {
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
        console.log("PersonList.render(): Entered.");
        console.log("PersonList.render(): this.state:");
        console.log(this.state);
        const persons = this.state.data.map((item, i) => {
            console.log("PersonList.render.persons(" + i + "): " + item);
            return <div>
                <h1>{item.id}: {item.name}</h1>
            </div>
        });

        return <div id="layout-content" className="layout-content-wrapper">
            <div className="panel-list">{ persons }</div>
        </div>
    }
}