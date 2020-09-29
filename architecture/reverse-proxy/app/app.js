const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        title: process.env.APP_NAME || 'App 1',
        msg: "hello there",
        response: 'General' + req.params.name || 'Kenobi'
    })
})

app.listen(80, () => console.log('App started on port 80'))