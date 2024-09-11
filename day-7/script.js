const angkaYangDiTebak = Math.floor(Math.random() * 10) + 1;
let statusNya = true

while(statusNya){
    const imputanUser = prompt("coba tebak, angka 1 - 10 !!")
    if(imputanUser ==  angkaYangDiTebak){
        alert("benar sekali")
        statusNya = false
    }else{
        alert("yah salah coba tebak lagi")
    }
}

// let i = 0;
// while(i < 10){
//     console.log(i)
//     i++
// }