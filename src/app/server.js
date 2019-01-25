const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/cinema-portal'));

app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname + '/dist/cinema-portal/index.html');
});

app.listen(process.env.PORT || 4200);