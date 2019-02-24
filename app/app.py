import asyncio
from flask import Flask, render_template
import websockets

app = Flask(__name__)

async def recv_transcription(websocket, path):
    transcription = await websocket.recv()
    print('Received: ' + transcription)

    return transcription

async def send_transcription(websocket, path):
    await websocket.send(await recv_transcription())
    print('Sent.')

@app.route("/")
def main():
    recv_server = websockets.serve(recv_transcription, 'localhost', 6666)
    send_server = websockets.serve(send_transcription, 'localhost', 8888)

    asyncio.get_event_loop().run_until_complete(send_server)
    asyncio.get_event_loop().run_forever()

    return render_template('index.html')
