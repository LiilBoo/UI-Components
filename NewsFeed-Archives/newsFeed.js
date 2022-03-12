const images = document.querySelectorAll(".images-container img")

let options = {
  // root: null,
  rootMargin: "-10px 0px",
  threshold: 0.1
}

function handleIntersect(entries){
  console.log(entries);

  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
    }
    if (entry.isIntersecting){
      observer.unobserve(entry.target)
      //Code to prevent rollback
      // or animation to be re-triggered on scroll up
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)

images.forEach(image => {
  observer.observe(image)
})