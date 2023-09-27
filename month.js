function month(numOfMonth){
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return monthList[numOfMonth - 1]
}
console.log(month(3))