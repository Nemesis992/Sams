function valida_envia() {
    if (document.fvalida.nombre.value.trim().length === 0) {
        alert("Tienes que escribir tu nombre");
        document.fvalida.nombre.focus();
        return false;
    }

    let calif = parseInt(document.fvalida.calificacion_m.value);
    if (isNaN(calif) || calif < 1 || calif > 10) {
        alert("Debes escribir una calificación válida entre 1 y 10 para las máquinas.");
        document.fvalida.calificacion_m.focus();
        return false;
    }

    if (document.fvalida.atencion.selectedIndex === 0) {
        alert("Debes seleccionar una opción de atención.");
        document.fvalida.atencion.focus();
        return false;
    }

    if (document.fvalida.opinion_tarifas.selectedIndex === 0) {
        alert("Debes seleccionar una opción sobre las tarifas.");
        document.fvalida.opinion_tarifas.focus();
        return false;
    }

    if (document.fvalida.satisfecho.selectedIndex === 0) {
        alert("Debes indicar si estás satisfecho con las instalaciones.");
        document.fvalida.satisfecho.focus();
        return false;
    }

    let motivo = document.fvalida.motivo.value.trim();
    if (motivo.length === 0) {
        alert("Debes ingresar un motivo.");
        document.fvalida.motivo.focus();
        return false;
    }
    if (motivo.length > 120) {
        alert("El campo '¿Por qué?' no puede exceder 120 caracteres.");
        document.fvalida.motivo.focus();
        return false;
    }

    let sugerencias = document.fvalida.sugerencias.value.trim();
    if (sugerencias.length === 0) {
        alert("Debes ingresar una sugerencia.");
        document.fvalida.sugerencias.focus();
        return false;
    }
    if (sugerencias.length > 150) {
        alert("El campo '¿Qué podríamos mejorar?' no puede exceder 150 caracteres.");
        document.fvalida.sugerencias.focus();
        return false;
    }

    alert("MUCHAS GRACIAS POR ENVIAR EL FORMULARIO");
    document.fvalida.submit();
}
