const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const auth = require('./auth');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); // default

//console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
//console.log(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
//console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env') === 'development') {
   app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...');
}

// Db work
dbDebugger('Connected to the database');


app.use(logger);
app.use(auth);


const interiors = [
   { id: 1, name: 'interior1'},
   { id: 2, name: 'interior2'},
   { id: 3, name: 'interior3'},
];

app.get('/', (req, res) => {
   res.render('app', { title: 'My Express App', message: 'Designs'});
});

app.get('/api/interiors', (req, res) => {
   res.send(interiors);
});

app.post('/api/interiors', (req, res) => {
   const { error } = validateInterior(req.body);
   if (error) return res.status(400).send(error.details[0].message);

   const interior = {
      id: interiors.length + 1,
      name: req.body.name
   };
   interiors.push(interior);
   res.send(interiors);
});

app.put('/api/interiors/:id', (req, res) => {
    const interior = interiors.find(i  => i.id === parseInt(req.params.id));
    if (!interior) res.status(404).send('The interiors with the given ID was not found.');

    const { error } = validateInterior(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    interior.name = req.body.name;
    res.send(interior);
});

app.delete('/api/interiors/:id', (req, res) => {
    const interior = interiors.find(i  => i.id === parseInt(req.params.id));
    if (!interior) res.status(404).send('The interiors with the given ID was not found.');

     const index = interiors.indexOf(interior);
     interiors.splice(index, 1);

     res.send(interior);
});

function validateInterior(interior) {
     const schema = {
         name: Joi.string().min(3).required()
     };

     return Joi.validate(interior, schema);
}

app.get('/api/interiors/:id', (req, res) => {
    const interior = interiors.find(i  => i.id === parseInt(req.params.id));
    if (!interior) res.status(404).send('The interiors with the given ID was not found.');
    res.send(interior);
});

app.listen(4000, () => console.log('Listening on port 4000...'));