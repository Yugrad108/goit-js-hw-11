import SimpleLightbox from 'simplelightbox';  
import 'simplelightbox/dist/simple-lightbox.min.css';  

// Функция создает разметку галереи на основе массива изображений
export function renderGallery(images) {  
  // Очищаем контейнер галереи
  const gallery = document.querySelector('#gallery');  
  gallery.innerHTML = '';  

  // Создаем разметку для каждого изображения
  const markup = images.map(createGalleryItem).join('');  
  // Добавляем разметку в контейнер галереи
  gallery.innerHTML = markup;  

  // Инициализируем лайтбокс
  initializeLightbox();  
}  

// Функция создает разметку для одного изображения
function createGalleryItem({  
  largeImageURL,  
  webformatURL,  
  tags,  
  likes,  
  views,  
  comments,  
  downloads,  
}) {  
  // Создаем разметку для одного изображения
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

// Функция инициализирует лайтбокс
function initializeLightbox() {  
  // Создаем экземпляр лайтбокса
  const lightbox = new SimpleLightbox('.gallery a', {  
    captionsData: 'alt',  
    captionDelay: 250,  
    captionPosition: 'bottom',  
    overlayOpacity: 1,  
    showCounter: false,  
  });  

  // Обновляем лайтбокс
  lightbox.refresh();  
}


// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// export function renderGallery(images) {
//   const gallery = document.querySelector('#gallery');
//   gallery.innerHTML = '';
//   const markup = images
//     .map(
//       ({
//         largeImageURL,
//         webformatURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => `
//       <a href="${largeImageURL}" class="gallery-item">
//         <img src="${webformatURL}" alt="${tags}" />
//         <div class="image-info">
//           <p><strong>Likes</strong> ${likes}</p>
//           <p><strong>Views</strong> ${views}</p>
//           <p><strong>Comments</strong> ${comments}</p>
//           <p><strong>Downloads</strong> ${downloads}</p>
//         </div>
//       </a>`
//     )
//     .join('');

//   gallery.innerHTML = markup;

//   const lightbox = new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionDelay: 250,
//     captionPosition: 'bottom',
//     overlayOpacity: 1,
//     showCounter: false,
//   });

//   lightbox.refresh();
// }