import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const imagesMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryMarkup(galleryItems){
    return galleryItems.map(({preview, original, description})=>{
        return `<li><a class='gallery__link' href='${original}'>
        <img  class='gallery__image' src ='${preview}' alt ='${description}'>
        </a></li>`;}).join('');
}

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});