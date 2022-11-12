//Agregar alumnos, curso y nota y luego calcular el promedio de notas



    let nuevo_nombre;
    let nueva_nota;
    let nuevo_curso;
    let acumulador_notas= 0;
    let promedio;

function capturar() {
        function Alumnos(nombre, curso, nota) {
            this.nombre=nombre;
            this.curso=curso;
            this.nota=nota;
        }
    
    

        nuevo_nombre= prompt("Ingrese su nombre");
        //console.log("Alumno: " + nuevo_nombre);

        nueva_nota = prompt("Ingrese su nota: ");
        while (nueva_nota<0 || nueva_nota>10) {
            nueva_nota= prompt("Error. Reingrese la nota! ");
        }
        //console.log(nueva_edad + " años");

        nuevo_curso= prompt("Ingrese su curso: -Turno mañana a // Turno tarde b ");
        while (nuevo_curso != "a" && nuevo_curso != "b") {
            nuevo_curso = prompt("Reintente");
        }

        acumulador_notas = acumulador_notas + nueva_nota;

        nuevoAlumno = new Alumnos(nuevo_nombre,nuevo_curso,nueva_nota);
        console.log(nuevoAlumno); 
    }


    let baseDatos=[];
    function agregar() {
    baseDatos.push(nuevoAlumno);
    console.log(baseDatos);
    }


    for (let i = 0; i < 5; i++) {
        capturar();
        agregar();
    }

    promedio = acumulador_notas/5;

    alert("El promedio de las notas es de : " + promedio);
