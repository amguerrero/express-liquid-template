const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index.liquid', {
    page: 'link-1'
  });
});

module.exports = router;
