import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const imagesMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryMarkup(galleryItems){
    return galleryItems.map(({preview, original, description})=>{
        return `<a class='gallery__link' href='${original}'>
        <img  class='gallery__image' src ='${preview}' data-source='${original}' alt ='${description}'>
        </a>`;}).join('');
}
galleryList.addEventListener('click', onGalleryItemClick);
function onGalleryItemClick(event){
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return
    }
const instance = basicLightbox.create(`
    <div class="modal">
    <img src='${event.target.dataset.source}'>
    </div>
`)
instance.show()
}
