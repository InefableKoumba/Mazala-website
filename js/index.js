gsap.registerPlugin(ScrollTrigger);
const toogleNavBtn = document.getElementById("toogleNavBtn");
const mobileNavBar = document.getElementById("mobileNavBar");
const mobileLinks = document.getElementById("mobileLinks");

toogleNavBtn.addEventListener("click", (e) => {
  mobileLinks.classList.toggle("hidden");
  if (!mobileLinks.classList.contains("hidden"))
    gsap.from(mobileLinks, {
      opacity: 0,
      y: -100,
      duration: 0.7,
    });
});
// ######
// ScrollTrigger.create({
//   trigger: "#team",
//   start: "top top",
//   end: `+=${window.screen.height}px`,
//   pinSpacing: false,
//   pin: true,
// });

const tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
tl.from("#desktopNavBar", { y: -200, duration: 1 });
tl.from("#description_text", { opacity: 0, x: -50, duration: 1 });
tl.from("#illustration_img", { opacity: 0, x: 50, duration: 1 });

//
const tl2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#services",
      start: "top top", // when the top of the trigger hits the top of the viewport
    },
  })
  .from("#firstService", {
    opacity: 0,
    y: 100,
    duration: 1,
  })
  .from("#secondService", {
    opacity: 0,
    y: -100,
    duration: 1,
  })
  .from("#thirdService", {
    opacity: 0,
    y: 100,
    duration: 1,
  });

//##############
gsap.from("#project-1", {
  scrollTrigger: { trigger: "#project-1", start: "top center" },
  x: -150,
  opacity: 0,
  duration: 1,
});
gsap.from("#project-2", {
  scrollTrigger: { trigger: "#project-2", start: "top center" },
  x: 150,
  opacity: 0,
  duration: 1,
});
gsap.from("#project-3", {
  scrollTrigger: { trigger: "#project-3", start: "top center" },
  x: -150,
  opacity: 0,
  duration: 1,
});

gsap.from("#picture-member-1", {
  scrollTrigger: { trigger: "#picture-member-1", start: "top center" },
  x: -100,
  opacity: 0,
  duration: 1,
});
gsap.from("#desc-member-1", {
  scrollTrigger: { trigger: "#desc-member-1", start: "top center" },
  x: 100,
  opacity: 0,
  duration: 1,
});

gsap.from("#contact-form", {
  scrollTrigger: { trigger: "#contact-form", start: "top center" },
  y: 100,
  opacity: 0,
  duration: 0.8,
});
