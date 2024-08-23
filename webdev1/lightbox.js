const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
let currentIndex = 0 

const lightboxImages = []; 

images.forEach((image, index) => {
  
  if (image.closest('#linkedinbutton') || image.closest('#githubbutton')) {
    return; 
  }

  lightboxImages.push(image); 
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    currentIndex = lightboxImages.indexOf(image); 
    displayImage(currentIndex)
  })
})

function displayImage(index) {
  const img = document.createElement('img')
  img.src = lightboxImages[index].src
  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild)
  }
  lightbox.appendChild(img)
}

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})


document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('active')) return

  if (e.key === 'ArrowRight') {
    
    currentIndex = (currentIndex + 1) % lightboxImages.length
    displayImage(currentIndex)
  } else if (e.key === 'ArrowLeft') {
   
    currentIndex = (currentIndex - 1 + lightboxImages.length) % lightboxImages.length
    displayImage(currentIndex)
  } else if (e.key === 'Escape') {
    
    lightbox.classList.remove('active')
  }
})
