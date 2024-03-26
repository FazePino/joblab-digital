//data
var data = new Date();
var gg, mm, aaaa;
gg = data.getDate() + "/";
mm = data.getMonth() + 1 + "/";
aaaa = data.getFullYear();
document.getElementById("data").innerHTML = "Oggi è il " + gg + mm + aaaa;

//ora
window.onload = setInterval(Orologio,1000);
function addZero(i){
    if (i < 10) 
    {
        i = "0" + i;
    }
    return i;
}

function Orologio(){
    var d = new Date();
    var date = d.getDate();
    var ora = addZero(d.getHours());
    var min = addZero(d.getMinutes());
    var sec = addZero(d.getSeconds());
    document.getElementById("orologio").innerHTML = ora + ":" + min + ":" + sec;
}