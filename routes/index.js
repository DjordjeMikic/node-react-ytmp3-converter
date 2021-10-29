let router = require('express').Router();
const {
  getInfo,
  // downloadSong
} = require('../controllers');

// router.get('/', (req, res) => {
//   res.status(200).json('Hello World');
// });
//
router.get('/info', getInfo);
// router.post('/download', downloadSong);
//
module.exports = router;
