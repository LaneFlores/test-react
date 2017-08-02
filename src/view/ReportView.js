import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

export default class ReportView extends React.Component {
    /*constructor(title, fields, records) {
        super();
        this.state = {
            title: title,
            fields: fields,
            records: records
        };
    }*/

    constructor(props) {
        super();
        console.log(props);
        this.state = {
            report: props.report
        };
    }

    render() {
        let headers = [];
        let rows = [];

        for (let key in this.props.fields) {
            if (!this.state.report.fields.hasOwnProperty(key)) continue;
            headers.push(<th>{this.state.report.fields[key]}</th>);
        }

        let records = [];
        console.log("Here?");
        for (let field in this.state.report.records) {
            if (!this.state.report.records.hasOwnProperty(field)) continue;
            //let row = this.state.report.records[field];
            records.push(this.renderRecord(this.state.report.records[field]));
        }
        console.log("Or here?");

        return (
            <section>
                <header>{this.state.report.title}</header>
                <table>
                    <tr>
                        {headers}
                    </tr>
                    {rows}
                    {records}
                </table>
                <div></div>
            </section>
        );
    }

    /*
     <header>{this.props.title}</header>
     <table>
     <tr>
     {headers}
     </tr>
     {rows}
     {records}
     </table>
     */

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