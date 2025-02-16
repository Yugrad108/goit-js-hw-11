import axios from 'axios';  

// Ключ API для доступа к Pixabay
const API_KEY = '11539560-6ff438bd7cc613d70e4d35abc';  
// Базовый URL для запросов к Pixabay API
const BASE_URL = 'https://pixabay.com/api/';  

// Функция для получения изображений по заданному запросу
export function fetchImages(query) {  
  // Параметры запроса
  const params = {  
    key: API_KEY,  
    q: query,  
    image_type: 'photo',  
    orientation: 'horizontal',  
    safesearch: true,  
  };  

  // Создание URL с параметрами
  const url = `${BASE_URL}?${new URLSearchParams(params)}`;  

  // Запрос к API с использованием axios
  return axios  
    .get(url)  
    .then(response => response.data.hits)  // Возврат массива изображений
    .catch(error => {  
      console.error('Ошибка при получении данных из Pixabay API:', error);  // Логирование ошибки
      throw error;  // Проброс ошибки
    });  
}


// // Импортируем модуль axios для выполнения HTTP-запросов
// import axios from 'axios';

// // Константа API_KEY хранит ключ API для доступа к Pixabay
// const API_KEY = '11539560-6ff438bd7cc613d70e4d35abc';
// // Константа BASE_URL хранит базовый URL для запросов к Pixabay API
// const BASE_URL = 'https://pixabay.com/api/';

// // Функция fetchImages выполняет запрос к Pixabay API для получения изображений
// export function fetchImages(query) {
//   // Формируем URL с необходимыми параметрами для запроса
//   const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

//   // Выполняем GET-запрос к API и обрабатываем ответ
//   return axios
//     .get(url)
//     .then(response => response.data.hits) // Возвращаем полученные изображения
//     .catch(error => {
//       // Логируем ошибку при выполнении запроса и пробрасываем её дальше
//       console.error('Error fetching data from Pixabay API:', error);
//       throw error;
//     });
// }
