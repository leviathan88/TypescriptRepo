//Tag functions and tagged templates
//We can use a tag function to extend or modify the standard behavior of template strings. When we apply a tag function to a template string,
//the template string becomes a tagged template

//To use a tag function, we must use the name of the function followed by a template string:
var html = htmlEscape `<h1>${name} ${surname}</h1>`;

function htmlEscape(literals, ...placeholders) {
    let result = "";
    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, ''')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    result += literals[literals.length - 1];
    return result;
}
