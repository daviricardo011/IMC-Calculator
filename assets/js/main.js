const form = document.querySelector('#formulario'); //seleciona o formulario do index.html


form.addEventListener('submit', function (event) {
    event.preventDefault();
    const imputPeso = event.target.querySelector('#peso');
    const imputAltura = event.target.querySelector('#altura');

    const peso = Number(imputPeso.value);
    const altura = Number(imputAltura.value);

    if (!peso && !altura){
        setResultado("Peso e Altura inválidos", false);
        return;
    }
    if (!peso){
        setResultado("Peso inválido", false);
        return;
    }
    if (!altura){
        setResultado("Altura inválida", false);
        return;
    }
    const imc = calculoIMC(peso, altura);
    const categoria = getCategoria (imc);
    
    const msg = "Seu IMC é " + imc + ". Você está na categoria: " + categoria + ".";
    setResultado(msg, true);
});



function calculoIMC(peso, altura){
    const imc = Number(peso/(altura**2));
    return imc.toFixed(2); //retorna o imc com duas casas decimais 
}

function getCategoria (imc){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];

    if (imc>=39.9){
        return nivel[5];
    } else if ( imc>=34.9){
        return nivel[4];
    } else if ( imc>=29.9){
        return nivel[3];
    } else if ( imc>=24.9){
        return nivel[2];
    } else if ( imc>=18.5){
        return nivel[1];
    } else if (imc<18.5) {
        return nivel[0];
    }
}

function criaP () {
    const p = document.createElement('p'); //cria um paragrafo
    return p;
}

function setResultado (msg, validacao){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();
    if (validacao){
        p.classList.add('resultado-green');
    } else {
        p.classList.add('resultado-red');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
    
}