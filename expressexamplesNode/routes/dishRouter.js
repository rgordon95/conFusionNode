const express = require('express');
const bodyParser = require('body-parser');

/* //original index.js code that is replaced by router method below
 app.all('/dishes', (req, res, next) => {
	 res.statusCode = 200;
	 res.setHeader('Content-Type', 'text/plain');
	 next();
 });

 app.get('/dishes', (req, res, next) => {
	 res.end('Will send all the dishes to you!');
 });

 app.post('/dishes', (req, res, next) => {
	 res.end('Will add the dish: ' + req.body.name+ ' with details: ' + req.body.description);
 });

 app.put('/dishes', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
});

   app.delete('/dishes', (req, res, next) => {
	  res.end('Deleting all dishes');
   });
//here for reference to compare dishRouter for transfering below
*/

const dishRouter = express.Router(); //router method ferom express module

dishRouter.use(bodyParser.json());

dishRouter.route('/') //declares endpoint at single location '/'
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

/*
app.get('/dishes/:dishId', (req, res, next) => {
	res.end('Will send deatils of the dish: ' + req.params.dishId + ' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
	res.statusCode = 403;
	res.end('POST operation not supported on /dishes/' + req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
res.write('Updating the dish: ' + req.params.dishId + '\n');
res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
res.end('Deleting dish: ' + req.params.dishId);
});
//start with this code and do what was done above 
*/









module.exports = dishRouter;
