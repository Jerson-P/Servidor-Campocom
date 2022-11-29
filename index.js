const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
const authRoutes = require('./auth/auth.routes');
const properties = require('./config/properties');




//creaos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
const router = express.Router();

app.use(cors());

app.use(express.json());

//Login
app.use('/api', router);
authRoutes(router);
router.get('/', (req, res)=>{
    res.send('Hello from home');
});
app.use(router);




app.use('/api/cliente', require('./routes/cliente'));
app.use('/api/actividad', require('./routes/actividad'));
app.use('/api/gastos', require('./routes/gastos'));
app.use('/api/ingresos', require('./routes/ingresos'));
app.use('/api/tecnico', require('./routes/tecnico'));


app.listen(4000, () => {
    console.log('el servidor esta corriendo perfectamente')
})