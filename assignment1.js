
let pet1 = {

    name: "Zaza",
    age: 2,
    gender: "m",
    service: false,
    breed: "Dog"
}

let pet2 = {

    name: "Lala",
    age: 3,
    gender: "f",
    service: true,
    breed: "Cat"
}
let pet3 = {

    name: "Gaga",
    age: 1,
    gender: "f",
    service: false,
    breed: "Bird"
}

let pets= [pet1, pet2, pet3];

for(i=0; i<=2; i++) {

document.getElementById("petName").textContent += pets[i].name + " ";

}

function petCount(){
        document.getElementById("petCount").textContent = pets.length;
}
