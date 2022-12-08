

window.addEventListener('load', function () {
    console.log('DOM cargado');
    let formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', ()=>{

        console.log('evento submit capturado');
        let nombre = document.querySelector('#nombre').value;
        let apellidos = document.querySelector('#apellidos').value;
        const  edad = parseInt(document.querySelector('#edad').value);
        console.log(nombre, apellidos, edad); 

        if (nombre.trim() == null || nombre.trim().length == 0|| !isNaN(nombre) ){
            alert('Ingrese un nombre válido');
            return false;
          }else{
            
          }
          
        if (apellidos.trim() == null || apellidos.trim().length == 0|| !isNaN(apellidos)) {
            alert('Ingrese un apellido válido');
            return false;
          };

        if (edad== null || edad <= 0 || isNaN(edad)) {
            alert('Please enter a valid name');
            return false;
        }

    });
});
