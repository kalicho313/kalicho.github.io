


let images = [
    {title: "first", url: "0.png"}, 
    {title: "intro", url:"1.png"},
    {title: "red", url: "2.png"},
    {title: "orange-yellow", url: "6.png" }, 
    {title: "green", url: "3.png" }, 
    {title: "blue-purple", url: "4.png" }, 
    {title: "white", url: "5.png" }, 
    {title: "Ok, No", url: "./assets/8.jpg" }, 
    {title: "Go Vegan", url: "./assets/9.jpg" }, 
    {title: "Art is Life Ink", url: "./assets/10.jpg" }, 

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