function myTimeout(callback, duration){
    const timeNow = new Date().getTime()
    while(true){
        const currentTime = new Date().getTime()
        if(currentTime - timeNow === duration) return callback()
        
    }
}
console.log(myTimeout(() => {
    return "It's call time"
}, 2000) )
