var express = require('express');
var router = express.Router();
var ctrlCloud = require('../controllers/clouds.js');
var ctrlRunway = require('../controllers/runway.js');
var ctrlEdits = require('../controllers/stores.js');
var ctrlProfile = require('../controllers/profile.js');

/* GET home page. */
router.get('/', ctrlCloud.home);
router.get('/art', ctrlCloud.art);
router.get('/health', ctrlCloud.health);
router.get('/readme', ctrlCloud.readmes);
router.get('/runway', ctrlRunway.runway);
router.get('/store', ctrlEdits.storedit);
router.get('/bonus', ctrlEdits.bonusedit);
router.get('/createProfile', ctrlProfile.createUser);







module.exports = router;
