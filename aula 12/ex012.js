var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} Horas `);
if (hora < 12) {
    console.log('Da manhã');
} else if (hora <= 18) {
    console.log(`da tarde`);
} else{
    console.log(`da noite`);
}
