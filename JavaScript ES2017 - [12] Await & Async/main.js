const TABLEDATA = [
    { name: 'wang', age: 18, address: "nanjing" },
    { name: 'jg', age: 28, address: "nanjing" },
    { name: 'zbbx', age: 38, address: "nanjing" },
    { name: 'rw', age: 18, address: "nanjing" }
]


class Template {
    constructor() {
        this.HTML = '';
    }

    createTableStrings(data) {
        var tableContent = '';
        tableContent += `<table>`
        data.forEach(row => {
            tableContent += `<tr>`
            for (const key in row) {
                tableContent += `<td>${row[key]}</td>`
            }
            tableContent += `</tr>`
        })
        tableContent += `</table>`

        this.combine(tableContent)

    }
    createButton(val) {
        let button = `<button>${val}</button>`;
        this.combine(button);
    }
    combine(htmlPartial) {
        this.HTML += htmlPartial;
    }

}
class Table {
    constructor(id, template) {
        this.template = template;
        let box = this.findWrapper(id);
        if (box) {
            this.init(box);

        }
    }
    findWrapper(eleId) {
        if (eleId) {
            let box = document.getElementById(eleId);
            return box;
        } else
            return undefined;
    }

    init(box) {
        this.template.createTableStrings(TABLEDATA);
        this.template.createButton('more');
        box.innerHTML = this.template.HTML;
    }


}

new Table('list', new Template);