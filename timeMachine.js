function threeDaysAgo(date){
    const myDate = new Date(date)
    myDate.setDate(myDate.getDate() - 3)
    const myYear = myDate.getFullYear()
    const myMonth = myDate.getMonth() + 1
    const myDay = myDate.getDate()
    const returnedMonth = myMonth < 10 ? `0${myMonth}` : myMonth
    const returnedDay = myDay < 10 ? `0${myDay}` : myDay
    return `${myYear} - ${returnedMonth} - ${returnedDay}`
}
const day = new Date("12/1/2012")
console.log(threeDaysAgo(day))