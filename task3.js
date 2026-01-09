export function ageCalculator(año, mes, dia) {
    let hoy = new Date();
let nacimiento = new Date(año, mes - 1, dia);

let edad = hoy.getFullYear() - nacimiento.getFullYear();
if (
    hoy.getMonth() < nacimiento.getMonth() || 
    (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())
) {
    edad--;
}

return edad;
 
}

new Date (2000, 11, 25)