const nav = document.getElementById("nav")
const bi = document.getElementById("bi")
const rn = document.getElementById("rn")
const bi1 = document.getElementById("bi1")
const bi2 = document.getElementById("bi2")
const bi3 = document.getElementById("bi3")
const nav2 = document.getElementById("nav2")


bi.addEventListener("click",(eo) => {
    
nav2.classList.toggle("nav2open")

bi2.classList.toggle("awy")

bi1.classList.toggle("crs")

bi3.classList.toggle("crs3")
})