import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMakeList = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img
class="gallery__image"
src="${item.preview}"
data-source="${item.original}"
alt="${item.description}"
/>
</a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryMakeList);

gallery.addEventListener("click", onGalleryOpenModal);

function onGalleryOpenModal(evt) {
  evt.preventDefault();
  console.log(evt.target.nodeName);
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src=${evt.target.dataset.source} />`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscapeClose);
      },

      onClose: () => {
        document.removeEventListener("keydown", onEscapeClose);
      },
    }
  );

  instance.show();

  function onEscapeClose(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
}
