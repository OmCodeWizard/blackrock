const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Manage categories route
router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.render('categories', { categories });
});

router.post('/add', async (req, res) => {
    const { name } = req.body;
    const newCategory = new Category({ name });
    await newCategory.save();
    res.redirect('/expenses/categories');
});

router.post('/edit/:id', async (req, res) => {
    const { name } = req.body;
    await Category.findByIdAndUpdate(req.params.id, { name });
    res.redirect('/expenses/categories');
});

router.post('/delete/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/expenses/categories');
});

module.exports = router;
