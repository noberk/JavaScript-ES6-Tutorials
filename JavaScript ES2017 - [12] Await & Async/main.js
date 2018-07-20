
//创建😄第一步
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
        this.findWrapper(id);
        if (this.box)
            this.init();

    }
    findWrapper(eleId) {
        if (eleId) {
            this.box = document.getElementById(eleId);
        } else
            this.box = undefined;
    }
    update() {
        this.box.innerHTML = this.template.HTML;
    }
    init() {
        this.template.createTableStrings(TABLEDATA)

        this.template.createButton`more`;
        this.template.createButton`更新`;
        this.template.createButton`更新1`;

        this.update();

        this.addEventByTags({ elementType: 'button', eventType: 'click' });

    }

    addEventByTags(ele) {
        let htmlElements = document.getElementsByTagName(ele.elementType);

        if (htmlElements) {
            for (const item of htmlElements) {
                item.addEventListener(ele.eventType, (event) => {
                    fetch('http://127.0.0.1:8080/tableData.json')
                        .catch(error => {
                            console.log(error);
                        }).then(response => {
                            return response.json()

                        }).then(data => {

                            this.template.createTableStrings(data);
                            this.update();
                            this.addEventByTags({ elementType: 'button', eventType: 'click' });

                        }).catch(error => console.log(error))


                })
            }
        }



    }


}

Component({ styleUrls: ['./bootstrap/css/bootstrap.css'] })
new Canvas('list', new Template);
