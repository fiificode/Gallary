let container = document.querySelector(".main-wrapper");
let section = container.querySelectorAll("section");

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: container,
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=3300",
    },
  })
  .to(container, {
    x: () =>
      -(container.scrollWidth - document.documentElement.clientWidth -95) + "px",
    ease: "none",
    duration: 1,
  })
  .to('.side-bar', {
    x:70,
    opacity:1,
    scrollTrigger:{
        trigger:".side-bar",
        start:"center+=2500 center",
        scrub:2.5,
    },
  })
  .to({},{duration:1 / (section.length +1)})

