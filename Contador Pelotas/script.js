const fechaInicio = new Date("2026-06-07T15:15:00-03:00");

function actualizarContador() {

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    const segundosTotales = Math.floor(diferencia / 1000);

    const dias = Math.floor(segundosTotales / 86400);

    const horas = Math.floor((segundosTotales % 86400) / 3600);

    const minutos = Math.floor((segundosTotales % 3600) / 60);

    const segundos = segundosTotales % 60;

    document.getElementById("dias").textContent =
        `Día ${dias}`;

    document.getElementById("contador").textContent =
        `${horas.toString().padStart(2, "0")}h ` +
        `${minutos.toString().padStart(2, "0")}m ` +
        `${segundos.toString().padStart(2, "0")}s`;
}

actualizarContador();

setInterval(actualizarContador, 1000);