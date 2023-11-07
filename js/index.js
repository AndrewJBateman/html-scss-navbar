let Navbar = document.querySelector(".navbar");

document.querySelector("#MenuBtn").onclick = () => {
  Navbar.classList.toggle("active");
};

// When Window Scroll Then Change The Color of Navbar a Tag
let Section = document.querySelectorAll("section");
let NavLink = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  Navbar.classList.remove("active");

  // When Window Scroll Then Change The Color of Navbar a Tag
  Section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");
    console.log(
      "top: ",
      top,
      "height: ",
      height,
      "offset: ",
      offset,
      "id: ",
      id
    );

    if (top >= offset && top < offset + height) {
      NavLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "] ")
          .classList.add("active");
      });
    }
  });
};
