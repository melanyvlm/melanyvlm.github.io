let daynames = [
"Sunday" , "Monday" , "Tuesday" , 
"Wednesday" ,"Thrusday" , "Friday" , "Saturday"]

let months =["January " ,
"February" ,
"March" ,
"April" ,
"May" ,
"June" ,
"July" ,
"August",
"September",
"October",
"November",
"December "
]
// let d = new Date();
// let dayName = daynames[d.getDay()];
// let monthName = months[d.getMonth()];
// let year = d.getFullYear();
// let fulldate = dayName + " , " + monthName + " " + d.getDate() + " , " + year;
// document.getElementById("currentdate").textContent= fulldate;

let thisDocument  = new Date (document.lastModified) ;
document.getElementById("showDate").textContent = thisDocument;

