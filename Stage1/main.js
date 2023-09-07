let wday = document.getElementById("currentDayOfTheWeek")
let time = document.getElementById("currentUTCTime");


let d = new Date();
let day = d.getDay();

switch (day){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
         day = "Friday"
         break;
    case 6:
        day = "Saturday"
        break;
}

wday.innerHTML = day;


 setInterval(() =>{
     let d = new Date();
     time.innerHTML = d.toLocaleTimeString();
 },1000)
