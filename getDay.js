function getDay(date){
    const daysOfWeek = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }
    const myDate = new Date(date)
    const IndOfWeek = myDate.getDay()
    return daysOfWeek[IndOfWeek]
}
console.log(getDay("12/13/2023"))