const btn = document.querySelector('#submit');

btn.addEventListener('click', (e) => {
    
    e.preventDefault();

    const weight = document.querySelector('#card-weight');
    const valueWeight = Number(weight.value);

    const height = document.querySelector('#card-height');
    const valueHeight = Number(height.value);

    imc(valueWeight, valueHeight);

});

function imc(weight, height) {
    let imc = weight / (height * height);

    console.log(imc);
    
    if (imc < 18.5) {
        console.log('Abaixo do peso')
    } else if (imc >= 18.5 && imc < 25.0) {
        console.log('Peso ideal')
    } else if (imc >= 25.0 && imc < 30.0) {
        console.log('Acima do peso')
    } else if (imc >= 30.0 && imc < 35.0) {
        console.log('Obesidade grau I')
    } else if (imc >= 35.0 && imc < 40.0) {
        console.log('Obesidade grau II')
    } else if (imc >= 40.0) {
        console.log('Obesidade grau III')
    }
}