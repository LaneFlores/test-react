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

    constructor() {
        super();
        this.state = {
            report: this.props.report
        };
    }

    render() {
        let headers = [];
        let rows = [];

        /*for (let key in this.props.fields) {
            if (!this.props.fields.hasOwnProperty(key)) continue;
            headers.push(<th>{this.props.fields[key]}</th>);
        }

        let records = [];
        console.log("Here?");
        for (let field in this.props.records) {
            if (!this.props.records.hasOwnProperty(field)) continue;
            //let row = this.props.records[field];
            records.push(this.renderRecord(this.props.records[field]));
        }
        console.log("Or here?");*/

        return (
            <section>

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
        for (let key in this.props.fields) {
            if (!this.props.fields.hasOwnProperty(key)) continue;
            let value = this.props.fields[key];
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