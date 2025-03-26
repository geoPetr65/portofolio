import express from 'express';

const app = express();

app.get('/hello', function(req, res) {
    res.send('Hello!');
});

app.listen(8000, function() {
    console.log('Sever is listening on port 8000');
});

//when server receives request, function is executed