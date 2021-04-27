require('dotenv').config();
const express = require('express')
const app = express();

const port = process.env.PORT;
const hbs = require('hbs');

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
//servir contenio estatico
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('home',{
        nombre:'David Calapaqui',
        titulo: 'HANDLEBARS!'
    });
})
app.get('/generic', function(req, res) {
    res.render('generic',{
        nombre:'David Calapaqui',
        titulo: 'HANDLEBARS!'
    });
})

app.get('/elements', function(req, res) {
    res.render('elements',{
        nombre:'David Calapaqui',
        titulo: 'HANDLEBARS!'
    });
})



app.listen(port, ()=>{
    console.log('Escuchando en el puerto', port);
})

//firmado y sellado
//formato 4
//TODO
//OFICIO DE LA ESPE A LA ALCALDIA
//OFICIO DE LA ALCALDÍA A LA ESPE (RESPUESTA)
//CARTA CONMPROMISO 
//CARTA DE FIDELIDAD CONVENIO (FIRMADO YO Y LA ALCALDIA)
//FORMATO 4 (informe) FIRMADO Y SELLADO (FIRMADO POR EL ESTUDIANTE AL INICIO EN LA CARATULA Y AL FINAL)
//PAPEL FOTO CAPTURA DE PANTALLA DE LA REUNIÓN Y CAPTURA DE LO QUE HE HECHO (FORMATO 4" X "6  || R7 )