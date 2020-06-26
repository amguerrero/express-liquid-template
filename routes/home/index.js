const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index.liquid', {
    page: 'home'
  });
});

module.exports = router;
