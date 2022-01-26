function findMinimumDays(durations) {
    // Write your code here
    durations.sort((a, b) => a - b)
    
    let left = 0;
    let right = durations.length - 1;
    let days = 0;
    
    while (left <= right) {
        const firstMovie = durations[left];
        const secondMovie = durations[right];
        if (firstMovie + secondMovie <= 3.00 ) {
            days++;
            left++;
            right--;
        } else {
            days++;
            right--;
        }
    }    
    return days;
}