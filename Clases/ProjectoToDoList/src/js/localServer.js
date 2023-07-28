/////// GET TAREAS
export async function obternerTareas() {
    console.log("parsedData")
    const storageData = localStorage.getItem("tareas");

    const parsedData = JSON.parse(storageData) ?? [];
    console.log("parsedData", parsedData)

    return parsedData;
}

//////// POST TAREAS (Guardar tare)

export async function postTareas(tareaParametro) {


    const storageData = localStorage.getItem("tareas");
    const listaTareas = JSON.parse(storageData) ?? [];
    const id = "id-" + new Date().getTime();
    let nuevaTarea = {
        task: tareaParametro,
        id: id,
        check: false
    }
    listaTareas.push(nuevaTarea)

    localStorage.setItem("tareas", JSON.stringify(listaTareas));

    return listaTareas;

}

/////// CHECAR TAREA (PUT)

export async function marcarTarea(checkParametro, idTareaParametro) {
    const storageData = localStorage.getItem("tareas");
    const listaTareas = JSON.parse(storageData) ?? [];



    let checkedItem = {};

    for (let index = 0; index < listaTareas.length; index++) {
        const tarea = listaTareas[index];
        console.log("pARAM", idTareaParametro, "TAREA", tarea.id)
        if (tarea.id == idTareaParametro) {
            console.log("ENTRO A CHECK2")
            tarea.check = checkParametro;
            checkedItem = tarea;
            break
        }
    }

    localStorage.setItem("tareas", JSON.stringify(listaTareas));

    return checkedItem;


}


////// Delete tarea

export async function borrarTarea(idTareaAEliminar) {
    const storageData = localStorage.getItem("tareas");
    let listaTareas = JSON.parse(storageData) ?? [];

    console.log("Eliminando Tarea", listaTareas)

    for (let index = 0; index < listaTareas.length; index++) {
        const tarea = listaTareas[index];
        if (tarea.id === idTareaAEliminar) {
            const slicedItem = listaTareas.splice(index, 1);
            console.log("slicedItem", slicedItem)
            break
        }
    }
    console.log("Lista tareass", listaTareas)
    localStorage.setItem("tareas", JSON.stringify(listaTareas));

    return {};
}

/////// BUSCAR TAREAS
export async function buscarTareas(textoBuscar) {

    const storageData = localStorage.getItem("tareas");
    const listaTareas = JSON.parse(storageData) ?? [];


    let tareasFiltradas = listaTareas.filter((tarea) => {
        return tarea.task.toUpperCase().trim().includes(textoBuscar.toUpperCase().trim())
    })

    return tareasFiltradas;
}






