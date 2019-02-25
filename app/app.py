from tornado import websocket, web, ioloop

class EchoWebSocket(websocket.WebSocketHandler):
    def open(self):
        print("WebSocket opened")
    def check_origin(self, origin):
        return True
    def on_message(self, transcription):
        self.write_message(transcription)
    def set_default_headers(self, *args, **kwargs):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    def on_close(self):
        print("WebSocket closed")
    def options(self):
        self.set_status(204)
        self.finish()
        
app = web.Application([
    (r'/', EchoWebSocket)
])

if __name__ == '__main__':
    app.listen(8888)
    ioloop.IOLoop.instance().start()
