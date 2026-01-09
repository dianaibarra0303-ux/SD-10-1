export class FriendAge {
  constructor(nombre, año, mes, dia) {
    this.nombre = nombre;
    this.año = año;
    this.mes = mes;        // Guardamos como viene (1-12)
    this.dia = dia;
  }

  returnAge() {
    const hoy = new Date();
    
    // Creamos la fecha de nacimiento del año ACTUAL para comparar si ya cumplió años
    const cumpleEsteAño = new Date(hoy.getFullYear(), this.mes - 1, this.dia);
    
    // Calculamos edad base
    let edad = hoy.getFullYear() - this.año;

    // Si la fecha de cumpleaños de este año aún no ha llegado, restamos 1
    if (hoy < cumpleEsteAño) {
      edad--;
    }

    return `${this.nombre} tiene ${edad} años hoy!`;
  }
}

// Ejemplo de uso
const amigo = new FriendAge("Juan", 1996, 4, 7);
console.log(amigo.returnAge());
