import $ from "jquery";

export default class Report {
    constructor(title, fields, records) {
        this.title = title;
        this.fields = fields;
        this.records = records;
    }
}