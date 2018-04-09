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


dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
	res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
})
.post((req, res, next) => {
	res.statusCode = 403;
	res.end('POST operation not supported on /dishes/' + req.params.dishId);
})
.put((req, res, next) => {
res.write('Updating the dish: ' + req.params.dishId + '\n');
res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
res.end('Deleting dish: ' + req.params.dishId);
});



module.exports = dishRouter;
