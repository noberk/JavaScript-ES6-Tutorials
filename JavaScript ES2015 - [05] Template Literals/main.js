let name="bob";

function makeUppercase(word) {
        return word.toUpperCase()
}

const template=`<h1>${makeUppercase('Hello')} ${name}</h1>
<p>this is a simple template </p>`;



document.getElementById('template').innerHTML = template;