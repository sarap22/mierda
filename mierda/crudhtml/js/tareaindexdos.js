$(document).ready(function () {
    $('#traerDatos').on('click', function (){
        tabla = document.querySelector('#tabla')
        $.ajax({
            url: "http://localhost:8080/verPersonas",
            //url: "prueba.json",
            type: "GET",
            dataType: "JSON",
            success: function (res) {
                console.log(res)
                for (let i = 0; i <= res.length; i++) {
                    tabla.innerHTML+='<tr><td>'+
                        res[i].nombre + '</td><td>'+
                        res[i].apellido + '</td><td>'+
                        res[i].edad +'</td><td>'+
                        res[i].estadoCivil + '</td><td>'+
                        res[i].telefono + '</td></tr>'                    
                }

            }            
        })
    })

    // Enviar datos - metodo tipo post
    $('#EnviarDatos').on('click', function () {
        console.log("Click enviar datos")
        let datos = {
            nombre: $('#validationCustom01').val(),
            apellido: $('#validationCustom02').val(),
            edad: parseInt($('#validationCustomUsername').val()),
            estadoCivil: $('#validationCustom03').val(),
            telefono: parseInt($('#validationCustomPhone').val()),
        }
        let datoEnvio = JSON.stringify(datos)
        console.log(datos)
        console.log(datoEnvio)
    
        $.ajax({
            url: "http://localhost:8080/AgregarPersona",
            type: "POST",
            data: datoEnvio,
            contentType: "application/JSON",
            datatype: JSON,
            success: function (respuesta) {
                alert(respuesta)
            }
        })
    })

    //Buscar por nombre
    $('#buscar').on('click', function () {
        tabla = document.querySelector('#tablaResBuscar')
        let dato = $('#BucarPorElNombre').val()
        $.ajax({
            url:"http://localhost:8080/buscarPorNombre/"+dato,
            type: "GET",
            datatype: JSON,
            success: function (respuesta) {
                if (respuesta) {
                    console.log(respuesta)                    
                    
                    tabla.innerHTML='<tr><td>'+
                        respuesta.nombre + '</td><td>'+
                        respuesta.apellido + '</td><td>'+
                        respuesta.edad +'</td><td>'+
                        respuesta.estadoCivil + '</td><td>'+
                        respuesta.telefono + '</td></tr>'                    
                    
                }
                else{
                    console.log("No se encontro a la persona con ese nombre")
                }
            }
        })
    })
})