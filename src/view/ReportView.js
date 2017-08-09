import React from 'react';
import ReactDOM from 'react-dom';
//import $ from "jquery";

export default class ReportView extends React.Component {
    constructor(props) {
        super();
        console.log("props:");
        console.log(props);
        console.log("props.report:");
        console.log(props.report);
        this.state = {
            report: props.report
        };
    }

    render() {
        let headers = [];
        let rows = [];

        for (let key in this.state.report.fields) {
            if (!this.state.report.fields.hasOwnProperty(key)) continue;
            headers.push(<th>{this.state.report.fields[key]}</th>);
        }

        let records = [];
        console.log("Here?");
        for (let field in this.state.report.records) {
            if (!this.state.report.records.hasOwnProperty(field)) continue;
            records.push(this.renderRecord(this.state.report.records[field]));
        }
        console.log("Or here?");

        return (
            <section data-type="report">
                <header>{this.state.report.title}</header>
                <table>
                    <tr>
                        {headers}
                    </tr>
                    {rows}
                    {records}
                </table>
            </section>
        );
    }

    renderRecord(record) {
        let columns = [];
        for (let key in this.state.report.fields) {
            if (!this.state.report.fields.hasOwnProperty(key)) continue;
            let value = this.state.report.fields[key];
            console.log("key:" + key);
            console.log("value:" + value);

            columns.push(<td>{record[value]}</td>);
        }
        return (<tr>{columns}</tr>);
    }

    renderRecordField(field, record) {
        return (<td>{record[field]}</td>)
    }
}