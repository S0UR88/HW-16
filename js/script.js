// **menu**

let box = document.querySelector(".box");
let list = document.querySelector(".menu-list");


box.addEventListener('click', function(){
    list.classList.toggle("active")

})


// **counter**

let inc = document.querySelector(".inc");
let counterNum = document.querySelector(".counternum");
let dec = document.querySelector(".dec");

inc.addEventListener('click', function(){
    let rslt = counterNum.value = Number(counterNum.value)+1;
    console.log(rslt);
})


dec.addEventListener('click', function(){
    if(Number(counterNum.value)>1){
    let rslt = counterNum.value = Number(counterNum.value)-1;
    console.log(rslt);
}

else{
    dec.style.cursor = "not-allowed";
}

})

// **Range**

let rangeNum = document.querySelector(".rangenum");
let rangeResult  = document.querySelector(".range-result");


rangeNum.addEventListener('input', function(){
    let rslt= Number(rangeNum.value);
    rangeResult.innerHTML = rslt;
})


// **Random color**

let randomDisplay = document.querySelector("#random");
let randomBtn = document.querySelector(".random-button");

randomBtn.addEventListener('click', function(){
    let red = Math.round (Math.random() * 255);
    let green = Math.round (Math.random() * 255);
    let blue = Math.round (Math.random() * 255);

    randomDisplay.style.backgroundColor = `rgb(${red},${green},${blue})`;

})


// **image display**

let imageDisplay = document.querySelector(".imagefile");
let testImg = document.querySelector(".testimg");

imageDisplay.addEventListener('change', function(e){

   let url = URL.createObjectURL(e.target.files[0]);
   testImg.src = url;
   e.preventDefault();

})