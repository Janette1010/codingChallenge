// Date() turns dates into milliseconds 
// Math.ceil() rounds num up to next largest interger


let date1 = new Date('6/14/19');
let date2 = new Date('6/20/19');

function date(date1, date2) {
    let diffDate = date2 - date1;
    let totalDays = Math.ceil(diffDate / (1000 * 3600 * 24));
    //console.log(diffDate)
    return totalDays;
}
console.log(date(date1, date2))

