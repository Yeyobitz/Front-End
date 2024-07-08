let alumno = []

function prueba(formulario){
    const{nombre,edad} = formulario
    let datosAlumno = {nombre: nombre.value, edad: edad.value}
    alumno.push(datosAlumno)
    console.log(alumno)
    formulario.reset()
}

function reporte(){
    let suma = 0
    alumno.forEach(myFunction)
    alert(`El total de la suma de las edades es: ${suma}`)
    
    function myFunction(item){
        suma += parseInt(item.edad)
        return suma
    }
}