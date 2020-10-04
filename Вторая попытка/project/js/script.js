/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

const promoAdv = document.querySelector('.promo__adv'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');

promoAdv.remove();

promoGenre.textContent = 'Драма';

promoBg.style.cssText = 'background-image: url(img/bg.jpg);';

for (let i = 0; i < movieDB.movies.length; i++) {
    promoInteractiveItem[i].textContent = ` ${i + 1} ${movieDB.movies[i]}`;

}


//*****************Теперь пишем по другому****************//
//const adv = document.querySelectorAll('.promo__adv img'),
//      poster = document.querySelector('.promo__bg'),
//      genre = poster.querySelector('.promo__genre'),
//      movieList = document.querySelector('.promo__interactive-list'); 
//
//adv.forEach(item => {
//    item.remove();
//}); // Лучше этот способ чем тот что снизу
//
//adv.forEach(function (item) {
//    item.remove();
//});
//
//genre.textContent = 'Драма';
//
//poster.style.backgroundImage = 'url("img/bg.jpg")';
//
//movieList.innerHTML = ''; //Очищает элемент
//
//movieDB.movies.sort();
//
//movieDB.movies.forEach((film, i) => {
//    movieList.innerHTML += `
//        <li class="promo__interactive-item">${i + 1} ${film}
//            <div class="delete"></div>
//        </li>
//    `
//});







