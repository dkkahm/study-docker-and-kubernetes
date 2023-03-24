import express from 'express';
import fs from 'fs';

const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Hi there!</h2>');
});

app.get('/put/:title/:content', (req, res) => {
    console.log(`put: ${req.params.title} ${req.params.content}`)

    const filePath = `/app/contents/${req.params.title}`
    try {
        fs.writeFileSync(filePath, req.params.content);
        res.send('OK')
    } catch(err) {
        console.log(err);
        res.status(400);
        res.send('Failed')
    }
})

app.get('/get/:title', (req, res) => {
    console.log(`get: ${req.params.title}`)

    const filePath = `/app/contents/${req.params.title}`
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        res.send(data)
    } catch(err) {
        console.log(err);
        res.status(400);
        res.send('Failed')
    }
})

app.get('/error', () => {
    process.exit(1);
})

app.listen(3000, () => {
    console.log('Listening on 3000');
})