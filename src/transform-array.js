module.exports = function transform(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                if (isPreviousValueShouldBeUsed(arr[i - 1], arr[i - 2])) result.pop();
                break;
            case '--double-next':
                if (isValueValid(arr[i + 1])) result.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (isPreviousValueShouldBeUsed(arr[i - 1], arr[i - 2])) result.push(arr[i - 1]);
                break;
            default:
                result.push(arr[i]);
        }
    }
    return result;

    function isValueValid(value) {
        return value !== undefined && value !== '--discard-next' && value !== '--discard-prev' && value !== '--double-next' && value !== '--double-prev';
    }

    function isPreviousValueShouldBeUsed(currentValue, previousValue) {
        return isValueValid(currentValue) && previousValue !== '--discard-next';
    }
};