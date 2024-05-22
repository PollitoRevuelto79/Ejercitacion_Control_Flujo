let lista = [];
const regex = /^\S+$/;

function showLista() {
    if (lista.length === 0) {
        alert('Todavía no existen tareas.')
    } else {
        alert(lista)
    }
}

function agregar() {
    let tarea = (prompt('Escriba el nombre de la tarea a agregar:'))
    if (regex.test(tarea)) {
        if (lista.includes(tarea)) {
                alert ('Ya existe esta tarea.')
            } else {
                lista.push(tarea)
        }
    } else {
        alert('La tarea no debe contener espacios (Pruebe usando -).')
    }
}

function editar (TareaUno, TareaDos){
    if (lista.length === 0 ) {
        alert('No existen tareas para editar.')
    } else {
        if (lista.includes(TareaUno)) {
            let posicion = lista.indexOf(TareaUno)
            if (posicion !== -1) {
                } if (regex.test(TareaDos)) {
                    lista.splice(posicion, 1 , TareaDos)
                } else {
                    alert('No debe contener espacios.')
                }
        } else {
            alert('La tarea que desea editar no existe.')
        }
    }
}

function eliminar(materia) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === materia) {
            lista.splice(i , 1)
        }
    }
}

let options
while (options != 0) {
    options = parseInt(prompt('Ingrese una opción.\n1.Ver lista de tareas.\n2.Crear nueva tarea.\n3.Editar tarea.\n4.Eliminar tarea.\n0.Salir'));
switch (options) {
    case 1:
        showLista(lista)
        break;
    case 2:
        agregar(lista)
        break;
    case 3:
        let TareaUno = prompt(`Ingrese nombre de la tarea que desea editar.\n${lista}`)
        let TareaDos = prompt('Ingresar el nuevo nombre de la tarea.')
        editar(TareaUno, TareaDos)
        break;
    case 4:
        eliminar(prompt(`Ingrese nombre de la tarea que desea eliminar.\n${lista}`))
        break;
    case 0:
        alert('SAYONARA.')
        break;
    default:
        alert('No existe la opción que esta ingresando.')
        break;
    }
}
