const http = require('http')
const app = require('./app.js');
const PORT = 8000


function startServer() {
  http.createServer(app).listen(PORT, () => {console.log(`App listen on Port ${PORT}`);})
}

startServer()
