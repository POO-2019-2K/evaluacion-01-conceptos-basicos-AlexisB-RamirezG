export default class Casa {
    constructor(ciudad, colonia, calle, numero, precio,  superficie, numeroHabitaciones, numeroBaños) {
        this._ciudad = ciudad.toUpperCase();
        this._colonia = colonia.toUpperCase();
        this._calle = calle.toUpperCase();
        this._numero = numero;
        this._precio = precio;
        this._superficie = superficie; 
        this._numeroHabitaciones = numeroHabitaciones;
        this._numeroBaños = numeroBaños;
    }

    // Lectura (Getters)

    get precio() {
        return this._precio;
    }

    get superficie() {
        return this._superficie;
    }

    // Escritura (Setters)

    set numeroHabitaciones(numeroHabitaciones) {
        this._numeroHabitaciones = numeroHabitaciones;
    }

    set numeroBaños(numeroBaños) {
        this._numeroBaños = numeroBaños;
    }
}