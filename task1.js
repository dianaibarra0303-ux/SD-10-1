export function costCalculator(costoMensual) {
    let tarifa = 3;
    let interes = 0.01;

    return costoMensual * (1 + interes) + tarifa;
}
