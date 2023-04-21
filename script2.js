const url = "https://data.cityofnewyork.us/Health/Popular-Baby-Names/25th-nujf";
const main = document.querySelector('main')
const appleArea = document.querySelector('.apple-area')
const bananaArea = document.querySelector('.banana-area')
const catArea = document.querySelector('.cat-area')
const dogArea = document.querySelector('.dog-area')
const eggArea = document.querySelector('.egg-area')
const frogArea = document.querySelector('.frog-area')
const goArea = document.querySelector('.go-area')
const hiArea = document.querySelector('.hi-area')
const itArea = document.querySelector('.it-area')
const juiceArea = document.querySelector('.juice-area')
const ktArea = document.querySelector('.kt-area')
const lolArea = document.querySelector('.lol-area')


let localData = []

const parseData = (data) => {
    // Set up variables for the counts
    let appleArea = 0 // These are `let` because they will change
    let bananaArea = 0
    let catArea = 0
    let dogArea = 0
    let eggArea = 0
    let frogArea = 0
    let goArea = 0
    let hiArea = 0
    let itArea = 0
    let juiceArea = 0
    let ktArea = 0
    let lolArea = 0
    


    // Go through each item in the object
    data.forEach(babyname => {
        const babyname = document.createElement('div')
        babyname.classList.add('babyname-data')
       otherArea.appendChild(babyname)

        if (babyname.spc_common == 'appleArea') appleArea = appleArea+1,apple.appendChild(babyname),babyname.classList.add('apple')
        else if (babyname.spc_common == 'bananaArea') bananaArea = bananaArea+1,banana.appendChild(babyname), babyname.classList.add('banana')
        else if (babyname.spc_common == 'catArea') catArea = catArea+1, catArea.appendChild(babyname),babyname.classList.add('cat') 
        else if (babyname.spc_common == 'dogArea') dogArea = dogArea+1,dogArea.appendChild(babyname), babyname.classList.add('dog')
        else if (babyname.spc_common == 'eggArea') eggArea = eggArea+1, eggArea.appendChild(babyname),babyname.classList.add('egg') 
        else if (babyname.spc_common == 'frogArea') frogArea = frogArea+1, frogArea.appendChild(babyname),babyname.classList.add('frog') 
        else if (babyname.spc_common == 'goArea') goArea = goArea+1, goArea.appendChild(babyname),babyname.classList.add('go') 
        else if (babyname.spc_common == 'hiArea') hiArea = hiArea+1,hiArea.appendChild(babyname), babyname.classList.add('hi')
        else if (babyname.spc_common == 'itArea') itArea = itArea+1, itArea.appendChild(babyname),babyname.classList.add('it') 
        else if (babyname.spc_common == 'juiceArea') juiceArea = juiceArea+1, juiceArea.appendChild(babyname),babyname.classList.add('juice') 
        else if (babyname.spc_common == 'ktArea') ktArea = ktArea+1, ktArea.appendChild(babyname),babyname.classList.add('kt') 
        else if (babyname.spc_common == 'lolArea') lolArea = lolArea+1, lolArea.appendChild(babyname),babyname.classList.add('lol') 

    })

    
    console.log('apple: ' + appleArea)
    console.log('banana: ' + bananaArea)
    console.log('cat: ' + catArea)
    console.log('dog: ' + dogArea)
    console.log('egg: ' + eggArea)
    console.log('frog: ' + frogArea)
    console.log('go: ' + goArea)
    console.log('hi: ' + hiArea)
    console.log('it: ' + itArea)
    console.log('juice: ' + juiceArea)
    console.log('kt: ' + ktArea)
    console.log('lol: ' + lolArea)
}

// Go get the data!
fetch(url + '?$limit=300') // Appends a higher limit; the default is only 1000
    .then(response => response.json())
    .then(data => {
            localData = data // Save the data to our local variable, so we don’t have to re-request
            parseData(localData) // And parse it!
            // console.log(localData)
        })
