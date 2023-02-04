import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const imagesMarkup = createImgsMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imagesMarkup);


function createImgsMarkup(galleryItems) {
return galleryItems.map(({preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}).join('');
}


galleryList.addEventListener('click', onGalleryListClick);

function onGalleryListClick(event) {
    event.preventDefault();

if(!event.target.classList.contains('gallery__image')) {
    return;
}

const currentElement = event.target;
const parentImage = currentElement.closest('.gallery');

console.log(currentElement.getAttribute("data-source"));

const instance = basicLightbox.create(`
    <img src="${currentElement.dataset.source}">
`)
instance.show()
};


console.log(galleryItems);
