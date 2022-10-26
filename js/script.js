const landscape = document.querySelector(".album .top");
const imgRoll = document.querySelector(".album .bottom #carousel");
const btnLeft = document.querySelector(".arrow.left");
const btnRight = document.querySelector(".arrow.right");
const btnSwitchCarousel = document.querySelector("#switch-carousel")

const cities =[
    {
        name: "Perù",
        cityText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        img: "peru.jpg",
    },
    {
        name: "Argentina",
        cityText: " ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Voluptas sit aspernatur aut odit aut fugit",
        img: "argentina.jpg",
    },
    {
        name: "chile",
        cityText: "lain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual",
        img: "chile.jpg",
    },
    {
        name: "Colombia",
        cityText: "cusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
        img: "colombia.jpg",
    },
    {
        name: "Sweden",
        cityText: "so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and wh",
        img: "sweden.jpg",
    }
]


let currentPhotoId = 0;
let iscourselToRight = true;

init();

btnLeft.addEventListener("click", function(){
    cicleCarousel(false)
})

btnRight.addEventListener("click", function(){
    cicleCarousel(true)
})

btnSwitchCarousel.addEventListener("click" , function(){
    
    iscourselToRight = !iscourselToRight;
    
})

setInterval(function(){
    cicleCarousel(iscourselToRight);
}, 2000)


function cicleCarousel(bool){
    removeActive(currentPhotoId);
    cicleCounter(bool);
    setActivePhoto();
    printPhotoById(currentPhotoId);
}

function init(){
    setId(cities)
    printImgInRoll();
    printPhotoById(currentPhotoId);
    setActivePhoto();
    addOnClickSwitchId();
}

function setId(collection){
    collection.forEach((city, index) => city.id = index);
}

function getCityById(id){
    const cityIdArr = cities.filter((city) => city.id === id);
    return cityIdArr[0]
}

function printImgInRoll(){
    cities.forEach((city) => imgRoll.innerHTML += `
    <div class="img-preview">
        <img src="/img/${city.img}" alt=""></div>`);
    
}


//************************************************************************* */
//differenza tra array-like object e array
function addOnClickSwitchId(){
    const previewArr = document.getElementsByClassName("img-preview");

    //Array.from() converte un array-like object in array così da poter usare .forEach()
    const arr =Array.from(previewArr);
    arr.forEach((element , index) => {
        element.addEventListener("click",function(){
            removeActive();
            console.log(this);
            //setta l'indice della foto a quella clickata
            currentPhotoId = cities[index].id;
            setActivePhoto();
            printPhotoById(currentPhotoId);
        })
    })
}

function printPhotoById(id){

    const city = getCityById(id);
    landscape.innerHTML =`
    <img class="sc-img" src="img/${city.img}" alt="${city.name}">
    <div class="abs-text position-absolute text-white text-end "  >
        <h2>${city.name}</h2>
        <p>${city.cityText}</p>
    </div>`
    
}

function setActivePhoto(){
    const scArr = document.getElementsByClassName("img-preview");
    scArr[currentPhotoId].classList.add("active");
}

function cicleCounter(bool){
    const maxCounter = cities.length-1;
    (bool) ? currentPhotoId++ : currentPhotoId--;
    if (currentPhotoId > maxCounter) currentPhotoId = 0;
    else if(currentPhotoId < 0) currentPhotoId = maxCounter;
}

function removeActive(){
    const previewArr = document.getElementsByClassName("img-preview")
    previewArr[currentPhotoId].classList.remove("active");
}

