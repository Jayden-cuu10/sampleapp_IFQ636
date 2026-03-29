const express = require ('express');
const {
    getBooks,
    addBook,
    updateBook,
    deleteBook
} = require('../controllers/bookController');

const router = express.Router();

router.get('/', getBooks);
router.post('/',addBook);
router.put('/title/:title', updateBook);
router.delete('/title/:title',deleteBook);

module.exports = router;