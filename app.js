//1
document.write(new Date())
//2
let months = [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]
let month = months [new Date().getMonth()]
document.write(`<br><br>Current month: ${month}`)
//3
document.write(`<br><br>Today is: ${new Date().toString().slice(0,3)}`)
//4
let today = new Date().toString().slice(0,3)
switch (today) {
    case `Sun`:
        document.write(`<br><br>It's Fun day`)
        break;
    case `Sat`:
        document.write(`<br><br>It's Fun day`)
        break;
}
//8
let laterDate = new Date(`12-31-2025`)
document.write(`<br><br>Later Date: ${laterDate}`)
//9
let now = new Date()
let firstRamdan = new Date(`06-18-2015`)
let passingDays = ((now - firstRamdan) / (1000 * 60 * 60 * 24)).toFixed()
document.write(`<br><br>${passingDays} days have passed since 1st Ramadan, 2015`)
//11
let passedhour = now.setHours(now.getHours()-1)
document.write(`<br><br>1 hour ago, it was ${new Date (passedhour)}`)
//12
let hunderedYearsAgo = now.setHours(now.getHours()- (100 * 365.25 * 24))
document.write(`<br><br>100 years back: ${new Date (hunderedYearsAgo)}`)