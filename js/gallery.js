// Activates the image gallery.
//   The main task is to attach and event lister to each image in the gallery
//   and respond appropriately on click.

function activateGallery() {
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImage  = document.querySelector("#gallery-photo > img");

	thumbnails.forEach(function(thumbnail) {
		thumbnail.addEventListener("click", function() {
			// Set clicked image as main image.
			let newImageSrc = thumbnail.dataset.largeVersion;
			let newImageAlt = thumbnail.dataset.title;
			mainImage.setAttribute("src", newImageSrc);
			mainImage.setAttribute("alt", newImageAlt);

			// Change which image is current.
			let currentClass = "current";
			document.querySelector(".current").classList.remove(currentClass);
			thumbnail.parentNode.classList.add(currentClass);

			// Update the image info.
			let galleryInfo = document.querySelector("#gallery-info");
			let title       = galleryInfo.querySelector(".title");
			let description = galleryInfo.querySelector(".description");

			title.innerHTML = thumbnail.dataset.title;
			description.innerHTML = thumbnail.dataset.description;
		});
	});
}