const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');

const router = routerx();

router.get('/list', articuloController.list);
router.post('/add', /*auth.verifyVendedor,*/ articuloController.add);
router.put('/update', /*auth.verifyVendedor,*/ articuloController.update);
router.delete('/remove', /*auth.verifyVendedor,*/ articuloController.remove);
router.put('/activate', /*auth.verifyVendedor,*/ articuloController.activate);
router.put('/deactivate', /*auth.verifyVendedor,*/ articuloController.deactivate);

module.exports = router;