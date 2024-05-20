let Lista = [];

function Editar(params) {
    
}

let Options
while (Options != 0) {
    Options = parseInt(prompt('Ingrese una opción.\n1.Ver lista de tareas.\n2.Crear nueva tarea.\n3.Editar tarea.\n4.Eliminar tarea.\n0.Salir'));
switch (Options) {
    case 1:
        alert(Lista)
        break;
    case 2:
        Lista.push(prompt('Escriba el nombre de la material.'))
        break
    case 3:
        for (let i = 0; i < Lista.length; i++) {
            const element = Lista[i];}
            console.log(i)
        break;
    case 4:
        break;
}
}