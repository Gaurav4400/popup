let button= document.querySelector(".inner-box"); 
let popup= document.querySelector(".container");
let close= document.querySelector(".fa-x");
let box= document.querySelector(".news-container");
let submit= document.querySelector(".input p");
let input= document.querySelector(".input input");
let error= document.querySelector(".error");
let email;
input.addEventListener("input", function(e){
    error.style.opacity=0;
})
input.addEventListener("change", function(e){
    email= e.target.value;
    error.style.opacity=0;
})
submit.addEventListener("click", function(){
    console.log("hello")
    if(email && (email.includes("@") && email.includes(".com"))){
        popup.style.display="none";
    }else {
        console.log("email is empty")
         error.style.opacity=1;
    }
})
button.addEventListener("click", function(){  
    popup.style.display="block";
})
close.addEventListener("click", function(){
    popup.style.display="none";
})
box.addEventListener("click", function(e){
    e.stopPropagation();
})
popup.addEventListener("click", function(){
    popup.style.display="none";
})
