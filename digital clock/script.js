function time(){
    var date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let sec  = date.getSeconds();

    if(hours=="12"){
        var hr=12;
    }
    else if(hours=="24"){
         hr = 0;
    }
    else{
        hr = hours%12;
    }
    if(hr<10){
        hr="0"+hr;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(sec<10){
        sec="0"+sec;
    }

    var ampm = hours<12 ? "AM": "PM";
    var timed = hr+":"+minute+":"+sec+""+ampm;

    document.getElementById('clock').innerHTML = timed;
}


setInterval(time,1000);