function startRecording(stream, callback) {
    audioContext = audioContext || new AudioContext();
    if (!audioContext) {
        return;
    }
    myStream = stream;

    // AudioNode used to control the overall gain (or volume) of the audio graph
    
    const inputPoint = audioContext.createGain();
    const microphone = audioContext.createMediaStreamSource(myStream);
    const analyser = audioContext.createAnalyser();
    scriptProcessor = inputPoint.context.createScriptProcessor(2048, 2, 2);

    microphone.connect(inputPoint);
    inputPoint.connect(analyser);
    inputPoint.connect(scriptProcessor);
    scriptProcessor.connect(inputPoint.context.destination);
	// This is for registering to the “data” event of audio stream, without overwriting the default scriptProcessor.onAudioProcess function if there is one.
	scriptProcessor.addEventListener('audioprocess', streamAudioData);
}