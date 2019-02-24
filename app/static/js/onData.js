recognizeStream
.on('data', (data) => {
    // Data event from Speech api
    if (data.results && data.results[0]) {
        websocket.send(JSON.stringify(data.results[0]));
    }
})
.on('error', (error) => {
    ws.send(JSON.stringify({
        error: true
    }));
});

// Communication channel closing from frontend
ws.on('close', () => {
    recognizeStream.end();
});