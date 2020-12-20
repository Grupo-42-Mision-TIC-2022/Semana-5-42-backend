const routerx = require('express-promise-router');
const usuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/login', usuarioController.login);
router.get('/list', auth.verifyAdministrador, usuarioController.list);
router.post('/add', auth.verifyAdministrador, usuarioController.add);
router.put('/update', auth.verifyAdministrador, usuarioController.update);
router.delete('/remove', auth.verifyAdministrador, usuarioController.remove);
router.put('/activate', auth.verifyAdministrador, usuarioController.activate);
router.put('/deactivate', auth.verifyAdministrador, usuarioController.deactivate);

module.exports = router;