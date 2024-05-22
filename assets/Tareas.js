let lista = [];
const regex = /^\S+$/;

function editar(TareaUno, TareaDos) {
    if (lista.includes(TareaUno)) {
        let posicion = lista.indexOf(TareaUno);
    if (posicion !== -1) {
        lista.splice(posicion, 1, TareaDos);
    } else {
        alert(`Elemento "${TareaDos}" no encontrado en la lista.`);
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

function agregar() {
    let tarea = (prompt('Escriba el nombre de la tarea a agregar:'))
    if (regex.test(tarea)) {
        if (lista.includes(tarea)) {
                alert ('Ya existe esta tarea.')
            } else {
                lista.push(tarea)
        }
    }
}

let options
while (options != 0) {
    options = parseInt(prompt('Ingrese una opción.\n1.Ver lista de tareas.\n2.Crear nueva tarea.\n3.Editar tarea.\n4.Eliminar tarea.\n0.Salir'));
switch (options) {
    case 1:
        alert(lista)
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
}
}
