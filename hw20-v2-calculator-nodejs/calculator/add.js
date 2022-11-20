function add(...arguments) {
    return arguments.reduce((acc,item) => acc + item);
}

module.exports = add;