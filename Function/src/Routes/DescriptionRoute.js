const DescriptionController = require('../Controllers/controller');

module.exports = (app) => {
   app.post('/todo', DescriptionController.post);
   app.delete('/todo/:id', DescriptionController.delete);
   app.get('/todo', DescriptionController.getAll);
   app.get('/todo/:id', DescriptionController.getById);
}
