const axios = require('axios');

// Datos que se enviarán al servidor WebHook
const data = {
  message: 'Hola, este es un mensaje del cliente WebHook',
  timestamp: new Date().toISOString()
};

// Simula el envío de datos al WebHook
axios.post('http://localhost:4002/webhook', data)
  .then((response) => {
    console.log('Respuesta del servidor:', response.data);
  })
  .catch((error) => {
    console.error('Error al enviar los datos:', error.message);
  });
