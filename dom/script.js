const h1 = document.getElementById("texth1")
const button = document.getElementById("button1")
const citaCita = ["kapal laut", "Programmer", "komputer", "jadi apajalah yang penting bisa makan", "angin (avatar)", "menguasai nusantara"]

button.addEventListener("click", ()=>{
    const randomIndex =  Math.floor(Math.random() * citaCita.length);
    const kataBackup = h1.innerHTML
    h1.className += "gerakkan"
    h1.innerHTML = citaCita[randomIndex]
    setTimeout(() => {
        h1.className = ""
        h1.innerHTML = kataBackup
    }, 5000);
})