//Color Change

function getRandomGrayShade() {
  const randomValue = Math.floor(Math.random() * 256);
  return `rgb(${randomValue}, ${randomValue}, ${randomValue})`;
}

function changeColor() {
  const dvdLoadingElement = document.querySelector(".DVD-loading");
  dvdLoadingElement.style.color = getRandomGrayShade();
}

setInterval(changeColor, 2000);

//Clock

document.addEventListener("DOMContentLoaded", function () {
  const clock = document.getElementById("clock");
  let clockInterval;

  function updateClock() {
    const now = new Date();
    const hours24 = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours24 >= 12 ? "PM" : "AM";
    const hours12 = hours24 % 12 || 12;

    const time24 = `Vietnam: ${pad(hours24)}:${pad(minutes)}`;
    const time12 = `Vietnam: ${pad(hours12)}:${pad(minutes)}:${ampm}`;

    clock.dataset.time24 = time24;
    clock.dataset.time12 = time12;

    clock.textContent = time24;
  }

  function pad(number) {
    return number < 10 ? "0" + number : number;
  }

  function startClock() {
    clockInterval = setInterval(updateClock, 1000);
    updateClock();
  }

  function stopClock() {
    clearInterval(clockInterval);
  }

  clock.addEventListener("mouseover", function () {
    stopClock();
    clock.textContent = clock.dataset.time12;
  });

  clock.addEventListener("mouseout", function () {
    clock.textContent = clock.dataset.time24;
    startClock();
  });

  startClock();
});

// Text switching
document.addEventListener("DOMContentLoaded", function () {
  const marqueeTextElement = document.getElementById("marquee-text");
  let isXinChao = true;

  setInterval(function () {
    if (isXinChao) {
      marqueeTextElement.textContent = "Howdy!";
    } else {
      marqueeTextElement.textContent = "Xin Chào!";
    }
    isXinChao = !isXinChao;
  }, 3000);
});

// Scroll header hiding
let lastScrollTop = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add("hide");
  } else {
    // Scrolling up
    navbar.classList.remove("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Swiper
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});

//Sidebar
document
  .querySelector(".mobile-menu-toggle")
  .addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("active");
  });

// Scroll reveal
document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".hidden");

  function revealElements() {
    scrollElements.forEach(function (element, index) {
      const delay = index * 500;
      ScrollReveal().reveal(element, { delay: delay });
    });
  }

  function handleScroll() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    scrollElements.forEach(function (element) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        element.classList.add("reveal");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  revealElements();
});
