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

 function closeAllActiveCards() {
  document.querySelector('.bizkimik').classList.remove('aktiv');
  document.querySelector('.meqsedimiz').classList.remove('aktiv');
  document.querySelector('.vakansiya').classList.remove('aktiv');
  document.querySelector('.partners').classList.remove('aktiv');
}
document.addEventListener('click', function (e) {
  // Eğer tıklanan element .hg-card1, .hg-card2, .hg-card3 veya .hg-card4 değilse, tüm kartları kapat
  if (!e.target.closest('.hg-card1') && !e.target.closest('.hg-card2') && !e.target.closest('.hg-card3') && !e.target.closest('.hg-card4')) {
    closeAllActiveCards();
  }
});

 
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

function closeAllDetails() {
  document.querySelector('.mhdetails').classList.remove('aktiv');
  document.querySelector('.vergidetails').classList.remove('aktiv');
  document.querySelector('.auditdetails').classList.remove('aktiv');
  document.querySelector('.hrdetails').classList.remove('aktiv');
  document.querySelector('.ucotdetails').classList.remove('aktiv');
  document.querySelector('.huquqdetails').classList.remove('aktiv');
}

document.addEventListener('click', function (e) {
  // Eğer tıklanan element kartların dışındaki bir elementse, açık olan tüm kartları kapat
  if (!e.target.closest('.mhetrafli') && !e.target.closest('.vergietrafli') && !e.target.closest('.auditetrafli') && !e.target.closest('.hretrafli') && !e.target.closest('.ucotetrafli') && !e.target.closest('.huquqetrafli')) {
    closeAllDetails();
  }
});

 
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

// slider
var descriptions = {
  0: `+15 year experience, Audit license 
15 ildən çox təcrübəsində müxtəlif fəaliyyət sahələri üzrə, baş mühasib, maliyyə departament dr. Audit departament dr. və Auditor kimi fəaliyyət göstərmişdir. 
Dəfələrlər səyyar vergi yoxlamalarında şirkətləri təmsil etmiş, vergi və maliyyə-muhasibatlıq sahəsində uçot sistemləri qurmuşdur.
`,
  1: `+10 year experience, PMS
2014 -ci ildən mühasib və baş mühasib olaraq bir necə böyük şirkətlərdə çalışmışdır. Ümimilikdə, idxal-ixrac, xidmət, satış, istehsalat müəsisələrində praktik olaraq muhasibat uçotnu aparmışdır. 
 
`,
  2: `+15 year experience, SHRM-CP, PMI
İnsan resursları üzrə şöbə rəhbəri vəzifəsində 15 ildən çox təcrübəyə malik olan Dünya xanım, İstanbul Esenyurt Üniversitesi “kişisel gelişim ve eğitim”, “İnsan resurslarının idarəedilməsi” (SHRM-CP), “Achieving Happiness and Success” (PMI), AR Ədillə Akademiyası “Mediator” və s kimi sertifikatlar və əlavə təhsilə yiyələnmişdir. Həmçinin özəl və dövlət sektorlarıda daxil olmaqla AR Ali məhkəmədə, Vergilər Nazirliyində və s təlimlər vermişdir.`,
  3: `+15 year experience, MBA, PMS
Lokal və xarici (Amerika Birləşmiş Ştatlarında) təhsil və təcrübəyə malik olub 15 ildən çox mühasib və baş mühasib, maliyyə dr. olaraq bir necə böyük şirkətlərdə çalışmışdır. Ümimilikdə, bank, idxal-ixrac, tikinti, xidmət, satış, istehsalat müəsisələrində praktik olaraq muhasibat uçotnu aparmışdır. 
`
};

var trainingswiper = new Swiper(".trainingSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      let activeIndex = this.realIndex; // Gerçek aktif indexi al
      document.getElementById("trainer-description").innerText = descriptions[activeIndex];
    }
  }
});

