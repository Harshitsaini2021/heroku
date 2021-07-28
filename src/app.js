const path = require('path')
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const root_path = path.join(__dirname, '../public/project2')

app.use(express.static(root_path))


app.get('/', (req, res) => {
    res.render('index.html');
})



app.listen(port, () => {
    console.log(`your server is running on ${port}`);
})