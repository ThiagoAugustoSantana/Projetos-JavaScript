function diaUtil (dia) {
switch (dia) {
    case 1:
        console.log('Fim de Semana!')
        break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('Dia Util!')
        break
    case 7:
        console.log('Fim de Semana!')
        break
    default:
        console.log('O dia informado é invalido!')
}
}

diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)
diaUtil(8)
diaUtil(0)