const divInj = document.getElementById('injetora')
const  inputValor = document.getElementById('input')
const inputAltura = document.getElementById('aut')
const inputPeso = document.getElementById('pes')

const caracteresPermitidos = ['0','1','2','3','4','5','6','7','8','9','.']

inputAltura.addEventListener('keydown',function(ev){
    ev.preventDefault()
    if(caracteresPermitidos.includes(ev.key)){
        inputAltura.value += ev.key
        return
    }
    if(ev.key === 'Backspace'){
        inputAltura.value = inputAltura.value.slice(0,-1)
    }
    if(ev.key === 'Enter'){
        calcular()
    }
})
inputPeso.addEventListener('keydown',function(ev){
    ev.preventDefault()
    if(caracteresPermitidos.includes(ev.key)){
        inputPeso.value += ev.key
        return
    }
    if(ev.key === 'Backspace'){
        inputPeso.value = inputPeso.value.slice(0,-1)
    }
    if(ev.key === 'Enter'){
        calcular()
    }
})
document.getElementById('buttonCalcular').addEventListener('click',calcular)

function calcular(){
    let calcularBtn = document.getElementById('buttonCalcular')
    calcularBtn.disabled = true
    let altura = parseFloat(inputAltura.value)
    let altoQuad = Math.pow(altura,altura)
    let peso = parseFloat(inputPeso.value)
    const resultado = peso/altoQuad
    const h2 = document.createElement('h2')
    h2.innerText = resultado.toFixed(2)
    h2.className = 'h2Result'
    divInj.append(h2)
    postaimg(resultado)
}

function postaimg(peso){
    const pesoAtual = peso.toFixed(2)
    let section = document.getElementById('sectImg')
    let img = document.createElement('img')
    img.id="img"

    if (pesoAtual < 18.5){
        img.src="./img/grave_magreza.jpg"
        img.alt="magreza grave"
        section.append(img)
    }else if(pesoAtual >= 18.6 && pesoAtual <= 24.9){
        img.src="./img/normal_peso.jpg"
        img.alt="peso normal"
        section.append(img)
    }else if(pesoAtual >= 25.0 && pesoAtual <= 29.9){
        img.src="./img/sobrepeso.jpg"
        img.alt="sobrepeso"
        section.append(img)
    }else if(pesoAtual >= 30.0 && pesoAtual <= 34.9){
        img.src="./img/obesidade.jpg"
        img.alt="obesidade"
        section.append(img)
    }else if(pesoAtual >= 35.0 && pesoAtual < 39.9){
        img.src="./img/obesidade_grave.jpg"
        img.alt="obesidade_grave"
        section.append(img)
    }else{
        img.src="./img/obesidade_grave.jpg"
        img.alt="obesidade_grave"
        section.append(img)
    }
}
document.getElementById('limpar').addEventListener('click',function(){
    document.getElementById('aut').value = ''
    document.getElementById('pes').value = ''
    document.querySelector('.h2Result').remove()
    document.getElementById('img').remove()
})