function monthsInterval(dateStart, dateEnd){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    const startDatesMonth = dateStart.getMonth()
    const dateEndsMonth = dateEnd.getMonth()
    let x = startDatesMonth
    let y = dateEndsMonth
    function newMonthsFunc (x, y) {
        return months.slice(x, y - x + 1)
    }
    if(startDatesMonth > dateEndsMonth){
       x = dateEndsMonth
       y = startDatesMonth
    }
    let newMonths = newMonthsFunc(x, y)
    return months.filter(month => !newMonths.includes(month))
}
let january = new Date(2017,0,1)
let march = new Date(2017, 2, 1)
console.log(monthsInterval(march, january))