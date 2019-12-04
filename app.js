const ubicacion = require('./controlador/ubicacion')
const clima = require('./controlador/clima')
const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// ubicacion.getCiudadLatLon(argv.nombre).then(
//     result => {
//         clima.getClima(result.lat, result.lon).then(console.log);
//     }
// );
let getInfo = async(pais) => {
    try {
        let coords = await ubicacion.getCiudadLatLon(pais);
        let temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima en ${coords.name} es de ${temp} °C`
    } catch (error) {
        console.log(`No se puede obtener el clima de: ${pais}`);
    }
};
getInfo(argv.nombre).then(res => {
    console.log(res);
}).catch(err => console.log(err));
//ubicacion.getCiudadLatLon(argv.nombre).then()
//clima.getClima(-0.19, -78.5).then(console.log);
// const getInfo = (ciudad) => {

// }