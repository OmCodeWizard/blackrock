const express = require('express');
const app = express();
const path = require('path');
const router=require('./routes/categories.js');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/fund', (req, res) => {
    res.render('fund');
});

app.get('/form', (req, res) => {
    res.render('form');
});
app.get('/categories', (req, res) => {
    res.render('categories');
});

app.use('/categories',  router 
    
);

app.listen(8080, () => {
    console.log('Server is running on http://localhost:3000');
});
