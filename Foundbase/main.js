(function(){
      emailjs.init({ publicKey: "xxs1W4usrzHV2yTwb" }); // from EmailJS Account page
    })();
    window.addEventListener("DOMContentLoaded", () => {
      const form = document.getElementById("contact__form");
      const status = document.getElementById("status");
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        status.textContent = "Sending...";
        try {
          await emailjs.sendForm("service_mir3x1l", "template_eopkl8d", form);
          status.textContent = "Message sent!";
          form.reset();
        } catch (err) {
          console.error(err);
          status.textContent = "Failed to send. Try again.";
        }
      });
    });

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 



(function() {
      emailjs.init("xxs1W4usrzHV2yTwb"); // Replace with your actual public key
    })();

    document.getElementById('contact__form').addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('service_mir3x1l', 'template_eopkl8d', this)
        .then(function(response) {
           alert('Message sent successfully!');
        }, function(error) {
           alert('Failed to send message: ' + error.text);
        });
    });


