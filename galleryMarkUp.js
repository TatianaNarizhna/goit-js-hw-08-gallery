import gallery from './gallery-items.js';

function createGalleryMarkUp (gallery) {
  return gallery
  .map(({ preview,  original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
}).join('');
}


const galleryContainer = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryMarkUp (gallery);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


galleryContainer.addEventListener('click', onClickPictureContainer);

function onClickPictureContainer (event) {

const originalImg = event.target.dataset.source;

     if(!event.target.classList.contains('.gallery__item')) {
         return;
     }
}



   const lightboxEl = document.querySelector('.js-lightbox')
   const lightboxElImg = lightboxEl.querySelector('.lightbox__image')




