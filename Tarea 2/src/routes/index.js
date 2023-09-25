const express = require('express')
const router = express.Router()
const path = require('path')

const news = require('./news')
router.get('', (req, res) => {
    const url = path.join(__dirname, '..', '..', 'public', 'index.html');
    res.sendFile(url);
});
router.use('', express.json());
router.use('/news', news);



module.exports = router;