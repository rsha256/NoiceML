from tornado import websocket, web, ioloop

class EchoWebSocket(websocket.WebSocketHandler):
    def open(self):
        print("WebSocket opened")

    def on_message(self, transcription):
        self.write_message(transcription)

    def on_close(self):
        print("WebSocket closed")

app = web.Application([
    (r'/ws', EchoWebSocket)
])

if __name__ == '__main__':
    app.listen(8888)
    ioloop.IOLoop.instance().start()
