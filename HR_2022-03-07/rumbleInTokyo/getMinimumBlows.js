function getMinimumBlows(height) {
    if (height.length < 3) return 

    const minHit = new Array(height.length) 

    let hits = 0 
    let currHeight = 0 
    for (let i = 0; i < height.length; i++) {
        let building = height[i] 
        if (!hits || building < currHeight) hits++
        currHeight = building
        minHit[i] = hits
    }

    hits = 0 
    currHeight = 0
    for (let i = height.length - 1; i >= 0; i--) {
        let building = height[i] 
        if (!hits || building < currHeight) hits++
        currHeight = building 
        minHit[i] += hits
    }

    return Math.min(...minHit)
}