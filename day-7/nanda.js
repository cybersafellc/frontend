// aritmatika 
let angka1 = 1
let angka2 = 4
let hasil = angka1 + angka2 - angka1 * angka2 / angka1
// assigment or penugasan
let angkaAsik2 = 4
angkaAsik2 *= 5
// comparison or perbandingan
const bandingin = 5 !== "5" // dia nanya
// logic or logika
let nama = false || false || false
let dannnnn = true && "sadadasdasjnda" && 1923 // falsy hunter
// conditional or perkondisian
// 1 if
if(true && 0 && 1923){
    console.log("eksekin")
}
// if else
const status = 8 < 5

if(status){
    console.log("block code pertama")
}else{
    console.log("ini kalo misal false expression")
}
// else if
const statusBaru = "ayam curi"

if(statusBaru === "ayam bakar"){
    console.log("else")
}else if(statusBaru === "ayam golek"){
    console.log("else if ke 1")
}else if(statusBaru === "ayam goreng"){
    console.log("else if ke 2")
}else{
    console.log("else")
}

// switch 
switch(statusBaru){
    case "ayam curi":
        console.log("yaa dia ayam curian")
         break;
    case "ayam goreng": 
        console.log("yaa ini ayang goreng")
   
    case "ayam curi":
         console.log("loh kok dada ayam, ini mah bagian dari ayam bukan menu masakannya")
    
    default :
         console.log("default")
}
// ternary operator
const isinyaApa = statusBaru !== "ayam curi" ? "ya" : "tidak"
console.log(isinyaApa)
// looping
for(let i = 0; i < 10; i++){
    console.log(i)
}