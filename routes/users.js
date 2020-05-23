var express = require('express');
var router = express.Router();
const userController = require('../controllers/user')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', userController.index)
router.get('/:id', userController.show)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

module.exports = router;
