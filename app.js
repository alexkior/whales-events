require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');

const indexRouter = require('./routes/index');
const signUpRouter = require('./routes/signUp');
const signInRouter = require('./routes/signIn');
const accountRouter = require('./routes/account');

//session
const redis = require('redis');
const session = require('express-session');
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();account

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

//helpers

hbs.registerHelper("userCheck", (user, userPostId) => {
    console.log(user, userPostId);
    if (user.id == userPostId) {
        return true;
    }
});

//session middleware
app.use(
    session({
        name: 'sId',
        store: new RedisStore({ client: redisClient }),
        saveUninitialized: false,
        secret: process.env.SESSIONSECRET,
        resave: false,
    })
)

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/account', accountRouter);
app.use('/index', indexRouter);
app.use('/signUp', signInRouter);
app.use('/signIn', signInRouter);

app.listen(PORT, () => {
  console.log('Server start on ', PORT);
});
