let images = [
    {title: "red", url: "BG-color2_01.webp"}, 
    {title: "orange/yellow", url:"download (1).png"},
    {title: "green", url: "Emerald-green-painted-swatch.jpeg"},
    {title: "blue", url: "Solid_blue.svg.png" }, 
    {title: "white", url: "download.png" }, 
    

]




function generateGalleryItems(images){

const img = document.createElement('img') // creates an image element
img.classList.add('gallery-img') // add a class of gallery-img to the image so we can access it in the css
img.src = images.url //specifies the source of the image to be the url in our images object

const galleryItem = document.createElement("div") // creates a new div called gallery item
galleryItem.appendChild(img); // adds the image into the div

document.querySelector('.gallery').appendChild(galleryItem) // adds the div to the gallery section we added earlier in the html

				

}


images.forEach(generateGalleryItems)
