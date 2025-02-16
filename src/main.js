import { fetchImages } from './js/pixabay-api.js';  
import { renderGallery } from './js/render-functions.js';  
import iziToast from 'izitoast';  
import 'izitoast/dist/css/iziToast.min.css';  

// Объект с ссылками на DOM-элементы  
const refs = {  
  form: document.querySelector('#search-form'),  
  input: document.querySelector('#search-input'),  
  loader: document.querySelector('#loader'),  
  gallery: document.querySelector('#gallery'),  
};  

 
// Функция для отображения загрузчика  
function showLoader() {  
  refs.loader.classList.remove('hidden');  
}  

// Функция для скрытия загрузчика  
function hideLoader() {  
  refs.loader.classList.add('hidden');  
}  


// Функция для показа ошибки  
function showError(message) {  
  iziToast.error({  
    title: 'Error',  
    message,  
    position: 'topRight',  
    timeout: 2000,  
  });  
}  

// Функция для показа информационного сообщения  
function showInfo(message) {  
  iziToast.info({  
    title: '',  
    message,  
    position: 'topRight',  
    timeout: 3000,  
  });  
}  


// Функция-обработчик события отправки формы  
function handleFormSubmit(event) {  
  event.preventDefault();  
  const query = refs.input.value.trim();  

  // Проверка на пустой запрос  
  if (!query) {  
    showError('Please enter a search term!');  
    return;  
  }  

  // Получение изображений с отображением загрузчика  
  fetchImagesWithLoader(query);
  // Очистка поля ввода после отправки  
  refs.input.value = '';  
}  

// Функция для получения изображений с отображением загрузчика  
function fetchImagesWithLoader(query) {  
  // Отображение загрузчика  
  showLoader();  

  // Получение изображений  
  fetchImages(query)  
    .then(images => {  
      // Скрытие загрузчика  
      hideLoader();  
      // Обработка ответа  
      handleImageFetchResponse(images);  
    })  
    .catch(error => {  
      // Скрытие загрузчика  
      hideLoader();  
      // Показ ошибки  
      showError('Something went wrong! Please try again later.');  
      // Логирование ошибки  
      console.error('Error fetching images:', error);  
    });  
}  

// Функция-обработчик ответа  после получения изображений  
function handleImageFetchResponse(images) {  
  // Если изображений нет, то показываем информационное сообщение  
  if (images.length === 0) {  
    showInfo('Sorry, there are no images matching your search query. Please try again!');  
  } else {  
    // Иначе отображаем галерею  
    renderGallery(images);  
  }  
}  


// Добавление обработчика события отправки формы  
refs.form.addEventListener('submit', handleFormSubmit);


// import { fetchImages } from './js/pixabay-api.js';
// import { renderGallery } from './js/render-functions.js';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const refs = {
//   form: document.querySelector('#search-form'),
//   input: document.querySelector('#search-input'),
//   loader: document.querySelector('#loader'),
//   gallery: document.querySelector('#gallery'),
// };

// function showLoader() {
//   refs.loader.classList.remove('hidden');
// }

// function hideLoader() {
//   refs.loader.classList.add('hidden');
// }

// refs.form.addEventListener('submit', event => {
//   event.preventDefault();
//   const query = refs.input.value.trim();

//   if (!query) {
//     iziToast.error({
//       title: 'Error',
//       message: 'Please enter a search term!',
//       position: 'topRight',
//       timeout: 2000,
//     });
//     return;
//   }

//   showLoader();

//   fetchImages(query)
//     .then(images => {
//       hideLoader();

//       if (images.length === 0) {
//         iziToast.info({
//           title: 'Oops!',
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           position: 'topRight',
//           timeout: 3000,
//         });
//       } else {
//         renderGallery(images);
//       }
//     })
//     .catch(error => {
//       hideLoader();
//       iziToast.error({
//         title: 'Error',
//         message: 'Something went wrong! Please try again later.',
//         position: 'topRight',
//         timeout: 3000,
//       });
//       console.error('Error fetching images:', error);
//     });
// });