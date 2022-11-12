function mostrar() {
    function Alumnos(nombre, curso, nota) {
        this.nombre=nombre;
        this.curso=curso;
        this.edad=edad;
    }
    
    let nombre;
    let nota;
    let promedio;
    let acumulador_notas= 0;
    let curso_notabaja;
    let flag=0;


    for (let i = 0; i < 5; i++) {
        let nombre= prompt("Ingrese su nombre");
        console.log(nombre);
        let curso= prompt("Ingrese su curso: -Turno mañana a // Turno tarde b ");
        while (curso != "a" && curso != "b") {
            curso = prompt("Reintente");
        }
        console.log(curso)
    }
}