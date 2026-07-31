// =============================
// FlavorHub JavaScript
// =============================

// Cart Counter
let cartCount = 0;

// Add To Cart Buttons
const cartButtons = document.querySelectorAll(".food-card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const name = card.querySelector("h3").innerText;
        const price = parseInt(card.querySelector("p").innerText.replace("₹",""));

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
            name: name,
            price: price,
            qty: 1
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Item added to cart!");

    });

});

// Update Cart Icon
function updateCart(){

    const cartIcon = document.querySelector(".fa-shopping-cart");

    if(cartIcon){

        cartIcon.setAttribute("data-count", cartCount);

    }

}

// =============================
// Contact Form Validation
// =============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank You! Your message has been sent successfully.");

form.reset();

});

}

// =============================
// Scroll To Top Button
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff6b35";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 10px rgba(0,0,0,.3)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", ()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click", ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =============================
// Navbar Shadow
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

if(window.scrollY > 50){

header.style.boxShadow="0 10px 20px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

}

});

// =============================
// Food Card Hover Animation
// =============================

const cards = document.querySelectorAll(".food-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

// =============================
// Welcome Message
// =============================

window.onload = function(){

console.log("Welcome to FlavorHub");

};

// =============================
// End
// =============================

// ================= Mobile Menu =================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

