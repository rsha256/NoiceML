websocket.on('message', (data) => {
    // Audio buffer data
    const buffer = new Int16Array(data, 0, Math.floor(data.byteLength / 2));
    // Write the data chunk in the stream
    recognizeStream.write(buffer);
});