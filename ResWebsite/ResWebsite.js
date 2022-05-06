const burgerIcon = document.getElementById('burger-menu');

const navBar = document.getElementById('nav-bar');

const navLinks = navBar.querySelectorAll('li');

const header = document.querySelector('header');

/*----SideMenu Toggle*/ 

burgerIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    burgerIcon.classList.toggle("fa-circle-xmark")
});

navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
        navBar.classList.remove("active");
        burgerIcon.classList.toggle("fa-circle-xmark");
    });
});



/*fixed header*/

window.addEventListener('scroll', () => {
    
    let pos = document.documentElement.scrollTop;
    if (pos > 0) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

/*Scroll Handler*/

const scrollTopButton = document.getElementById('scroll-top');

window.addEventListener("scroll", () =>  {



    let pos = document.documentElement.scrollTop;
    let calcedHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll = ( pos * 100 ) / calcedHeight;
    // console.log(scroll);

    if (pos > 300){
        scrollTopButton.style.display = "grid";
    } else {
        scrollTopButton.style.display = "none";
    }

}); //End of Scroll Handler

scrollTopButton.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});