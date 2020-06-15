require('dotenv').config();
const express = require('express');
const session = require('express-session')

const {SERVER_PORT, SESSION_SECRET} = process.env;
const auth = require('./controller/authCtrl');
const album = require('./controller/albumCtrl');

const app = express();

app.use(express.json());
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
        secret: SESSION_SECRET
    })
);

// Logging in
// credentials:
// {
// 	"email": "dev@dev.mtn",
// 	"password": "iloveredux"
// }
app.post('/auth/login', auth.login)
app.post('/auth/register', auth.register)
app.delete('/auth/logout', auth.logout)
app.get('/auth/user', auth.getUser)
// Get data
app.get('/api/photos', album.getPhotos)
app.post('/api/photos', album.addPhoto)

app.listen(SERVER_PORT, () => console.log(`🏄Surfs up on port ${SERVER_PORT}`))