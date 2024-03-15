setInterval(() => {
  gsap.from(".services .card img", {
    rotation: 360,
    duration: 0.8,
    stagger: 0.1,
  });
}, 2500);

gsap.from("nav ul *", {
  y: -140,
  duration: 0.8,
  stagger: 0.1,
});

gsap.from(".logo", {
  x: -500,
  stagger: 1.5,
});

gsap.from(".notification", {
  x: 500,
  stagger: 1.5,
});

gsap.from(".starting .top *", {
  x: -600,
  duration: 1,
  stagger: 0.1,
});

gsap.from(".bottom .card-one", {
  y: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".bottom .card-one",
    scroller: "body",
    start: "top 30%",
  },
});

gsap.from(".bottom .card-two", {
  y: 200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

gsap.from(".state", {
  y: 150,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

gsap.from(".product-img", {
  y: -150,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".third-service .cards", {
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  y: 50,
  scrollTrigger: {
    trigger: ".third-service .cards",
    start: "top 30%",
  },
});

gsap.from(".customers-section .left *", {
  x: -100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".customers-section .row",
    start: "top 30%",
  },
});

gsap.from(".customers-section .right *", {
  x: 100,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".customers-section .row",
    start: "top 30%",
  },
});

gsap.from(".about .main-container .left", {
  x: -400,
  duration: 1,
  scrollTrigger: {
    trigger: ".about .main-container",
    start: "top 30%",
  },
});

gsap.from(".about .main-container .right", {
  x: 400,
  duration: 1,
  scrollTrigger: {
    trigger: ".about .main-container",
    start: "top 30%",
  },
});

gsap.from(".about .main-container .center", {
  y: 700,
  duration: 1,
  scrollTrigger: {
    trigger: ".about .main-container",
    start: "top 30%",
  },
});

gsap.from(".business *", {
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".business",
    start: "top 30%",
  },
});

gsap.from("#footer *", {
  opacity: 0,
  x: -20,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#footer",
    start: "top 50%",
  },
});

let right = document.querySelector(".about .main-container .right");
let arrow2 = document.querySelector(".arrow-up3");
let box2 = document.querySelector(".shai3");

arrow2.addEventListener("click", (e) => {
  right.classList.toggle("hide");
  if (right.classList.contains("hide")) {
    e.target.src = "./arrow-down.svg";
  } else {
    e.target.src = "./arrow-top.svg";
  }
});

let left = document.querySelector(".about .main-container .left");
let arrow1 = document.querySelector(".arrow-up1");
let box1 = document.querySelector(".shai1");

arrow1.addEventListener("click", (e) => {
  left.classList.toggle("hide");
  if (left.classList.contains("hide")) {
    e.target.src = "./arrow-down.svg";
  } else {
    e.target.src = "./arrow-top.svg";
  }
});

let center = document.querySelector(".about .main-container .center");
let arrow3 = document.querySelector(".shai");
let box3 = document.querySelector(".shai2");

arrow3.addEventListener("click", (e) => {
  center.classList.toggle("hide");
  if (center.classList.contains("hide")) {
    e.target.src = "./arrow-down.svg";
  } else {
    e.target.src = "./arrow-top.svg";
  }
});

function myFunction(x) {
  if (x.matches) {
    arrow1.src = "./arrow-top.svg";
    left.classList.remove("hide");
    arrow2.src = "./arrow-top.svg";
    center.classList.remove("hide");
    arrow3.src = "./arrow-top.svg";
    right.classList.remove("hide");
  } else {
    arrow1.src = "./arrow-down.svg";
    left.classList.add("hide");
    arrow2.src = "./arrow-down.svg";
    right.classList.add("hide");
    arrow3.src = "./arrow-top.svg";
    center.classList.remove("hide");
  }
}

var x = window.matchMedia("(max-width: 600px)");

myFunction(x);

x.addEventListener("change", function () {
  myFunction(x);
});
