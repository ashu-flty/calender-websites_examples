var bd = document.body;
var year = document.getElementById("year")
var month = document.getElementById("month")
var back = document.getElementById("back")
var next = document.getElementById("next")
var week = document.getElementById("week")
var season = document.getElementById("season")
var con = 0;

var item = document.getElementsByClassName("month__item");
var day = document.getElementsByClassName("day");
var activity = document.getElementById("activity")
var act = document.getElementById("act")
var modal = document.getElementById("modal")
var done = document.getElementById("done")
var back2 = document.getElementById("back2")
var icon = document.getElementById("icon")


function getMonth(event){
    week.innerHTML = "";
    var id = "";
    if (this.id)
    {
        id = this.id;
    }
    else {
        id = "next";
        var date = new Date();
        con = date.getMonth();
    }

    if (id == "next") {
        if (con < 11) {
            con++;
            month.style.marginLeft = con * 300 * -1+"px";
            getSeason(con);
        }
    }
    if (id == "back") {
        if (con > 0 ) {
            con--;
            month.style.marginLeft = con * 300 * -1+"px";
            getSeason(con);
        }
    }
    /* ===== Conseguir días =====*/
    var currentDays = 0;

    if( con == 1){
        currentDays = 28;
    }
    else if( con == 3  || con == 5 || con == 8|| con == 10)
    {
        currentDays = 30;
    }
    else{
        currentDays = 31;
    }
    /* ===== Crear mes =====*/
    for (var i = 1; i <= currentDays; i++) {
        var newDay = document.createElement("div");
        newDay.classList.add("day");
        newDay.textContent = i;
        week.appendChild(newDay);
    }
    setDay();

}

function getSeason(con){
    if( con == 0  || con == 1 || con == 2){
        season.innerHTML = "WINTER";
        season.style.borderBottom = "5px solid #FF3F5E";
    }
    else if( con == 3 || con == 4 || con == 5){
        season.innerHTML = "SPRING";
        season.style.borderBottom = "5px solid #D1344D";
    }
    else if( con == 6  || con == 7  || con == 8){
        season.innerHTML = "SUMMER";
        season.style.borderBottom = "5px solid #A3293C";
    }
    else if( con == 9  || con == 10  || con == 11){
        season.innerHTML = "AUTUMM";
        season.style.borderBottom = "5px solid #741D2B";
    }
}


function getDay(event){
    act.value = "";
    activity.classList.remove("is-hide");
    modal.classList.remove("is-hide");
    var _this = this;

    done.addEventListener("click", function(){
        _this.classList.add("day--active");
        activity.classList.add("is-hide");
        modal.classList.add("is-hide");
    })
    back2.addEventListener("click", function(){
        activity.classList.add("is-hide");
        modal.classList.add("is-hide");

    })
}

function setDay(){
    for (var i = 0; i < day.length; i++) {
        day[i].addEventListener("click",getDay)
        var date = new Date();
        var d = date.getDate();
        var y = date.getFullYear();
        day[d-1].style.background = "#FF3F60";
        day[d-1].style.color = "#ffffff";
        day[d-1].style.borderRadius = "50%";
        year.innerText = y;
    }
}

function main(event){
    back.addEventListener("click",getMonth)
    next.addEventListener("click",getMonth)
    getMonth();
    setDay();
}
window.addEventListener("load", main)