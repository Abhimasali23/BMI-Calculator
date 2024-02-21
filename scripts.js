const form = document.querySelector('form')

// This use case will give you empty 
// const height = parseInt(document.querySelector("#height").value);
// const weight = parseInt(document.querySelector("#weight").value);


form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
      results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const BMI = (weight / ((height * height)/10000)).toFixed(2)
        // show the results
        results.innerHTML = `<span>${BMI}</span>`;

        const h2 = document.createElement('h2')
        h2.style.color = "lightgreen"

        if (BMI <= 18.6) {     
            h2.innerText = "Under Weight"
            results.appendChild(h2)                  
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            h2.innerText = "Normal Weight";
            results.appendChild(h2);               
        } else {
            h2.innerText = "Over Weight";
            results.appendChild(h2);               
        }
    }
    


})
