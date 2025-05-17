let date = new Date()
console.log(date);
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getDay());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());


function time1(){
    let date1 = new Date()
    let h1= document.querySelector("h1")
    h1.innerText= date1.toLocaleTimeString()
}

let interval = setInterval(time1,1000)
function stop1(){
    clearInterval(interval)
}

let qr = new QRCode(document.querySelector("#qrcode"))
console.log(qr);
qr.makeCode("html css and js")
let btn = document.getElementById("qrbtn")
let inp = document.getElementById("inp")
let h2 = document.querySelector("h2")
btn.onclick=()=>{
    console.log(inp.value);
    qr.makeCode(inp.value)
    h2.innerText=inp.value
    inp.value=""
}
h2.onclick=()=>{
    window.open(h2.innerText)
}
