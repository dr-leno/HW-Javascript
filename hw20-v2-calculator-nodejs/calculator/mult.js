function mult(...arguments) {
    return arguments.reduce((acc,item) => acc * item);
}

module.exports = mult;