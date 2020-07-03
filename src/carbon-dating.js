const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = parseFloat(Math.LN2.toFixed(3));
const K = LN2 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity) !== "string") return false;
    let activityNum = parseFloat(sampleActivity);
    if (isNaN(activityNum) || activityNum <= 0) return false;
    let result = Math.ceil(Math.log((MODERN_ACTIVITY / activityNum)) / K);
    if (result <= 0) return false;
    return result;
};