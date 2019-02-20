export default class Paciente {
    constructor(nombrePaciente, sexo, fechaNacimiento, tipoSangre, estatura, peso) {
        this._nombrePaciente = nombrePaciente.toUpperCase();
        this._sexo = sexo.toUpperCase();
        this._fechaNacimiento = fechaNacimiento;
        this._tipoSangre = tipoSangre.toUpperCase(); 
        this._estatura = estatura;
        this._peso = peso;
    }

    imprimir() {
        console.log(` DATOS DEL PACIENTE Nombre: ${this._nombrePaciente} Sexo: ${this._sexo} Fecha de Nacimiento: ${this._fechaNacimiento} Tipo de Sangre: ${this._tipoSangre} Estatura: ${this._estatura} Peso: ${this._peso}`);
    }

    // Lectura (Getters)

    get fechaNacimiento() {
        return this._fechaNacimiento;
    }

    // Escritura (Setters)

    set fechaNacimiento(fechaNacimiento) {
        this._fechaNacimiento = fechaNacimiento;
    }

    set peso(peso) {
        this._peso = peso;
    }

    set estatura(estatura) {
        this._estatura = estatura;
    }
}