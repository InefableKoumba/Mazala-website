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
      y: -100,
      duration: 0.7,
    });
});

const screenWidth = window.screen.width;
// Animations pour les écrans ayant une largeur supérieure à 500px
const desktopAnimations = () => {
  const tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
  tl.from("#desktopNavBar", { y: -200, duration: 0.8 });
  tl.from("#description_text", { opacity: 0, y: 50, duration: 0.5 });
  tl.from("#illustration_img", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "elastic",
  });
  tl.from("#desktop", { y: -50, opacity: 0, duration: 0.7 }, "-=.6");
  tl.from("#desktop-screen", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });
  tl.from("#desktop-screen-contents", {
    opacity: 0,
    duration: 1,
  });
  tl.from("#tablet", { y: -50, opacity: 0, duration: 0.5 }, "-=.3");
  tl.from("#mobile-phone", { y: -50, opacity: 0, duration: 0.5 }, "-=.3");

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
  const tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
  tl.from("#mobileNavBar", { y: -200, duration: 1 });
  tl.from("#description_text", { opacity: 0, duration: 2 });
  tl.from("#mobileSubmitBtn", { opacity: 0, duration: 2 }, "-=.5");
  tl.from(
    "#illustration_img",
    { opacity: 0, y: 50, duration: 1.7, ease: "elastic" },
    "-=3"
  );

  //
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

$(document).ready(function () {
  // Set sticker height + hover animation
  var setCardStyle = function () {
    var card = $(".card");
    var cardWidth = card.width();
    var cardHeight = cardWidth / 2.5;

    // Set scale
    var cardContentScale = cardWidth / 700;
    card.css(
      "transform",
      "translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1) scale(" +
        cardContentScale +
        ")"
    );
    $(".card h1").css("font-size", cardContentScale * 40 + "px");
    $(".card span").css("font-size", cardContentScale * 16 + "px");
    $(".card li a").css("font-size", cardContentScale * 16 + "px");

    // Set height
    card.height(cardHeight);

    // Generate hover effect
    card
      .mouseover(function () {
        card.mousemove(function (e) {
          // Find mouse X position in card
          mouseScreenPositionX = e.pageX;
          cardLeftPosition = card.offset().left;
          mousePosX = (mouseScreenPositionX - cardLeftPosition) / cardWidth;
          // Calculate maxtrix3d X value
          matrix3dX = (mousePosX / 10000) * 1.5 - 0.0001;

          // Find mouse Y position in card
          mouseScreenPositionY = e.pageY;
          cardTopPosition = card.offset().top;
          mousePosY = (mouseScreenPositionY - cardTopPosition) / cardHeight;
          // Calculate maxtrix3d Y value
          matrix3dY = (mousePosY / 10000) * 1.65 - 0.0001;

          // Set CSS
          card.css(
            "transform",
            "translate3d(0,-5px,0) matrix3d(1,0,0.00," +
              matrix3dX +
              ",0.00,1,0.00," +
              matrix3dY +
              ",0,0,1,0,0,0,0,1) scale(" +
              cardContentScale * 1.04 +
              ")"
          );
        });
      })
      .mouseout(function () {
        // Unset CSS on mouseleave
        card.css(
          "transform",
          "translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1) scale(" +
            cardContentScale +
            ")"
        );
      });
  };

  // Execute function
  setCardStyle();
  $(window).on("resize", function () {
    setCardStyle();
  });
});
