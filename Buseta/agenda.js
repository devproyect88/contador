function validarReserva() {
  const fechaSeleccionada = document.getElementById("fechaViaje").value;
  const hoy = new Date().toISOString().split("T")[0];

  if (fechaSeleccionada < hoy) {
    document.getElementById("mensajeReserva").innerText =
      "Por favor, elige una fecha válida para tu viaje.";
  } else {
    document.getElementById(
      "mensajeReserva"
    ).innerText = `¡Reserva confirmada para el ${fechaSeleccionada}!`;
    // Aquí podrías agregar la lógica para enviar la reserva a un servidor o almacenarla en una base de datos
  }
}

module.exports = { validarReserva };
