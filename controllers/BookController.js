import jwt from 'jsonwebtoken';
import Book from '../models/Book.js';

export const addBook = async (req, res) => {
    const { title, author, description, price } = req.body;
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: "Access Denied" });
    const user = jwt.verify(token, process.env.SECRET_KEY);
    try {
        const book = new Book({
            title,
            author,
            description,
            price,
            user: user.id,
        });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find().populate("user", "username");
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};