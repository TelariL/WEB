//1 ZADANIE
var acc = document.getElementsByClassName("accordion-button");
for(var i = 0; i < acc.length; i++){
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}


function updateDateTime() {
    const now = new Date();
    const optionsDate = { 
        year: 'numeric',
        day: '2-digit',
        month: '2-digit',
        weekday: 'short'
    };
    const optionsTime = {  
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
    };
        
    const form1 = new Intl.DateTimeFormat('ru-RU', optionsDate);
    const part1 = form1.formatToParts(now);
    const day = part1.find(p => p.type === 'day').value;
    const month = part1.find(p => p.type === 'month').value;
    const year = part1.find(p => p.type === 'year').value;
    const weekday = part1.find(p => p.type === 'weekday').value;
    const dateStr = `${weekday}, ${day}-${month}-${year}`;

    const form2 = new Intl.DateTimeFormat('ru-RU', optionsTime);
    const part2 = form2.formatToParts(now);
    const hour = part2.find(p => p.type === 'hour').value;
    const minute = part2.find(p => p.type === 'minute').value;
    const second = part2.find(p => p.type === 'second').value;
    const timeStr = `${hour}:${minute}:${second}`;
        
    document.getElementById('date').textContent = dateStr;
    document.getElementById('time').textContent = timeStr;
}
setInterval(updateDateTime, 1000);




//2 ZADANIE
var acc = document.getElementsByClassName("button-calendar");
for(var i = 0; i < acc.length; i++){
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}


const calendarDays = document.getElementById("calendar-days");
const monthYear = document.getElementById("month-year");
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let date = new Date();

function renderCalendar() {
    calendarDays.innerHTML = "";
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    monthYear.textContent = `${months[date.getMonth()]} ${date.getFullYear()}`;
    
    const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    weekdays.forEach(day => {
        let div = document.createElement("div");
        div.classList.add("weekday");
        div.textContent = day;
        calendarDays.appendChild(div);
    });
    
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        let empty = document.createElement("div");
        calendarDays.appendChild(empty);
    }
    
    for (let day = 1; day <= lastDate; day++) {
        let dayElement = document.createElement("div");
        dayElement.classList.add("day");
        let currentDate = new Date(date.getFullYear(), date.getMonth(), day);
        if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            dayElement.classList.add("weekend");
        }
        dayElement.textContent = day;
        calendarDays.appendChild(dayElement);
    }
}
function prevMonth() {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}
function nextMonth() {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}
renderCalendar();


//3 ZADANIE
var acc = document.getElementsByClassName("button-3");
for(var i = 0; i < acc.length; i++){
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

function getWhitespaceNodes(parent) {
    let whitespaceNodes = [];

    parent.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() === '') {
            whitespaceNodes.push(node);
        }
    });

    return whitespaceNodes;
}

let whitespaceNodes = getWhitespaceNodes(document.body);
console.log("Число пробельных узлов:", whitespaceNodes.length);

document.getElementById("text3").innerHTML= "Число пробельных узлов: " + whitespaceNodes.length;



//4 ZADANIE
let cnt = 0;
let varInterval

function Counter(){
    cnt++;
    if(cnt % 2 == 1){
        varInterval = setInterval(changeColor, 400);
    }
    else{
        clearInterval(varInterval);
        let blocks = document.querySelectorAll('#block');
        for(let i = 0; i < blocks.length; i++){
            blocks[i].style.backgroundColor = "white";
        }
    }
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getRandomBlock() {
    let blocks = document.querySelectorAll('#block');
    return blocks[Math.floor(Math.random() * blocks.length)];
}

function changeColor() {
    getRandomBlock().style.backgroundColor = getRandomColor();
}



//5 ZADANIE
var acc = document.getElementsByClassName("button-5");
for(var i = 0; i < acc.length; i++){
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

var acc = document.getElementsByClassName("button-6");
for(var i = 0; i < acc.length; i++){
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

var acc = document.getElementsByClassName("button-7");
for(var i = 0; i < acc.length; i++){
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
var acc = document.getElementsByClassName("button-8");
for(var i = 0; i < acc.length; i++){
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
var acc = document.getElementsByClassName("button-9");
for(var i = 0; i < acc.length; i++){
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}