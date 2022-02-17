function widestGap(n, start, finish) {
    let lanes = []
    let i = 0;
    while (i < start.length) {
        lanes.push([start[i], finish[i]])
        i++
    }
    lanes = lanes.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0]
        return a[1] - b[1]
    })

    lanes.push([n + 1, n + 1])
    let maxFinish = 0
    let maxGap = 0
    let j = 0;
    while (j < lanes.length) {
        let strt = lanes[j][0]
        let end = lanes[j][1]
        if (maxFinish < strt) maxGap = Math.max(maxGap, strt - maxFinish - 1)
        maxFinish = Math.max(maxFinish, end)
        j++
    }
    
    return maxGap
}