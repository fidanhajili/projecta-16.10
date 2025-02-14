 const mobileMenu = document.querySelector('.fa-bars')
 const closeMenu = document.querySelector('.fa-circle-xmark')
 
 
 mobileMenu.addEventListener('click', function() {
    document.querySelector('.curtain-menu').classList.add('aktiv')
 })
 
 closeMenu.addEventListener('click', function() {
    document.querySelector('.curtain-menu').classList.remove('aktiv')
 })
 
 const hexagonCard1 = document.querySelector('.hg-card1')
 const bizx = document.querySelector('.biz-x-mark')
 const hexagonCard2 = document.querySelector('.hg-card2')
 const meqsedx = document.querySelector('.meqsed-x-mark')
 const hexagonCard3 = document.querySelector('.hg-card3')
 const vakx = document.querySelector('.vak-x-mark')
 const hexagonCard4 = document.querySelector('.hg-card4')
 const partnersx = document.querySelector('.partners-x-mark')


 
 hexagonCard1.addEventListener('click', function () {
 document.querySelector('.bizkimik').classList.add('aktiv')
 })
 bizx.addEventListener('click', function () {
    document.querySelector('.bizkimik').classList.remove('aktiv')
 })

 hexagonCard2.addEventListener('click', function () {
    document.querySelector('.meqsedimiz').classList.add('aktiv')
    })
    meqsedx.addEventListener('click', function () {
       document.querySelector('.meqsedimiz').classList.remove('aktiv')
    })


   hexagonCard3.addEventListener('click', function () {
        document.querySelector('.vakansiya').classList.add('aktiv')
        })
        vakx.addEventListener('click', function () {
           document.querySelector('.vakansiya').classList.remove('aktiv')
        })



        hexagonCard4.addEventListener('click', function () {
            document.querySelector('.partners').classList.add('aktiv')
            })
            partnersx.addEventListener('click', function () {
               document.querySelector('.partners').classList.remove('aktiv')
            })



            
            const swiper = new Swiper(".mySwiper", {
                slidesPerView: "auto",
                spaceBetween: 30,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                  },
                breakpoints: {
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 8,
                      spaceBetween: 30,
                    },
                  },
              });

              const headers = document.querySelectorAll(".accordion-header");

              headers.forEach((header) => {
                header.addEventListener("click", () => {
                  // Tüm içerikleri kapat
                  headers.forEach((h) => {
                    if (h !== header) {
                      h.classList.remove("active");
                      h.nextElementSibling.style.display = "none";
                    }
                  });
          
                  // Tıklanan başlığı aç/kapat
                  const content = header.nextElementSibling;
                  const isActive = header.classList.contains("active");
          
                  if (isActive) {
                    header.classList.remove("active");
                    content.style.display = "none";
                  } else {
                    header.classList.add("active");
                    content.style.display = "block";
                  }
                });
              });
              
              const counters = document.querySelectorAll(".counter");

              function startCounters() {
                counters.forEach((counter) => {
                  counter.innerText = "0";
              
                  const updateCounter = () => {
                    const target = +counter.getAttribute("data-target");
                    const c = +counter.innerText.replace("+", ""); // Önceki + işaretini kaldır
              
                    const increment = target / 1000;
              
                    if (c < target) {
                      counter.innerText = `+${Math.ceil(c + increment)}`;
                      setTimeout(updateCounter, 1);
                    } else {
                      counter.innerText = `+${target}`;
                    }
                  };
              
                  updateCounter();
                });
              }
              
          
              // İlk sayfa yüklenmesinde çalıştır
              startCounters();
          
              // Scroll olayı için yeniden başlat
              let isScrolling;
              window.onscroll = () => {
                clearTimeout(isScrolling); // Daha önceki kaydırma olayını temizle
                isScrolling = setTimeout(() => {
                  startCounters(); // Counter'ı yeniden başlat
                }, 100); // Scroll durduktan 100ms sonra tetikle
              };
 
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
 
const mh = document.querySelector('.mhetrafli')
const mhX = document.querySelector('.mh-x-mark')


mh.addEventListener('click', function () {
  document.querySelector('.mhdetails').classList.add('aktiv')
    })
mhX.addEventListener('click', function () {
    document.querySelector('.mhdetails').classList.remove('aktiv')
      })


      const vergi = document.querySelector('.vergietrafli')
      const vergiX = document.querySelector('.vergi-x-mark')
      
      
      vergi.addEventListener('click', function () {
        document.querySelector('.vergidetails').classList.add('aktiv')
          })
      vergiX.addEventListener('click', function () {
          document.querySelector('.vergidetails').classList.remove('aktiv')
            })
      

            const audit = document.querySelector('.auditetrafli')
            const auditX = document.querySelector('.audit-x-mark')
            
            
            audit.addEventListener('click', function () {
              document.querySelector('.auditdetails').classList.add('aktiv')
                })
            auditX.addEventListener('click', function () {
                document.querySelector('.auditdetails').classList.remove('aktiv')
                  })
            

                  const hr = document.querySelector('.hretrafli')
                  const hrX = document.querySelector('.hr-x-mark')
                  
                  
                 hr.addEventListener('click', function () {
                    document.querySelector('.hrdetails').classList.add('aktiv')
                      })
                  hrX.addEventListener('click', function () {
                      document.querySelector('.hrdetails').classList.remove('aktiv')
                        })


            const ucot = document.querySelector('.ucotetrafli')
            const ucotX = document.querySelector('.ucot-x-mark')
            
            
            ucot.addEventListener('click', function () {
              document.querySelector('.ucotdetails').classList.add('aktiv')
                })
            ucotX.addEventListener('click', function () {
                document.querySelector('.ucotdetails').classList.remove('aktiv')
                  })


            const huquq = document.querySelector('.huquqetrafli')
            const huquqX = document.querySelector('.huquq-x-mark')
            
            
            huquq.addEventListener('click', function () {
              document.querySelector('.huquqdetails').classList.add('aktiv')
                })
            huquqX.addEventListener('click', function () {
                document.querySelector('.huquqdetails').classList.remove('aktiv')
                  })

// trainings
const trainingCards = document.querySelectorAll('.training-left .card');
const trainingSections = document.querySelectorAll('.training-right .training1, .training-right .training2, .training-right .training3');

trainingCards.forEach((card, index) => {
  card.addEventListener('click', function () {
    // Bütün training bölmələrini bağla
    trainingSections.forEach(section => {
      section.classList.remove('aktiv');
    });

    // Yalnız tıklanan kartın karşılığı olan training bölməsini aç
    const activeSection = document.querySelector(`.training-right .training${index + 1}`);
    if (activeSection) {
      activeSection.classList.add('aktiv');
    }
  });
});

// Kapatma düymələri üçün
const closeButtons = document.querySelectorAll('.training-right .fa-xmark');

closeButtons.forEach(closeBtn => {
  closeBtn.addEventListener('click', function () {
    const parentSection = this.closest('.training1, .training2, .training3');
    if (parentSection) {
      parentSection.classList.remove('aktiv');
    }
  });
});

var swiper1 = new Swiper(".trainingSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});