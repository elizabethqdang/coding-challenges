function countSignals(frequencies, filterRanges) {
    // Write your code here
    let low = -Infinity;
    let high = Infinity;
    for (let filters of filterRanges) {
        let leftBound = filters[0];
        let rightBound = filters[1];
        if (leftBound > low) low = leftBound;
        if (rightBound < high) high = rightBound;
    }
    let count = 0
    for (let freq of frequencies) {
        if (freq >= low && freq <= high) count++;
    }
    return count;
}