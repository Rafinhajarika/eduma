
var swiper = new Swiper(".mySwiper_2", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
breakpoints: {
  320: {
    slidesPerView: 2,
    spaceBetween: 4,
  },
  767: {
    slidesPerView: 2,
    spaceBetween: 4,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  1600: {
    slidesPerView: 6,
    spaceBetween: 10,
  },
},
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    speed: 3000,
    loop: true,
  //   autoplay: {
  //   delay: 1000,
  // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


// tab_portion_started
let tabsContainer = document.querySelector("#tabs");
let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");
    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      tabTogglers[i].parentElement.classList.remove("border-b-2", "border-[#003aaa]", "-mb-px", "bg-white", "text-[#003aaa]");
      tabContents.children[i].classList.remove("hidden");
      
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
    }

    // Add active styles to the clicked tab
    e.target.parentElement.classList.add("border-b-2", "border-[#003aaa]", "-mb-px", "bg-white", "text-[#003aaa]");
    
    // Reset color for all tab titles
    tabTogglers.forEach(function(tab) {
      tab.style.color = ''; // Reset color to default
    });
    
    // Set active color for the clicked tab title
    e.target.style.color = '#003aaa';
  });
});

// tab_portion_finished

// sponser_portion_started

    var swiper = new Swiper(".mySwiper_3", {
      slidesPerView: 6,
      grabCursor: true,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 4,
        },
        
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1600: {
          slidesPerView: 6,
          spaceBetween: 6,
        },
      },
    });

// sponser_portion_finished
// wave_started_mobile

var swiper = new Swiper(".mySwiper_4", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// wave_finished_mobile

// function open_menu(x) {
//   x.classList.toggle("fa-xmark");
// }