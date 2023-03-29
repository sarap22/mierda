$(document).ready(function(){ 
    $('#traerDatos').on('click', function(){
        let tabla= document.querySelector('#tabla')
        console.log("entro a datos")
        $.ajax({
            url:"http://localhost:8080/verlista",
            type: "GET",
            datatype:"JSON",
            success: function(respuesta){
                console.log(respuesta)
                for(i=0; i<= respuesta.length; i++){
                    tabla.innerHTML+='<tr><th>'+
                    respuesta[i].nombre+ '</th><th>'+
                    respuesta[i].apellido+'</th><th>'+
                    respuesta[i].edad+'</th><th>'+
                    respuesta[i].documento+'</th><th>'+
                    respuesta[i].estadoCivil+'</th></tr>'
                } 
            },error:function (error) {
                console.log("sara, su error: "+error)
            }  
        })
    })
    $('#datos').on('click', function(){
        let datos={
           nombre: $('#validationServer01').val(), 
           apellido: $('#validationServer02').val(),
           edad: parseInt($('#validationServer03').val()),
           documento: parseInt($('#validationServer04').val()),
           estadoCivil: $('#validationServer05').val()
        }
        let envio= JSON.stringify(datos)
        $.ajax({
            url:"http://localhost:8080/anadir",
            type: "POST",
            data: envio,
            contentType: "application/JSON",
            datatype: JSON,
            success: function (respuesta) {
                alert(respuesta)
            },error:function (error) {
                console.log("sara, su error: "+error)
            }            
        })
    })
    $('#eliminar').on('click', function(){
        let datos=$('#validationServer06').val()
        console.log("datos:",datos)
        $.ajax({
            url:"http://localhost:8080/eliminar/"+datos,
            type: "DELETE",
            contentType: "application/JSON",
            datatype: JSON,
            success: function (respuesta) {
                alert(respuesta)
            },error:function (error) {
                console.log("sara, su error: "+error)
            }            
        })

    })
})