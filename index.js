// a general writeup

function findMatching(drivers, name){
    let matchingList = drivers.filter(element => element === name || element === name.toLowerCase())
    return matchingList
}


function fuzzyMatch(drivers, string){
    let matchingLetters = drivers.filter(driver => driver.slice(0, string.length) === string)
    return matchingLetters
}


function matchName(drivers, string){
    let matchingNames =  drivers.filter(driver => driver["name"] === string)
    return matchingNames

}