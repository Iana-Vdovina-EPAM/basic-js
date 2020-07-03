module.exports = class DepthCalculator {
    calculateDepth(arr) {
        const itemsAsArray = arr.filter(i => Array.isArray(i));
        if (itemsAsArray.length === 0) return 1;
        return Math.max(...itemsAsArray.map(i => this.calculateDepth(i))) + 1;
    };
};