let form = document.getElementById("form");

form.addEventListener('submit',handelSubmit);

function handelSubmit(event){
    event.preventDefault();
    let email = document.getElementById("email");
    let handelEmail = email.value;
    
    for(let i=0;i<handelEmail.length;i++){
        if(handelEmail[i]=='@'){
            alert("Sucesfull");
        }
    }
}