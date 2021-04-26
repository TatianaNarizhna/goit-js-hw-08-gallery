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

const lightboxEl = document.querySelector('.lightbox');
const lightboxElImg = document.querySelector('.lightbox__image');
const galleryOverlay = document.querySelector('.lightbox__overlay');

const galleryItem = document.querySelector('gallery__item');
const itemClose = document.querySelector('[data-action="close-lightbox"]');

galleryContainer.addEventListener('click', onClickPictureContainerOpen);
itemClose.addEventListener('click', onCloseModal);


function onClickPictureContainerOpen (event) {

     if(!event.target.classList.contains('.gallery__item')) {
         return;
     }

     lightboxEl.classList.add('is-open'); 
     lightboxElImg.src = event.target.dataset.source;
     lightboxElImg.alt = event.target.alt;

}


function onCloseModal(event) {

  if(event.target.nodeName === 'button') {
    lightboxEl.classList.remove('is-open'); 
    lightboxElImg.src = '';
    lightboxElImg.alt = '';

  }
}






