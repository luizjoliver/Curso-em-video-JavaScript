//COM IF
/*var agora = new Date()
var diaSem = agora.getDay()
if (diaSem == 3) {
    console.log(`Quarta-feira`);
}*/
//COM SWITCH QUE SERIA CONDIÇÃO MULTIPLA
var agora = new Date();
var diaSem = agora.getDay();
switch (diaSem) {
    case 0:
        console.log(`Domingo`);
        break
    case 1:
        console.log(`segunda`);
        break
    case 2: 
        console.log(`terça`);
    break
    case 3:
        console.log(`quarta hoje hehe`);
        break
    case 4: 
        console.log(`quinta`);
        break
    case 5:
        console.log(`sexta`);
        break
    case 6:
        console.log(`sábado`);
        break
        default:
            console.log(`Dia inválido!`);
            break

}