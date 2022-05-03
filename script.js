// navigation var 
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");


menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle("change")
})

// Section 2 Video 
 const video = document.querySelector(".video");
 const btn = document.querySelector(".buttons i");
 const bar =document.querySelector(".video-bar");

 const playPause = () => {
    if(video.paused) {
        video.play()
        btn.className='far fa-pause-circle'
        video.style.opacity = 1;
    }else {
        video.pause()
        btn.className='far fa-pause-circle'
    }
 }

 btn.addEventListener("click", ()=> {
     playPause()
     
     })