const WebSocket = require('ws')
const uuidv4 = require('uuid').v4

const wss1 = new WebSocket.WebSocketServer({ noServer: true })

wss1.on('connection', function connection(ws) {
  ws.on('error', console.error)
  const uuid = uuidv4()
  ws.uuid = uuid
  const user = {
    context: 'user',
    uuid,
  }
  ws.send(JSON.stringify(user))

  ws.on('message', (message) => {
    const { content } = JSON.parse(message)
    const newMessage = {
      context: 'message',
      content,
      uuid,
    }
    // ws.send(JSON.stringify(newMessage))
    sendAllUser(newMessage)
  })
})

const sendAllUser = (msg) => {
  wss1.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(msg))
    }
  })
}

module.exports = wss1
