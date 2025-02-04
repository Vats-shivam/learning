const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

let posts = [];

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.post('/api/posts', (req, res) => {
    const post = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content,
        date: new Date().toISOString()
    };
    posts.unshift(post);
    res.json(post);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
