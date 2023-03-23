let images = [
    {title: "Open", url: "./assets/1.jpg"}, 
    {title: "Can't Stop the Dance", url:"./assets/2.jpg"},
    {title: "We Love to Piss", url: "./assets/3.jpg"},
    {title: "No Horses", url: "./assets/4.jpg" }, 
    {title: "Bunghole Liquors", url: "./assets/5.jpg" }, 
    {title: "Questions & Answers", url: "./assets/6.jpg" }, 
    {title: "Free Hand Design", url: "./assets/7.jpg" }, 
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