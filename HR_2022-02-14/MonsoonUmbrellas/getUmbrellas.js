function getUmbrellas(requirement, sizes) {
    // Write your code here

    // Solve for 0 up to the requirement
    let dp = new Array(requirement+1).fill(Infinity);
    // base case
    dp[0] = 0;
    
    for (let i=1; i<=requirement; i++) {
        // Solve for dp[i] for each possible size
        for (let size of sizes) {
            if (i - size >= 0) {
                // See graphic for explanation of DP setup
                dp[i] = Math.min(dp[i], 1 + dp[i-size]);
            }
        }
    }
    if (dp[requirement] != Infinity) return dp[requirement] ;
    return -1;
}