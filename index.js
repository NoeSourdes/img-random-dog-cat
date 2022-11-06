img = document.getElementById("img")
console.log(img)
const buttonDog = document.getElementById("dog")
const buttonCat = document.getElementById("cat")
let verification

buttonDog.addEventListener('click', () => {
    verification = "dog"
    console.log(verification);

})
buttonCat.addEventListener('click', () => {
    verification = "cat"

})

function start(){
    if(verification==="dog"){
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => img.src = data.message)
            img.style.display = "block"
    }
    if(verification==="cat"){
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(data => img.src = data[0].url)
            img.style.display = "block"
    }
    if(verification !== "cat" && verification !== "dog"){
        alert("Vous n'avez pas sélectionné une catégorie !!")
    }
}