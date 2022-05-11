const result = document.getElementById('results');

function animalFacts() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
        .then(res => res.json())
        .then(data => {
            result.innerHTML =
                `<p>${data.name} </p>
                <img src='${data.image_link}' width='350' />
                <p>${data.habitat}</p>
                <p>${data.diet}</p>
                <p>${data.animal_type}</p>
            `
        })
};