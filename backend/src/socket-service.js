const io = require('socket.io')()

io.on('connect', socket => {
  socket.emit('hello world!')

  setInterval(() => {
    socket.emit('hello world!')
  }, 2000)

  socket.on('new message', (number, cb) => {
    console.log('a new message received with a number', number)
    console.log('replying with', number + 1)
    cb(number)
  })

  socket.on('another api', cb => {
    cb('another api response')
  })
})

module.exports = io
