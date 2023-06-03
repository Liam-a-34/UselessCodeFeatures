let pniValue = 0

document.querySelector(".down-incriment").addEventListener("click", function(){
    pniValue --
    document.querySelector(".pni-value").innerHTML = pniValue
})

document.querySelector(".up-incriment").addEventListener("click", function(){
    pniValue ++
    document.querySelector(".pni-value").innerHTML = pniValue
})

document.getElementById("runaway-btn").addEventListener("mouseenter", function(){
    if(!document.getElementById("runaway-btn").classList.contains("run-right")){
        document.getElementById("runaway-btn").classList.add("run-right")
    }
    if(document.getElementById("runaway-btn").classList.contains("run-right")){
        document.getElementById("runaway-btn").classList.remove("run-right")
    }
})