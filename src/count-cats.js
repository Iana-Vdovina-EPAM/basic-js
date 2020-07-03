module.exports = function countCats(backyard) {
    let count = 0;
    for (let i = 0; i < backyard.length; i++) {
        const arr = backyard[i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === "^^") {
                count++;
            }
        }
    }
    return count;
};