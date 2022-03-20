function calcularNotas() {
  var notaDoPrimeiroBimestre = parseFloat(document.getElementById("nota1").value)
  var notaDoSegundoBimestre = parseFloat(document.getElementById("nota2").value)
  var notaDoTerceiroBimestre = parseFloat(document.getElementById("nota3").value)
  var notaDoQuartoBimestre = parseFloat(document.getElementById("nota4").value)
  
  var media = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1)
  
  
  document.getElementById("notaFixada").innerHTML = "Sua média final foi " + media
  
  
  if (media >= 6) {
    document.getElementById("aprovacao").innerHTML = "Parabéns! Você foi aprovado."
  } else {
    document.getElementById("aprovacao").innerHTML = "Infelizmente você foi reprovado."
  }
}