module.exports = function repeater(str, options) {
    const separator = options.separator ? options.separator : '+';
    const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
    const strArray = new Array(options.repeatTimes).fill(`${str}`);
    const additionArray = new Array(options.additionRepeatTimes).fill(`${options.addition!== undefined ? options.addition: ''}`);
    const additionFullStr = additionArray.join(additionSeparator);
    return strArray.map(i => i + additionFullStr).join(separator);
};