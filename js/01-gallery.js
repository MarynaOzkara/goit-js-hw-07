import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description}) => 
                 `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                  </li>
                 `
).join('');
galleryList.insertAdjacentHTML('beforeend', markup);

galleryList.addEventListener('click', selectedItem);
function selectedItem(event) {
    event.preventDefault();

    const targetItem = event.target.dataset.source;

    console.log(targetItem);  
}

console.log(galleryItems);
