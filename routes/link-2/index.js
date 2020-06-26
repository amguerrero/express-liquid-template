const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index.liquid', {
    page: 'link-2'
  });
});

module.exports = router;
