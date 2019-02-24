from tornado import websocket, ioloop

class RecieveSocket(websocket.WebSocketHandler):
    def open(self):
        print("ReceiveSocket opened")

    def on_message(self, message):
        self.send_message('reeee')

    def on_close(self):
        print("ReceiveSocket closed")

app = web.Application([(r'/recv', RecieveSocket)])

if __name__ == '__main__':
    app.listen(8888)
    ioloop.IOLoop.instance().start()
