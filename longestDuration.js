function longestDuration(h, m, s){
    const minToHours = m / 60
    const secToHours = s / 3600
    return Math.max(h, minToHours, secToHours)
}
console.log(longestDuration(1, 59, 599))