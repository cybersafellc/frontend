// function penambahan2DigitBilangan(bilangan1, bilangan2){
//     const hasil = parseInt(bilangan1) + parseInt(bilangan2)
//     return hasil
// }
// //
// const inputanUserBil1 = prompt("Masukkan bilangan 1")
// const inputanUserBil2 = prompt("Masukkan bilangan 2")

// const responsePenjumlahan = penambahan2DigitBilangan(inputanUserBil1,inputanUserBil2)
// alert(responsePenjumlahan)

const input = document.getElementById("input1")
const h1 = document.getElementById("h11")

input.addEventListener("input",()=>{
    h1.innerHTML = input.value
})