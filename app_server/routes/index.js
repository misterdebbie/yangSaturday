var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home.js');
/*var ctrlProfile = require('../controllers/profile.js');
var ctrlRunway = require('../controllers/runway.js');
var ctrlEdits = require('../controllers/stores.js');
var ctrlCloud = require('../controllers/clouds.js');
//var ctrlAng = require('../controllers/others.js');*/

/* GET home page. */
/*router.get('/', ctrlAng.angularApp);
router.get('/', ctrlHome.home);
router.get('/art', ctrlCloud.art);
router.get('/health', ctrlCloud.health);
router.get('/readme', ctrlCloud.readmes);
router.get('/runway', ctrlRunway.runway);
router.get('/store', ctrlEdits.storedit);
router.get('/bonus', ctrlEdits.bonusedit);
router.get('/createProfile', ctrlProfile.createUser);*/

router.get('/yang', ctrlHome.home);
/*router.get('/login', ctrlProfile.createuser);
router.get('/runway', ctrlRunway.runway);
router.get('/amazon', ctrlEdits.amazonedit);
router.get('/nordstrom', ctrlEdits.nordstromedit);
router.get('/all', ctrlCloud.all);
router.get('/shop', ctrlCloud.shop);*/


module.exports = router;
