function eliminar(id) {
    console.log(id);
    swal({
        title: "Esta seguro de Eliminar?",
        text: "Una vez eliminado no se prodra restablecer!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((OK) => {
            if (OK) {
                $.ajax({
                    url:"/del/"+id,
                    success: function(res) {
                        console.log(res);
                    },
                });
                swal("Registro eliminado!", {
                    icon: "success",
                }).then((ok)=>{
                    if(ok){
                        location.href="/listar";
                    }
                });
            }
        });
}

function cambiarestado(){
	estado = document.frmalumnos.status[document.frmalumnos.status.selectedIndex].value
	console.log(estado);
	
}