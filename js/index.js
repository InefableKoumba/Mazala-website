gsap.registerPlugin(ScrollTrigger);
const toogleNavBtn = document.getElementById("toogleNavBtn");
const mobileNavBar = document.getElementById("mobileNavBar");
const mobileLinks = document.getElementById("mobileLinks");
const mobileLinksItems = document.querySelectorAll(".mobileLinksItem");

mobileLinksItems.forEach((mobileLinksItem) => {
  mobileLinksItem.addEventListener("click", (e) => {
    mobileLinks.classList.toggle("hidden");
  });
});

toogleNavBtn.addEventListener("click", (e) => {
  mobileLinks.classList.toggle("hidden");
  if (!mobileLinks.classList.contains("hidden"))
    gsap.from(mobileLinks, {
      opacity: 0,
      duration: 0.7,
    });
});

const screenWidth = window.screen.width;
// Animations pour les écrans ayant une largeur supérieure à 500px
const desktopAnimations = () => {
  const tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
  tl.from("#desktopNavBar", { y: -200, duration: 0.8 })
    .from("#description_text", { opacity: 0, y: 50, duration: 0.5 })
    .from("#illustration_img", {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "elastic",
    })
    .from("#desktop", { y: -50, opacity: 0, duration: 0.7 }, "-=.6")
    .from("#desktop-screen", {
      x: -100,
      opacity: 0,
      duration: 0.5,
    })
    .from("#desktop-screen-contents", {
      opacity: 0,
      duration: 1,
    })
    .from("#tablet", { y: -50, opacity: 0, duration: 0.5 }, "-=.3")
    .from("#mobile", { y: -50, opacity: 0, duration: 0.5 }, "-=.3");

  //
  const tl2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#services",
        start: "+=10px", // when the top of the trigger hits the top of the viewport
      },
    })
    .from("#firstService", {
      opacity: 0,
      y: 100,
      duration: 0.7,
    })
    .from("#secondService", {
      opacity: 0,
      y: -100,
      duration: 0.7,
    })
    .from("#thirdService", {
      opacity: 0,
      y: 100,
      duration: 0.7,
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
};
// Animations pour les écrans ayant une largeur inférieure à 500px
const mobileAnimations = () => {
  const tl = gsap.timeline();
  tl.from("#mobileNavBar", { y: -200, duration: 1 })
    .from("#description_text", { opacity: 0, duration: 2 })
    .from("#mobileSubmitBtn", { opacity: 0, duration: 2 }, "-=.5")
    .from("#illustration_img", { opacity: 0, y: 50, duration: 1 }, "-=3")
    .from("#desktop", { y: -50, opacity: 0, duration: 0.7 }, "-=2.4")
    .from(
      "#desktop-screen",
      {
        x: -100,
        opacity: 0,
        duration: 0.5,
      },
      "-=2"
    );
  tl.from(
    "#desktop-screen-contents",
    {
      opacity: 0,
      duration: 1,
    },
    "-=1.5"
  );
  tl.from("#tablet", { y: -50, opacity: 0, duration: 0.5 }, "-=.8");
  tl.from("#mobile", { y: -50, opacity: 0, duration: 0.5 }, "-=.8");

  gsap.from("#firstService", {
    scrollTrigger: { trigger: "#firstService", start: "top center" },
    opacity: 0,
    y: -50,
    duration: 1,
  });
  gsap.from("#secondService", {
    scrollTrigger: { trigger: "#secondService", start: "top center" },
    opacity: 0,
    y: -50,
    duration: 1,
  });
  gsap.from("#thirdService", {
    scrollTrigger: { trigger: "#thirdService", start: "top center" },
    opacity: 0,
    y: -50,
    duration: 1,
  });

  //##############
  gsap.from("#project-1", {
    scrollTrigger: { trigger: "#project-1", start: "top center" },
    opacity: 0,
    y: -50,
    duration: 1,
  });
  gsap.from("#project-2", {
    scrollTrigger: { trigger: "#project-2", start: "top center" },
    opacity: 0,
    y: -50,
    duration: 1,
  });
  gsap.from("#project-3", {
    scrollTrigger: { trigger: "#project-3", start: "top center" },
    opacity: 0,
    y: -50,
    duration: 1,
  });

  gsap.from("#picture-member-1", {
    scrollTrigger: { trigger: "#picture-member-1", start: "top center" },
    opacity: 0,
    y: -50,
    duration: 1,
  });
  gsap.from("#desc-member-1", {
    scrollTrigger: { trigger: "#desc-member-1", start: "top center" },
    opacity: 0,
    duration: 1,
    y: -50,
  });

  gsap.from("#contact-form", {
    scrollTrigger: { trigger: "#contact-form", start: "top center" },
    y: 100,
    opacity: 0,
    duration: 0.8,
  });
};
// ~###########
if (screenWidth >= 500) {
  desktopAnimations();
} else {
  mobileAnimations();
}
