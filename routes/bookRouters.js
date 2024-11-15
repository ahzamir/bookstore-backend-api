import express from 'express';
import {
    addBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
} from '../controllers/BookController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/", auth, addBook);
router.get("/", getBooks);
router.get("/:id", getBookById);
router.put("/:id", auth, updateBook);
router.delete("/:id", auth, deleteBook);

export default router;