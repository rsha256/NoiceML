const ConversionFactor = 2 ** (16 - 1) - 1; // 32767
const streamAudioData = e => {
    const floatSamples = e.inputBuffer.getChannelData(0);
    

    
if (socket && socket.readyState === socket.OPEN) {
        socket.send(Int16Array.from(floatSamples.map(n => n * MAX_INT)));
    }
};