const express = require("express")
const passport = require("passport")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const session = require('express-session')
const MongoStore = require("connect-mongo")(session)
const passportLocalMongoose = require('passport-local-mongoose')
const eventsRouter = require('./routes/events_routes')
const authRouter = require("./routes/auth_routes");


const port = 3000

const app = express()



const dbConn = 'mongodb://localhost/event_planner'
// Set four properties to avoid deprecation warnings:
mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!')
        }
    });

app.use(cors())
app.use(bodyParser.json())

//session
app.use(session({
    // resave and saveUninitialized set to false for deprecation warnings
    secret: "Cool secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1800000
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

//passport
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use('/events', eventsRouter);

app.listen(port, () => {
	console.log(`Event planner app listening on port ${port}`)
})