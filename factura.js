export default class Factura {
    constructor(nombreCliente, sucursalFactura, fechaFactura, totalFactura, numeroFactura) {
        this._nombreCliente = nombreCliente.toUpperCase();
        this._sucursalFactura = sucursalFactura.toUpperCase();
        this._fechaFactura = fechaFactura;
        this._totalFactura = totalFactura;
        this._numeroFactura = numeroFactura;
    }

    imprimir() {
        console.log(`${this._nombreCliente} realizó la factura con el número ${this._numeroFactura} en la sucursal ${this._sucursalFactura} en la fecha ${this._fechaFactura} con un total de ${this._totalFactura}`);
    }

    // Lectura (Getters)

    get fechaFactura() {
        return this._fechaFactura;
    }

    get totalFactura() {
        return this._totalFactura;
    }

    get numeroFactura() {
        return this._numeroFactura;
    }

    // Escritura (Setters)

    set numeroFactura(numeroFactura) {
        this._numeroFactura = numeroFactura;
    }
}