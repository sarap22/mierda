$(document).ready(function(){ 
    $('#traerDatos').on('click', function(){
        tabla= document.querySelector('#tabla')
        $.ajax({
            url:"http://localhost:8080/verlista",
            type: "GET",
            datatype:"JSON",
            success: function(res){
                for(let i = 0; i<=res.lenght; i++){
                    tabla.innerHTML += '<tr><td>'+
                    res[i].nombre + '</td><td>'+
                    res[i].apellido + '</td><td>'+
                    res[i].edad +'</td><td>'+
                    res[i].documento +'</td><td>'+
                    res[i].estadoCivil + '</td><td>'
                    console.log(res[i].nombre + '</td><td>')
                    console.log(res[i].apellido + '</td><td>')
                    console.log(res[i].edad +'</td><td>')
                    console.log(res[i].estadoCivil + '</td><td>')                        
                }  
            },error:function (error) {
                console.log("vanesha, su error: "+error)
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
                console.log("vanesha, su error: "+error)
            }            
        })
    })
})