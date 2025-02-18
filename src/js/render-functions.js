import SimpleLightbox from 'simplelightbox';  
import 'simplelightbox/dist/simple-lightbox.min.css';  

let lightbox; // Глобальная переменная для хранения экземпляра SimpleLightbox  

function initializeLightbox() {  
  lightbox = new SimpleLightbox('.gallery a', {  
    captionsData: 'alt',  
    captionDelay: 250,  
    captionPosition: 'bottom',  
    overlayOpacity: 1,  
    showCounter: false,  
  });  
}  

export function renderGallery(images) {  
  const gallery = document.querySelector('#gallery');  
  gallery.innerHTML = '';  

  const markup = images.map(createGalleryItem).join('');  
  gallery.innerHTML = markup;  

  // Инициализация lightbox только один раз  
  if (!lightbox) {  
    initializeLightbox();  
  } else {  
    lightbox.refresh(); // Обновляем lightbox при новых изображениях  
  }  
}  

function createGalleryItem({  
  largeImageURL,  
  webformatURL,  
  tags,  
  likes,  
  views,  
  comments,  
  downloads,  
}) {  
  return `  
    <a href="${largeImageURL}" class="gallery-item">  
      <img src="${webformatURL}" alt="${tags}" />  
      <div class="image-info">  
        <p><strong>Likes</strong> ${likes}</p>  
        <p><strong>Views</strong> ${views}</p>  
        <p><strong>Comments</strong> ${comments}</p>  
        <p><strong>Downloads</strong> ${downloads}</p>  
      </div>  
    </a>`;  
}


//TODO ЗАУВАЖЕННЯ МЕНТОРА !!! вынести инициализацию SimpleLightbox в глобальный контекст:

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// export function renderGallery(images) {
//   const gallery = document.querySelector('#gallery');
//   gallery.innerHTML = '';

//   const markup = images.map(createGalleryItem).join('');
//   gallery.innerHTML = markup;

//   initializeLightbox();
// }

// function createGalleryItem({  
//   largeImageURL,  
//   webformatURL,  
//   tags,  
//   likes,  
//   views,  
//   comments,  
//   downloads,  
// }) {  
//   return `  
//     <a href="${largeImageURL}" class="gallery-item">  
//       <img src="${webformatURL}" alt="${tags}" />  
//       <div class="image-info">  
//         <p><strong>Likes</strong> ${likes}</p>  
//         <p><strong>Views</strong> ${views}</p>  
//         <p><strong>Comments</strong> ${comments}</p>  
//         <p><strong>Downloads</strong> ${downloads}</p>  
//       </div>  
//     </a>`;  
// }  

// function initializeLightbox() {  
//   const lightbox = new SimpleLightbox('.gallery a', {  // 
//     captionsData: 'alt',  
//     captionDelay: 250,  
//     captionPosition: 'bottom',  
//     overlayOpacity: 1,  
//     showCounter: false,  
//   });  

//   lightbox.refresh();  
// }
