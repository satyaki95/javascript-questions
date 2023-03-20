function handelSubmit(event) {

    // event.preventDefault();
  let firstDate = document.getElementById("firstDate");
  let secondDate = document.getElementById("secondDate");
  let para = document.getElementById("para");
 
let f1Date = firstDate.value;
let f2Date = secondDate.value;

f1Date = f1Date.split("-");
f2Date = f2Date.split("-");

let year = parseInt(f1Date[0]-f2Date[0]);

let month = parseInt(f1Date[1]-f2Date[1]);

let day = parseInt(f1Date[2]-f2Date[2]);

para.innerHTML = `Year ${year} Month ${month} Day ${day}`;



}

