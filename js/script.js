const landscape = document.querySelector(".album .top");
const imgRoll = document.querySelector(".album .bottom");

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


printImgInRoll();
setId(cities)
console.log(getCityById(1));

function setId(collection){
    collection.forEach((city, index) => city.id = index);
}

function getCityById(id){
    return cities.filter((city) => city.id === id);
}

function printImgInRoll(){
    cities.forEach((city) => imgRoll.innerHTML += `<div class="img-preview">
    <img src="/img/${city.img}" alt=""></div>`)
    
}

