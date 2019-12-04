var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el sevidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Oldahir',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});

// Escuchar informacio
socket.on('enviarMensaje', (respuesta) => {
    console.log('Servidor: ', respuesta);
});