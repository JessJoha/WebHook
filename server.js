const express = require('express');
const app = express();

// Middleware para procesar datos JSON
app.use(express.json());

// Ruta para recibir las solicitudes del WebHook
app.post('/webhook', (req, res) => {
  console.log('Datos recibidos del WebHook:', req.body);
  res.status(200).send('Webhook recibido correctamente');
});

// Inicia el servidor
const PORT = 4002;
app.listen(PORT, () => {
  console.log(`Servidor WebHook escuchando en http://localhost:${PORT}`);
});
