import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMakeList = galleryItems
  .map((item) => {
    return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>    `;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryMakeList);

// gallery.addEventListener("click", onGalleryOpenModal);

// function onGalleryOpenModal(evt) {
//   evt.preventDefault();
//   evt.preventDefault();
//   const instance = basicLightbox.create(
//     `<img src=${evt.target.dataset.source} />`,
//     {
//       onShow: () => {
//         document.addEventListener("keydown", onEscapeClose);
//       },

//       onClose: () => {
//         document.removeEventListener("keydown", onEscapeClose);
//       },
//     }
//   );

//   instance.show();

//   function onEscapeClose(e) {
//     if (e.key === "Escape") {
//       instance.close();
//     }
//   }
// }
