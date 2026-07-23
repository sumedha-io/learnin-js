const form = document.querySelector("form")

//this usecase gives empty because on submit the value has to be stored
//const weight = parseInt(document.querySelector('#weight'))

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value) //string value is converted into int
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height <0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height"
    }
    else if (weight === '' || weight <0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight"
    }
    else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }
})