function calcular (type, value) {
  if (type === 'action') {
    if(value === 'c') {
      document.getElementById('resultado').value = ''
    }

    if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.') {
      document.getElementById('resultado').value += value
    }

    if (value === '=') {
      var valorCampo = eval(document.getElementById('resultado').value)
      document.getElementById('resultado').value = valorCampo
    }

  } else if (type === 'value') {
    document.getElementById('resultado').value += value
  }

}