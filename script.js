"use strict";

//Stickey Navigation Code
const homePageSection = document.querySelector(".HomePageSection");
const nav = document.querySelector(".NavContainer");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("stickyNavigation");
  } else {
    nav.classList.remove("stickyNavigation");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(homePageSection);

//Side Bar Navigation Code
const navBigScreen = document.querySelector(".Nav-big-screen");
const navSmallScreen = document.querySelector(".Nav-small-screen");
const closeButton = document.querySelector(".btn-close");

const showSideNav = function () {
  navBigScreen.classList.add("hidden");
  navSmallScreen.classList.remove("hidden");
};

const hideSideNav = function () {
  navBigScreen.classList.remove("hidden");
  navSmallScreen.classList.add("hidden");
};

window.onload = function () {
  var width = window.innerWidth;
  if (width <= 768) {
    showSideNav();
  }
};

window.onresize = function () {
  var width = window.innerWidth;
  if (width <= 991) {
    if (navSmallScreen.classList.contains("hidden")) {
      showSideNav();
    }
  } else {
    if (navBigScreen.classList.contains("hidden")) {
      hideSideNav();
    }
  }
};
