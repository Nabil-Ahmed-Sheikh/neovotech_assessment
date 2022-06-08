const router = require('express').Router();

const {
  normal,
  rovarspraket,
  translateJokeOfTheDay,
} = require('../controllers/translateController');

router.post('/normal', normal);
router.post('/rovarspraket', rovarspraket);
router.post('/translateJokeOfTheDay', translateJokeOfTheDay);

module.exports = router;
