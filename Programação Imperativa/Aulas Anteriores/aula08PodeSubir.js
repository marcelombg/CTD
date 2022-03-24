function podeSubir(altura, acompanhante) {
  if (altura >= 1.40 && altura <= 2.00) {
    return console.log('Acesso autorizado')
  } else if (altura >= 1.20 && altura <= 1.40 && acompanhante) {
    return console.log('Acesso autorizado com acompanhante')
  } else if (altura < 1.20) {
    return console.log('Acesso negado por ter menos de 1.20')
  } else if (altura > 2.00) {
    return console.log('Altura acima do permitido')
  } else {
    return console.log('Acesso negado por não ter acompanhante')
  }
}

podeSubir(1.2, false)