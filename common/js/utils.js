function interpolate(template, obj) {
    for (let key in obj) {
        template = template.replaceAll(`{{${key}}}`, obj[key]);
    }

    return template;
}

function htmlToElement(html) {
    const container = document.createElement('div');

    container.innerHTML = html;
    return container.children[0];
}