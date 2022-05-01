//*---Toggle SideMenu----*/

const navBar = document.querySelector('nav');
const myNav = document.getElementById('nav-bar');
//*Learned a new way to querySelect
const navLinks = myNav.querySelectorAll('li');
console.log(navBar,myNav,navLinks);

const burgerMenu = document.getElementById('burger-menu');
burgerMenu.addEventListener("click", () => {
    myNav.classList.toggle("active");
    burgerMenu.classList.toggle("fa-circle-xmark");
});

navLinks.forEach((navLink) => {
navLink.addEventListener("click", () => {
    myNav.classList.remove("active");
    burgerMenu.classList.toggle("fa-circle-xmark");
})
});
//*---Back to writing MediaQueries--- */
//*MQueries done with checking DevTool a lot*/

const scrollTopButton = document.getElementById('scroll-top-btn');

//*Scroll handler
window.addEventListener("scroll", () =>  {

    const progressBar = document.getElementById('progress');

    let pos = document.documentElement.scrollTop;
    let calcedHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll = ( pos * 100 ) / calcedHeight;
    // console.log(scroll);

    progressBar.style.width = `${scroll}%`;

    //*Top Button
    

    if (pos > 300){
        scrollTopButton.style.display = "grid";
    } else {
        scrollTopButton.style.display = "none";
    }

}); //End of Scroll Handler

scrollTopButton.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

