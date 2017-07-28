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
        let rows = [];
        /*this.props.fields.forEach(function(field) {
            rows.push(<th>{field}</th>);
        });*/
        console.log(this.props.fields);
        console.log(this.props.arr_fields);
        for (let key in this.props.fields) {
            if (!this.props.fields.hasOwnProperty(key)) continue;
            rows.push(<th>{this.props.fields[key]}</th>);
        }
        for (let key in this.props.arr_fields) {
            if (!this.props.arr_fields.hasOwnProperty(key)) continue;
            console.log("key: " + key);
            rows.push(<th>{this.props.fields[key]}</th>);
        }
        //return (<section>{this.props.fields}</section>);
        return (
            <section>
                <header>{this.props.title}</header>
                <table>
                    <tr>
                        {rows}
                    </tr>
                </table>
            </section>
        );
    }

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