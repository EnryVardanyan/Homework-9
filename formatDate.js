function formatDate (date){
    const myDate = new Date(date)
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const myDay = myDate.getDate()
    const myMonth = myDate.getMonth()
    const myYear = myDate.getFullYear()
    return `${myDay} ${monthList[myMonth]} ${myYear}`
}
console.log(formatDate("2020-05-14"))