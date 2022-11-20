function div(...arguments) {
    return arguments.reduce((acc,item) => acc / item);
}

module.exports = div;