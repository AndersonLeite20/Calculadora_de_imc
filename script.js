const  inputValor = document.getElementById('input')
const inputAltura = document.getElementById('aut')
const inputPeso = document.getElementById('pes')

const caracteresPermitidos = ['0','1','2','3','4','5','6','7','8','9','.']

document.querySelectorAll('buttonBtn').forEach(function(buttonBtnTodos){
    buttonBtnTodos.addEventListener('click',function(){
        const valor = buttonBtnTodos.dataset.value
        inputAltura += valor
        console.log(inputAltura)
    })
})
inputAltura.addEventListener('keydown',function(ev){
    ev.preventDefault()
    if(caracteresPermitidos.includes(ev.key)){
        inputAltura.value += ev.key
        console.log(inputAltura.value)
        return
    }
})
inputPeso.addEventListener('keydown',function(ev){
    ev.preventDefault()
    if(caracteresPermitidos.includes(ev.key)){
        inputPeso.value += ev.key
        return
    }
    if()
})
document.getElementById('limpar').addEventListener('click',function(){
    document.getElementById('aut').value = ''
    document.getElementById('pes').value = ''
})