// CHANGE BACK HEADER
const scrollHeader = () => {
   const header = document.getElementById('header');

   this.scrollY >= 50 
   ? header.classList.add('header_scroll') 
   : header.classList.remove('header_scroll');   
}

window.addEventListener('scroll', scrollHeader);


// SWIPER POPULAR
let swiperPopular = new Swiper(".popular_inner", {
   spaceBetween: 30,
   grabCursor: true,
   // centeredSlides: false,
   slidesPerView: 'auto',
   // loop: true,

   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});


// VALUE ACCORDION
const accordionItems = document.querySelectorAll('.value_accordion_item');

accordionItems.forEach(item => {
   const accordionHeader = item.querySelector('.value_accordion_header');

   accordionHeader.addEventListener('click', () => {
      const openItem = document.querySelector('.accordion_open');

      toggleItem(item);

      if(openItem && openItem !== item) {
         toggleItem(openItem);
      }
   });
});

function toggleItem(item) {
   const accordionContent = item.querySelector('.value_accordion_content');

   if(item.classList.contains('accordion_open')) {
      accordionContent.removeAttribute('style');
      item.classList.remove('accordion_open');
   } else {
      accordionContent.style.height = accordionContent.scrollHeight + 'px';
      item.classList.add('accordion_open');
   }
}


// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
   const scrollY = window.pageYOffset;

   sections.forEach(item => {
      const sectionHeight = item.offsetHeight;
      const sectionTop = item.offsetTop - 30;
      console.log(sectionHeight)
      const sectionId = item.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector('.nav_menu a[href*= ' +  sectionId + ']').classList.add('active_link')
      } else {
         document.querySelector('.nav_menu a[href*= ' +  sectionId + ']').classList.remove('active_link')
      }
   })
}

window.addEventListener('scroll', scrollActive);


// SHOW SCROLL UP
function scrollUp() {
   const scrollUp = document.getElementById('scroll_up');
   
   if(this.scrollY >= 350) scrollUp.classList.add('show_scroll'); 
   else scrollUp.classList.remove('show_scroll');
}
window.addEventListener('scroll', scrollUp);


// DARK LIGHT THEME 
const themeButton = document.getElementById('theme_button');
const darkTheme = 'dark_theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected_theme');
const selectedIcon = localStorage.getItem('selected_icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

if(selectedTheme) {
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
   themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);   
}

themeButton.addEventListener('click', () => {
   document.body.classList.toggle(darkTheme);
   themeButton.classList.toggle(iconTheme);

   localStorage.setItem('selected_theme', getCurrentTheme())
   localStorage.setItem('selected_icon', getCurrentIcon())
});


// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 300,
   reset: true,
})

sr.reveal(`.home_title, .popular_inner, .subscribe_inner, .footer_inner`)
sr.reveal(`.home_description , .footer_info`, {delay: 400})
sr.reveal(`.home_search`, {delay: 500})
sr.reveal(`.home_value`, {delay: 600})
sr.reveal(`.home_images`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos_img`, {interval: 100})
sr.reveal(`.value_images, .contact_content`, {origin: 'left'})
sr.reveal(`.value_content, .contact_images`, {origin: 'right'})
