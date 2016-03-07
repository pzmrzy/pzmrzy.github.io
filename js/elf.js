// time
function showLocale(objD)
{
    var str;

    var yy = objD.getYear();
    if (yy < 1900)
        yy = yy + 1900;

    var MM = objD.getMonth() + 1;
    if(MM < 10)
        MM = '0' + MM;

    var dd = objD.getDate();
    if(dd < 10)
        dd = '0' + dd;

    var hh = objD.getHours();
    if(hh < 10)
        hh = '0' + hh;

    var mm = objD.getMinutes();
    if(mm < 10)
        mm = '0' + mm;

    var ss = objD.getSeconds();
    if(ss < 10)
        ss = '0' + ss;

    var ww = objD.getDay();
    if (ww == 0)
        ww = "Sunday";
    if (ww == 1)
        ww = "Monday";
    if (ww == 2)
        ww = "Tuesday";
    if (ww == 3)
        ww = "Wednesday";
    if (ww == 4)
        ww = "Thursday";
    if (ww == 5)
        ww = "Friday";
    if (ww == 6)
        ww = "Saturday";
    str = yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + " " + ww;
    return(str);
}

var today;
today = new Date();
document.querySelector(".time").innerHTML = showLocale(today);

window.setInterval(function() {
    var today;
    today = new Date();
    document.querySelector(".time").innerHTML = showLocale(today);
}, 1000);
