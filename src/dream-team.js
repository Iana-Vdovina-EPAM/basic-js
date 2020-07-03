module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let result = [];
    for (let name of members) {
        if (typeof(name) !== "string") continue;
        const firstLetter = name.trim()[0].toUpperCase();
        if (firstLetter === "") continue;
        result.push(firstLetter);
    }
    return result.sort().join("");

    // return members
    //     .filter(e => typeof(e) === "string")
    //     .map(name => name.trim()[0].toUpperCase())
    //     .filter(name => name !== "")
    //     .sort()
    //     .join("");
};