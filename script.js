// ===============================
// PUNISHER DEX
// Stablecoin Transfer Demo
// ===============================

// Elements

const walletBtn = document.getElementById("walletBtn");
const sendBtn = document.getElementById("sendBtn");

const receiver = document.getElementById("receiver");
const amount = document.getElementById("amount");
const token = document.getElementById("token");

const previewAddress = document.getElementById("previewAddress");
const previewAmount = document.getElementById("previewAmount");
const previewToken = document.getElementById("previewToken");



// ===============================
// Toast
// ===============================

function toast(message){

const div=document.createElement("div");

div.innerText=message;

div.style.position="fixed";
div.style.bottom="30px";
div.style.right="30px";
div.style.background="#7c5cff";
div.style.padding="15px 25px";
div.style.color="#fff";
div.style.borderRadius="12px";
div.style.boxShadow="0 15px 35px rgba(0,0,0,.3)";
div.style.zIndex="9999";
div.style.fontWeight="600";

document.body.appendChild(div);

setTimeout(()=>{

div.style.opacity="0";
div.style.transition=".4s";

},2200);

setTimeout(()=>{

div.remove();

},2600);

}



// ===============================
// Wallet
// ===============================

walletBtn.onclick=()=>{

toast("Wallet connection coming soon 🚀");

};



// ===============================
// Live Preview
// ===============================

receiver.addEventListener("input",()=>{

previewAddress.innerText=

receiver.value || "Not entered";

});



amount.addEventListener("input",()=>{

previewAmount.innerText=

amount.value || "0.00";

});



token.addEventListener("change",()=>{

previewToken.innerText=

token.value;

});



// ===============================
// Send Demo
// ===============================

sendBtn.onclick=()=>{

if(receiver.value===""){

toast("Enter recipient address");

return;

}

if(amount.value===""){

toast("Enter amount");

return;

}

toast(

"Demo transfer submitted ✔"

);

};



// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",e=>{

const href=link.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});



// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>20){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});



// ===============================
// Console
// ===============================

console.log(

"%cPunisher DEX",

"font-size:26px;color:#7c5cff;font-weight:bold;"

);

console.log(

"Built while exploring the Arc ecosystem."

);
