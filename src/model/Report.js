import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

export default class Report extends React.Component {
    /*constructor(title, fields, records) {
        super();
        this.state = {
            title: title,
            fields: fields,
            records: records
        };
    }*/

    render() {
        let headers = [];
        let rows = [];

        for (let key in this.props.fields) {
            if (!this.props.fields.hasOwnProperty(key)) continue;
            headers.push(<th>{this.props.fields[key]}</th>);
        }

        /*for (let field in this.props.records) {
            if (!this.props.records.hasOwnProperty(field)) continue;
            let row = this.props.records[field];

            let fields = [];
            for (let key in this.props.fields) {
                if (!this.props.fields.hasOwnProperty(key)) continue;
                let value = this.props.fields[key];
                console.log("key:" + key);
                console.log("value:" + value);
                console.log(row);

                fields.push(<td>{row[value]}</td>);

            }
            rows.push(
                <tr>
                    {fields}
                </tr>
            );
        }*/

        let records = [];
        for (let field in this.props.records) {
            if (!this.props.records.hasOwnProperty(field)) continue;
            let row = this.props.records[field];
            records.push(this.renderRecord(row));
        }



        return (
            <section>
                <header>{this.props.title}</header>
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

    /*
     for (let key in this.props.fields) {
     if (!this.props.fields.hasOwnProperty(key)) continue;
     rows.push(<th>{this.props.fields[key]}</th>);
     }
     */

    renderField(field) {
        return (<th>{field}</th>);
    }

    renderRecord(record) {
        let columns = [];
        for (let key in this.props.fields) {
            if (!this.props.fields.hasOwnProperty(key)) continue;
            let value = this.props.fields[key];
            console.log("key:" + key);
            console.log("value:" + value);
            console.log(row);

            columns.push(<td>{row[value]}</td>);
        }
        return (<tr>columns</tr>);
    }

    renderRecordField(field, record) {
        return (<td>{record[field]}</td>)
    }
}