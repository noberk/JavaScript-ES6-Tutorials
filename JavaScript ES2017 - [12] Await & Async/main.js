//创建
const TABLEDATA = [
    { name: 'wang', age: 18, address: "nanjing" },
    { name: 'jg', age: 28, address: "nanjing" },
    { name: 'zbbx', age: 38, address: "nanjing" },
    { name: 'rw', age: 18, address: "nanjing" }
]
const TABLEDATA2 = [
    { name: 'wang', age: 99, address: "nanjing" },
    { name: 'jg', age: 585, address: "nanjing" },
    { name: 'zbbx', age: 38, address: "nanjing" },
    { name: 'rw', age: 18, address: "nanjing" }
]

class Template {
    constructor() {
        this.HTML = '';
    }

    createTableStrings(data) {
        var tableContent = '';
        tableContent += `<table class="table table-striped">`
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
        let button = `<button class="btn">${val}</button>`;
        this.combine(button);
    }

    combine(htmlPartial) {
        this.HTML += htmlPartial;
    }

}

const Component = (inventory) => {

    let head = document.getElementsByTagName('head')[0];

    inventory.styleUrls.forEach(cssUrl => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = cssUrl;
        head.appendChild(link);
    })

}
class Canvas {
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
        this.template.createTableStrings(TABLEDATA)
        this.template.createTableStrings(TABLEDATA2)
        this.template.createButton`more`;
        this.template.createButton`mores`;
        this.template.createButton`mores`;
        box.innerHTML = this.template.HTML;
    }


}

Component({styleUrls:['./bootstrap/css/bootstrap.css']})
new Canvas('list', new Template);
