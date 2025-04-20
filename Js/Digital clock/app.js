var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var hrSpan = document.getElementById('hr');
var minSpan = document.getElementById('min');
var secSpan = document.getElementById('sec');
var ampm = document.getElementById('ampm');

var daySpan = document.getElementById('day');
var dateSpan = document.getElementById('date');
var monthSpan = document.getElementById('month');
var yearSpan = document.getElementById('year');

setInterval(function (){
    var now = new Date();
    if(now.getHours() > 12){
        hrSpan.innerText = now.getHours() - 12;
    }
    else if(now.getHours() === 0){
        hrSpan.innerText = 12;
    }
    else{
        hrSpan.innerText =  now.getHours();
    }

    if(now.getMinutes() < 10){
        minSpan.innerText = "0" + now.getMinutes();
    } else{
        minSpan.innerText = now.getMinutes();
    }

    if(now.getSeconds() < 10){
        secSpan.innerText = "0" + now.getSeconds();
    } else{
        secSpan.innerText = now.getSeconds();
    }
    
    if(now.getHours() >= 12){
        ampm.innerText = "PM";
    }
    else{
        ampm.innerText = "AM";
    }

    daySpan.innerText = dayNames[now.getDay()];
    dateSpan.innerText = now.getDate();
    monthSpan.innerText = monthNames[now.getMonth()];
    yearSpan.innerText = now.getFullYear();

}, 1000);