document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Para que no recargue la página

  const datos = {
    fecha: this.fecha.value,
    chofer: this.chofer.value,
    remito: this.remito.value,
    ordenCompra: this.ordenCompra.value,
    hojaRuta: this.hojaRuta.value,
    tonelada: this.tonelada.value,
    patenteTractor: this.patenteTractor.value,
    patenteChasis: this.patenteChasis.value,
    destino: this.destino.value
  };

  // Por ahora guardamos en LocalStorage
  let registros = JSON.parse(localStorage.getItem('registros')) || [];
  registros.push(datos);
  localStorage.setItem('registros', JSON.stringify(registros));

  alert('Datos guardados correctamente!');
  this.reset();
});
