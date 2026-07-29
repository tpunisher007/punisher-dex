// ================================
// PUNISHER DEX
// ================================

const walletBtn = document.getElementById("walletBtn");
const swapBtn = document.getElementById("swapBtn");

// ===================================
// Toast Notification
// ===================================

function showToast(message){

const toast=document.createElement("div");

toast.innerText=message;

toast.style.position="fixed";
toast.style.bottom="30px";
toast.style.right="30px";
toast.style.padding="15px 25px";
toast.style.background="#7c5cff";
toast.style.color="#fff";
toast.style.borderRadius="12px";
toast.style.boxShadow="0 10px 25px rgba(0,0,0,.3)";
toast.style.zIndex="9999";
toast.style.fontWeight="600";

document.body.appendChild(toast);

setTimeout(()=>{

toast.style.opacity="0";
toast.style.transition=".4s";

},2200);

setTimeout(()=>{

toast.remove();

},2600);

}

// ===================================
// Wallet
// ===================================

if(walletBtn){

walletBtn.onclick=()=>{

showToast("Wallet integration coming soon 🚀");

}

}

// ===================================
// Swap Demo
// ===================================

if(swapBtn){

swapBtn.onclick=()=>{

showToast("Demo Swap Successful ✅");

}

}

// ===================================
// Fake Market Prices
// ===================================

const prices=document.querySelectorAll(".market-card h1");

function randomMove(){

prices.forEach(price=>{

let text=price.innerText;

if(text.includes("$")){

let number=parseFloat(

text.replace("$","").replace(/,/g,"")

);

let change=(Math.random()*8)-4;

number+=change;

price.innerText="$"+number.toLocaleString(undefined,{

maximumFractionDigits:2

});

}

});

}

setInterval(randomMove,3000);

// ===================================
// Navbar Shadow
// ===================================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

navbar.style.boxShadow="none";

}

});

// ===================================
// Smooth Scroll
// ===================================

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===================================
// Ripple Button Effect
// ===================================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-2px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});

// ===================================
// Console Message
// ===================================

console.log("%cPunisher DEX","font-size:28px;color:#7c5cff;font-weight:bold;");

console.log("Prototype under development 🚀");
