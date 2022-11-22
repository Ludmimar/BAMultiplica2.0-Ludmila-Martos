function setResultado(value) {
    document.getElementById('resultado').innerHTML = value;
}
function getResultado() {
    return(document.getElementById('resultado').innerHTML);
}
function agregar(valor) { 
    var result = getResultado();
    if (result!='0' || isNaN(valor)) setResultado(result + valor);
    else setResultado(valor);
}
function calcular() {
    var result = eval(getResultado()); 
    setResultado(result);
}
function eliminar() { 
    setResultado(0);
}