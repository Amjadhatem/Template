// ----------------------NavBar--------------------

humburger = document.querySelector('.humburger');
humburger.onclick = function(){
    NavBar = document.querySelector('.nav-bar');
    NavBar.classList.toggle('active');
    if (NavBar.classList.contains('active')) {
        NavBar.style.zIndex = "9999"; // Set a higher z-index value when active
    } else {
        NavBar.style.zIndex = "1"; // Reset z-index when inactive
    }
}

// ----------------------NavBar--------------------


// ----------------------Slider--------------------

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3500 ,
        disableOnInteraction: false , 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect:"creative" ,
    creativeEffect:{
        prev:{
            shadow:true,
            translate:[0,0-400],
        } ,
        next:{
            translate:["100%",0,0],

        }
    }
  });

// ----------------------Slider--------------------

// ----------------------Gallery--------------------
document.querySelectorAll('.img_container img').forEach(drwa_image =>{
    drwa_image.onclick = () =>{
        document.querySelector('.Popup_Draw').style.display = 'block';
        document.querySelector('.Popup_Draw img').src = drwa_image.getAttribute('src');
    }
});

document.querySelector('.Popup_Draw span').onclick = () =>{
    document.querySelector('.Popup_Draw').style.display = 'none';
}
// ----------------------Gallery--------------------