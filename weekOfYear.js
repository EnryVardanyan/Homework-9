function weekOfYear(date){
    function dayOfYear(date){
        const myFullDate = new Date(date)
        const firstDayOfYear = new Date(myFullDate.getFullYear(), 0, 1)
        const dateInMIliseconds = myFullDate.getTime()
        const dateOfFirstDayOfYear = firstDayOfYear.getTime()
        const milisecondsInYear = dateInMIliseconds - dateOfFirstDayOfYear
        return Math.ceil(milisecondsInYear / 1000 / 60 / 60 / 24) + 1
    }
    return Math.ceil(dayOfYear(date)/7)
}

console.log(weekOfYear("1/1/2004"))