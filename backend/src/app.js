const createError = require('http-errors')
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const Customer = require('./models/customer')

const indexRouter = require('./routes/index-route')
const customersRouter = require('./routes/customers-route')
const handieRouter = require('./routes/handie-route')
const accountRouter = require('./routes/account-route')

const mongooseConnection = require('./database-connection')

const app = express()

const clientPromise = new Promise((resolve, reject) => {
  resolve(mongoose.connection.getClient())
  reject(new Error('MongoClient Error'))
})

// if (app.get('env') == 'development') {
//   /* eslint-disable-next-line */
//   app.use(
//     require('connect-livereload')({ port: 35729 }),
//     /* eslint-disable-next-line */
//     require('livereload')
//       .createServer({ extraExts: ['pug'] })
//       .watch([`${__dirname}/public`, `${__dirname}/views`])
//   )
// }

// view engine setup

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(
  session({
    secret: ['thisisnotasupersecuresecretsecret', 'thisisanothernotasupersecuresecretsecret'],
    store: MongoStore.create({
      clientPromise,
      stringify: false,
    }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/api',
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(Customer.createStrategy())

passport.serializeUser(Customer.serializeUser())
passport.deserializeUser(Customer.deserializeUser())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', (req, res, next) => {
  req.session.viewCount = req.session.viewCount || 0
  req.session.viewCount += 1
  next()
})

app.use('/api', indexRouter)
app.use('/api/account', accountRouter)
app.use('/api/customers', customersRouter)
app.use('/api/handies', handieRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
