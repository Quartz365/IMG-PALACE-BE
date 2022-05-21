const aImageCategoryNames = [
    "Ocean",
    "Cars",
    "Bikes",
    "Electronics",
    "House",
    "Mobiles",
    "Music",
    "Books",
    "Girls",
    "Baby"
];

/**
 * This method takes image category count as input
 * and returns random image category name in string separated by comma
 * like: 'Ocean,Cars,Bikes'
 */
function getImgCatgNames() {
    const aNamePool = aImageCategoryNames,
        iRandomLength = 5;

    var oRandoms = new Map(),
        aRandoms = [],
        iTempRandom;
    while (oRandoms.size != iRandomLength) {
        iTempRandom = Math.floor(
            Math.random() * aNamePool.length
        );

        if (!oRandoms.has(iTempRandom)) {
            oRandoms.set(iTempRandom, iTempRandom);
            aRandoms.push(iTempRandom);
        }
    }
    var sNames = "";
    for (let i = 0; i < oRandoms.size; i++) {
        sNames = sNames + aNamePool[aRandoms[i]] + ",";
    }
    return sNames.slice(0, sNames.length - 1);
}

module.exports = {
    getImgCatgNames
}