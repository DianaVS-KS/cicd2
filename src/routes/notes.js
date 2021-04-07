const express = require("express");
const router = express.Router();
const notesController = require('../controllers/notesController');

router.get('/', notesController.list);

router.post('/add', notesController.new);
router.get('/delete/:id', notesController.delete);
router.get('/edit/:id', notesController.edit);
router.post('/edit/:id', notesController.save);

module.exports = router;