const btn = document.querySelector('#submit');

btn.addEventListener('click', (e) => {
    
    e.preventDefault();

    const weight = document.querySelector('#card-weight');
    const valueWeight = Number(weight.value);

    const height = document.querySelector('#card-height');
    const valueHeight = Number(height.value);

    imc(valueWeight, valueHeight);

});

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#submit");
      
      btn.click();
    }
  });

function imc(weight, height) {
    let imc = weight / (height * height);
    const resultIMC = document.querySelector('#result-imc')
    const result = document.querySelector('#result');

    
    if(weight != 0 && height != 0) {
        resultIMC.innerHTML = imc.toFixed(2);

        if (imc < 18.5) {
            result.innerHTML = 'Abaixo do peso'
        } else if (imc >= 18.5 && imc < 25.0) {
            result.innerHTML = 'Peso ideal' 
        } else if (imc >= 25.0 && imc < 30.0) {
            result.innerHTML = 'Acima do peso';
        } else if (imc >= 30.0 && imc < 35.0) {
            result.innerHTML = 'Obesidade grau I';
        } else if (imc >= 35.0 && imc < 40.0) {
            result.innerHTML = 'Obesidade grau II';
        } else if (imc >= 40.0) {
            result.innerHTML = 'Obesidade grau III';
        }
    } else {
        resultIMC.innerHTML = '';
        result.innerHTML = '';
        result.innerHTML = 'Digite o peso e altura';    
    };  
};