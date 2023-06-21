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
      //  calcular()
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
function calcular(){
    let altura = parseFloat(inputAltura.value)
    let altoQuad = Math.pow(altura,altura)
    let peso = parseFloat(inputPeso.value)
    const resultado = peso/altoQuad
    console.log(resultado)
    const h2 = document.createElement('h2')
    h2.innerText = resultado.toFixed(2)
    h2.className = 'h2Result'
    divInj.append(h2)
}
document.getElementById('limpar').addEventListener('click',function(){
    document.getElementById('aut').value = ''
    document.getElementById('pes').value = ''
    document.querySelector('.h2Result').remove()
})