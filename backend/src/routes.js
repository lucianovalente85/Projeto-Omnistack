const express = require('express');
const OngController = require('./controllers/OngController'); 
const IncidentsController = require('./controllers/IncidentsController'); 
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routers = express.Router();

routes.post('/session', SessionController.create);


routers.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routers.delete('/incidents/:id', IncidentsController.delete);


module.exports = routes;