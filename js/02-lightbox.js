import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const imagesMarkup = createImgsMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imagesMarkup);


function createImgsMarkup(galleryItems) {
return galleryItems.map(({preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
}).join('');
};

// galleryList.addEventListener('click', onGalleryListClick);

// function onGalleryListClick(event) {
//     event.preventDefault();

// // if(!event.target.classList.contains('gallery__image')) {
// //     return;
// // }


// const currentElement = event.target;
// const parentImage = currentElement.closest('.gallery');

// console.log(currentElement.getAttribute("data-source"));

// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });
// lightbox.open();
// };


// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// Do something…
// });

let gallery = new SimpleLightbox('.gallery a', { /* options */ });
gallery.on('show.simplelightbox', function(event) {
    console.log(event);
});




console.log(galleryItems);
