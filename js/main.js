window.addEventListener('DOMContentLoaded', (e)=>{
    console.log('Contenido del DOM cargado');
    let arrLi = document.querySelectorAll('li');
    console.log(arrLi);

    const textArea = document.querySelector('textarea');
    console.log(textArea);
    let textoColocar = document.querySelector('strong').textContent;
    console.log(textoColocar);
    
    textArea.placeholder = `${textoColocar}`

    let arrInput = document.querySelectorAll('input');
    let button = document.querySelector('button');
    console.log(button);
    
    //Desactivar Disabled al escribir en textArea
    textArea.addEventListener('input', ()=>{
        arrInput.forEach( (ele) =>{
            ele.removeAttribute('disabled');
        })
        button.removeAttribute('disabled');
    })

    //***** 5 botones superiores ... *****
    let divDestino = document.querySelector('#destino');
    
    arrInput[0].addEventListener('click', (e)=>{
        e.preventDefault();
        console.log(`TEXTAREA CONTENIDO: ${textArea.value}`)
        divDestino.textContent = textArea.value;
    })
    
    arrInput[1].addEventListener('click', ()=>divDestino.textContent = divDestino.textContent + ` ${textArea.value}`);
    arrInput[2].addEventListener('click', ()=>{
        for (let i = 0; i < 5; i++) {
            divDestino.textContent = divDestino.textContent + ` ${textArea.value}`;
        }
    })
    arrInput[3].addEventListener('click', ()=>{
        for (let i = 0; i < 10; i++) {
            divDestino.textContent = divDestino.textContent + ` ${textArea.value}`;
        }
    })
    arrInput[4].addEventListener('click', ()=>{
        let aux = prompt('Indique la cantidad de veces que desea agregar');
        for (let i = 0; i < aux; i++){
            divDestino.textContent = divDestino.textContent + ` ${textArea.value}`
        }
    });

    //Botones inferiores, FIN
    arrInput[5].addEventListener('click', ()=>{
        divDestino.textContent = '';
    })
    arrInput[6].addEventListener('click', ()=>{
        divDestino.textContent = divDestino.textContent.toUpperCase();
    })
    button.addEventListener('click', ()=>{
        divDestino.textContent = divDestino.textContent.toLowerCase();
    })

    //Punto 7 FIN.
    arrLi.forEach(element => {
        element.insertAdjacentText("afterbegin", '[Ok]')
    });
})

// agregar.addEventListener('click', agregarCB(5));
    // function agregarCB(veces){
    //     for (let i = 0; i < veces; i++) {
    //         divDestino.textContent = divDestino.textContent + ` ${textArea.value}`;
    //     }
    // };


    // function agregar2(){
    //     for (let i = 0; i < 5; i++) {
    //         divDestino.textContent = divDestino.textContent + ` ${textArea.value}`;
    //     }
    // };