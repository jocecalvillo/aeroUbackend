'use stritct'

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

const { ejecutarJob } = require('./job/index');



//Crear el servidor de express
const app = express();

//confi CORS midleware
app.use(cors());

//Lectura y parseo del body antes de las rutas

app.use(express.json());


//Base de datos
dbConnection();

//job
ejecutarJob();

//directorio publico
//app.use(express.static('public'));
app.use(express.static(__dirname + '/dist/psyfriend'));

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/opVuelo', require('./routes/operadorVuelo'));
app.use('/api/detOperador', require('./routes/detOperadores'));
app.use('/api/bitacoraVuelo', require('./routes/bitacoraVuelo'));
app.use('/api/bitacoraVueloReal', require('./routes/bitacoraVueloReal'));
app.use('/api/combustible', require('./routes/combustible'));
app.use('/api/upload', require('./routes/uploads'));
app.use('/api/todo', require('./routes/busquedas'));
app.use('/api/divisas', require('./routes/divisas'));
app.use('/api/destinos', require('./routes/destinos'));
app.use('/api/sumary', require('./routes/sumary'));
app.use('/api/sumaryMatricula', require('./routes/summaryMatricula'));
app.use('/api/sumaryFinal', require('./routes/sumaryFinal'));

app.use('/api/precio', require('./routes/precioAterrizajeMex'));
app.use('/api/precio', require('./routes/precioPlataforma'));
app.use('/api/precio', require('./routes/preciosCombustible'));

app.use('/api/precio', require('./routes/precioAterizajeCam'));
app.use('/api/precio', require('./routes/precioCatering'));
app.use('/api/precio', require('./routes/precioHotelTripulacion'));
app.use('/api/precio', require('./routes/precioMantenimiento'));
app.use('/api/precio', require('./routes/precioMigracionCam'));
app.use('/api/precio', require('./routes/precioMotores'));

app.use('/api/precio', require('./routes/precioPersonalAlmacen'));
app.use('/api/precio', require('./routes/precioPersonalRampa'));
app.use('/api/precio', require('./routes/precioPlataformaCam'));

app.use('/api/precio', require('./routes/precioRentaAlmacen'));
app.use('/api/precio', require('./routes/precioRentaEquipoRampa'));
app.use('/api/precio', require('./routes/precioSeguridad'));
app.use('/api/precio', require('./routes/precioViaticos'));

app.use('/api/precio', require('./routes/precioSupervicionDespacho'));
app.use('/api/precio', require('./routes/precioSupervicionDespachoCam'));


app.use('/api/precio', require('./routes/precioSobreCocesna'));
app.use('/api/precio', require('./routes/precioServicioRampa'));

app.use('/api/precio', require('./routes/precioCalculoSeneam'));

/*Historicos*/

app.use('/api/precio', require('./routes/precioAterrizajeMexHist'));
app.use('/api/precio', require('./routes/precioPlataformaHist'));
app.use('/api/precio', require('./routes/preciosCombustibleHist'));

app.use('/api/precio', require('./routes/precioAterizajeCamHist'));
app.use('/api/precio', require('./routes/precioCateringHist'));
app.use('/api/precio', require('./routes/precioHotelTripulacionHist'));
app.use('/api/precio', require('./routes/precioMantenimientoHist'));
app.use('/api/precio', require('./routes/precioMigracionCamHist'));
app.use('/api/precio', require('./routes/precioMotoresHist'));

app.use('/api/precio', require('./routes/precioPersonalAlmacenHist'));
app.use('/api/precio', require('./routes/precioPersonalRampaHist'));
app.use('/api/precio', require('./routes/precioPlataformaCamHist'));

app.use('/api/precio', require('./routes/precioRentaAlmacenHist'));
app.use('/api/precio', require('./routes/precioRentaEquipoRampaHist'));
app.use('/api/precio', require('./routes/precioSeguridadHist'));
app.use('/api/precio', require('./routes/precioViaticosHist'));

app.use('/api/precio', require('./routes/precioSupervicionDespachoHist'));
app.use('/api/precio', require('./routes/precioSupervicionDespachoCamHist'));


app.use('/api/precio', require('./routes/precioSobreCocesnaHist'));
app.use('/api/precio', require('./routes/precioServicioRampaHist'));

app.use('/api/precio', require('./routes/precioCalculoSeneamHist'));

app.use('/api/bitacora', require('./routes/bitacoraGral'));

app.use('/api/helper', require('./routes/helper'));
app.use('/api/random', require('./routes/identificador'))



app.listen(process.env.PORT, () => {
    console.log('Servidor correiendo en puerto ' + process.env.PORT);
});