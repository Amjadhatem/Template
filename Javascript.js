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

//Login And Signin Button
document.querySelector('.Login-button').addEventListener('click', function() {
    window.open('#', '_blank');
});
document.querySelector('.Signin-button').addEventListener('click', function() {
    window.open('#', '_blank');
});

// ----------------------/NavBar--------------------


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

  document.querySelector('#oreder_btn').addEventListener('click', function() {
    window.open('#', '_blank');
});


// ----------------------/Slider--------------------


// ----------------------About--------------------

document.querySelector('.hire__me').addEventListener('click', function() {
    window.open('#', '_blank');
});

document.querySelector('.portfolio').addEventListener('click', function() {
    window.open('#', '_blank');
});

// ----------------------/About--------------------

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

//See More Button 
document.querySelector('.see_more_button').addEventListener('click', function() {
    window.open('#', '_blank');
});

// ----------------------/Gallery--------------------


// ----------------------Blogs--------------------

document.querySelector('.see-more-btn').addEventListener('click', function() {
    window.open('#', '_blank');
});

// ----------------------/Blogs--------------------

// ----------------------links--------------------

document.querySelector('.s_icon.fb').addEventListener('click', function() {
    window.open('https://www.facebook.com/', '_blank');
});
document.querySelector('.s_icon.ig').addEventListener('click', function() {
    window.open('https://www.instagram.com/', '_blank');
});
document.querySelector('.s_icon.lnk').addEventListener('click', function() {
    window.open('https://www.linkedin.com/feed/', '_blank');
});
document.querySelector('.s_icon.git').addEventListener('click', function() {
    window.open('https://github.com/Amjadhatem', '_blank');
});

// ----------------------/links--------------------


// ----------------------Q&A--------------------

const items = document.querySelectorAll('.accordion button');
function toggleAccordion(){
    const itemToggle = this.getAttribute('aria-expanded');
    
    for(i =0 ; i<items.length ; i++){
        items[i].setAttribute('aria-expanded', 'false');
    }

    if(itemToggle == 'false'){
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item =>item.addEventListener('click',toggleAccordion));

// ----------------------/Q&A--------------------