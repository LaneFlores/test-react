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

        for (let field in this.props.records) {
            if (!this.props.records.hasOwnProperty(field)) continue;
            let row = this.props.records[field];

            let fields = [];
            for (let key in this.props.fields) {
                if (!this.props.fields.hasOwnProperty(key)) continue;
                let value = this.props.fields[key];
                console.log("key:" + key);
                console.log("value:" + value);

                fields.push(<td>{row[value]}</td>);

            }
            rows.push(
                <tr>
                    {fields}
                </tr>
            );
        }



        return (
            <section>
                <header>{this.props.title}</header>
                <table>
                    <tr>
                        {headers}
                    </tr>
                    {rows}
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
        return this.state.fields.forEach((field) => {this.renderRecordField(field, record)});
    }

    renderRecordField(field, record) {
        return (<td>{record[field]}</td>)
    }
}