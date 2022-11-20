function sub(...arguments) {
    return arguments.reduce((acc,item) => acc - item);
}

module.exports = sub;