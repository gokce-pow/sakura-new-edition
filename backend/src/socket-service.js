const io = require('socket.io')()

io.on('connect', socket => {
  socket.emit('connection established')

  //   setInterval(() => {
  //     socket.emit('hello world!')
  //   }, 2000)

  //   socket.on('new message', (number, cb) => {
  //     console.log('a new message received with a number', number)
  //     console.log('replying with', number + 1)
  //     cb(number)
  //   })

  //   socket.on('another api', cb => {
  //     cb('another api response')
  //   })
  socket.on('new message', (streamId, message) => {
    socket.to(streamId).emit('new live mesage', message)
  })

  socket.on('join stream', streamId => {
    socket.join(streamId)
  })

  socket.on('go live', (customerId, cb) => {
    console.log(`${customerId} is going live`)

    socket.broadcast.emit('new live stream', customerId)
    socket.join(customerId)
    cb(true)
  })
})

module.exports = io
