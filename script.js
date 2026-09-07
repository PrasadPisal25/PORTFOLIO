
// ==========================
// SELECT ELEMENTS
// ==========================


const menuIcon = document.querySelector("#menu-icon");

const navbar = document.querySelector(".navbar");

const header = document.querySelector(".header");

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

const progress = document.querySelector("#progress");

const topBtn = document.querySelector("#topBtn");

const themeBtn = document.querySelector("#theme-btn");

const loader = document.querySelector(".loader");

const readBtn = document.querySelector("#readMoreBtn");

const moreText = document.querySelector("#more");

const dots = document.querySelector("#dots");






// ==========================
// PAGE LOADER
// ==========================


window.addEventListener("load",()=>{


    setTimeout(()=>{

        loader.style.display="none";

    },1000);


});








// ==========================
// MOBILE MENU
// ==========================


menuIcon.onclick = ()=>{


    menuIcon.classList.toggle("fa-xmark");

    navbar.classList.toggle("active");


};





navLinks.forEach(link=>{


    link.onclick=()=>{


        menuIcon.classList.remove("fa-xmark");

        navbar.classList.remove("active");


    };


});









// ==========================
// STICKY HEADER
// ==========================


window.addEventListener("scroll",()=>{


    header.classList.toggle(
        "sticky",
        window.scrollY > 100
    );


});









// ==========================
// ACTIVE NAVBAR ON SCROLL
// ==========================


window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let sectionTop =
section.offsetTop - 150;


let sectionHeight =
section.offsetHeight;



if(
scrollY >= sectionTop &&
scrollY < sectionTop + sectionHeight
){

current = section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.classList.remove("active");


if(
link.getAttribute("href") === "#"+current
){

link.classList.add("active");

}


});


});









// ==========================
// TYPING EFFECT
// ==========================


const typingText =
document.querySelector(".typing-text");


const words=[

"Software Developer",

"Java Developer",

"Full Stack Developer",

"Cloud Enthusiast"

];



let wordIndex=0;

let charIndex=0;

let deleting=false;



function typeEffect(){


let currentWord =
words[wordIndex];



if(!deleting){


typingText.textContent =
currentWord.substring(
0,
charIndex++
);


if(charIndex >
currentWord.length){

deleting=true;

setTimeout(typeEffect,1000);

return;

}


}

else{


typingText.textContent =
currentWord.substring(
0,
charIndex--
);



if(charIndex < 0){


deleting=false;


wordIndex++;


if(wordIndex >= words.length){

wordIndex=0;

}


}


}



setTimeout(
typeEffect,
deleting ? 80 : 120
);


}


typeEffect();









// ==========================
// READ MORE BUTTON
// ==========================


if(readBtn){


readBtn.onclick=()=>{


moreText.classList.toggle("show");


if(moreText.classList.contains("show")){


dots.style.display="none";


readBtn.innerHTML="Read Less";


}

else{


dots.style.display="inline";


readBtn.innerHTML="Read More";


}


};


}









// ==========================
// SCROLL PROGRESS BAR
// ==========================


window.addEventListener("scroll",()=>{


let scrollTop =
document.documentElement.scrollTop;



let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;



let progressWidth =
(scrollTop / height) * 100;



progress.style.width =
progressWidth + "%";



});









// ==========================
// BACK TO TOP BUTTON
// ==========================


window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


topBtn.classList.add("show");


}

else{


topBtn.classList.remove("show");


}


});




topBtn.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};









// ==========================
// THEME TOGGLE
// ==========================


themeBtn.onclick=()=>{


document.body.classList.toggle(
"light-mode"
);



if(
document.body.classList.contains(
"light-mode"
)
){


themeBtn.classList.remove(
"fa-moon"
);


themeBtn.classList.add(
"fa-sun"
);



localStorage.setItem(
"theme",
"light"
);


}

else{


themeBtn.classList.remove(
"fa-sun"
);


themeBtn.classList.add(
"fa-moon"
);



localStorage.setItem(
"theme",
"dark"
);


}



};









// ==========================
// LOAD SAVED THEME
// ==========================


let savedTheme =
localStorage.getItem("theme");



if(savedTheme==="light"){


document.body.classList.add(
"light-mode"
);


themeBtn.classList.remove(
"fa-moon"
);


themeBtn.classList.add(
"fa-sun"
);


}









// ==========================
// SMOOTH SCROLL
// ==========================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


let target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});









// ==========================
// SCROLL REVEAL ANIMATION
// ==========================


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"active"
);


}


});


},
{

threshold:0.2

}

);




document
.querySelectorAll(
".skill-box, .project-card, .education-box, .internship-card"
)
.forEach(element=>{


observer.observe(element);


});









// ==========================
// EMAILJS CONTACT FORM
// ==========================


(function(){

    emailjs.init("WsB7iD3IkoXSUiNL3");

})();



const contactForm = document.querySelector("#contact-form");


if(contactForm){


    contactForm.addEventListener("submit", function(e){

        e.preventDefault();


        emailjs.sendForm(

            "service_zzid8e7",

            "template_ul0j3aj",

            this

        )

        .then(()=>{


            alert("Message Sent Successfully!");


            contactForm.reset();


        })


        .catch((error)=>{


            console.log("EmailJS Error:", error);


            alert("Message Failed! Please try again.");


        });


    });


}
function showToast(message){


const toast=document.createElement("div");


toast.className="toast";


toast.innerHTML=message;


document.body.appendChild(toast);



setTimeout(()=>{


toast.remove();


},3000);



}