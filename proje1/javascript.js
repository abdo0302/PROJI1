            //search_bar
let serch_bar=document.querySelector(".serch_bar");
let serch=document.querySelector("#serch");

let t=false

serch.onclick=function(){
    if(t==false){
        serch_bar.style.display= "flex";
        serch.className="fa-solid fa-xmark";
        t=true;
    }else{
        t=false;
        serch_bar.style.display= "none";
        serch.className="fa-solid fa-magnifying-glass";
    }    
}

        //login_bar
let form_bar=document.querySelector(".form_bar");
let colse=document.querySelector(".colse");
let profil=document.querySelector(".profil");


profil.onclick=()=>{form_bar.style.display= "block"  };
colse.onclick=()=>{form_bar.style.display= "none"  };

        //Remember Me

let input_email=document.querySelector(".input_email");
let input_password=document.querySelector(".input_password");
let input_submit=document.querySelector(".input_submit")
let checkbox=document.querySelector("#checkbox");
let notif=document.querySelector(".notif");

input_submit.onclick=function(){
    if(checkbox.checked==true  && input_email.value!=="" && input_password.value!==""){
        window.localStorage.setItem("email",input_email.value);
        window.localStorage.setItem("password",input_password.value);
        notif.style.display="block";
        setTimeout(()=>{notif.style.display="none";},1000)
    }
};