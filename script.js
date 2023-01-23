const radios = document.querySelectorAll(".radio");
const submit = document.querySelector(".submit");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const point = document.querySelector(".point")


submit.addEventListener("click", function(){
 first.classList.add("hide"); 
 second.classList.remove("hide");
})


radios.forEach(function (radio) {
   
radio.addEventListener("click", function(event){
   const value = event.target.value;
    point.textContent = value;
});

})


