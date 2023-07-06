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

galleryList.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }
        const targetItem = event.target.dataset.source;
    
        const instance = basicLightbox.create(`
        <img src="${targetItem}" width="800" height="600">
    `)
    instance.show() 

    galleryList.addEventListener("keydown", (event) => {
        if(event.code === "Escape") {
            instance.close()
        }
    })
    }
    


console.log(galleryItems);
