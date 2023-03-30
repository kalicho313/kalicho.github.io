


let images = [
    {title: "first", url: "0.png"}, 
    {title: "intro", url:"1.png"},
    {title: "red", url: "2.png"},
    {title: "orange-yellow", url: "6.png" }, 
    {title: "green", url: "3.png" }, 
    {title: "blue-purple", url: "4.png" }, 
    {title: "white", url: "5.png" }, 
    {title: "tomato", url: "7.png" }, 
    {title: "bell", url: "8.png" }, 
    {title: "strawberry", url: "9.png" },
    {title: "cherry", url: "10.png" }, 
    {title: "watermelon", url: "11.png" }, 
    {title: "banana", url: "12.png" },
    {title: "carrot", url: "13.png" }, 
    {title: "orange", url: "14.png" }, 
    {title: "pumpkin", url: "15.png" }, 
    {title: "pineapple", url: "16.png" },
    {title: "leafy", url: "17.png" }, 
    {title: "broccoli", url: "18.png" }, 
    {title: "avocado", url: "19.png" },
    {title: "greenpea", url: "20.png" },
    {title: "cucumber", url: "21.png" }, 
    {title: "blueberry", url: "22.png" }, 
    {title: "eggplant", url: "23.png" },
    {title: "grape", url: "24.png" }, 
    {title: "blackberry", url: "25.png" }, 
    {title: "plum", url: "26.png" },
    {title: "yogurt", url: "27.png" },
    {title: "oatmeal", url: "28.png" }, 
    {title: "ginger", url: "29.png" }, 
    {title: "cauliflower", url: "30.png" },
    {title: "garlic", url: "31.png" }, 
    {title: "winner", url: "32.png" }, 


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