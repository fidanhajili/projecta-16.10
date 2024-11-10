 const mobileMenu = document.querySelector('.fa-bars')
 const closeMenu = document.querySelector('.fa-circle-xmark')
 
 
 mobileMenu.addEventListener('click', function() {
    document.querySelector('.curtain-menu').classList.add('aktiv')
 })
 
 closeMenu.addEventListener('click', function() {
    document.querySelector('.curtain-menu').classList.remove('aktiv')
 })
 
 
 let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}
thumbnail.addEventListener('click', function() {
    moveSlider('next')
})

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) 
}
 

// telimler

(function() {
    emailjs.init("YOUR_USER_ID");  // EmailJS kullanıcı ID'nizi buraya ekleyin
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form verilerini gönder
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send the message, please try again.');
            console.log('Error:', error);
        });
});


