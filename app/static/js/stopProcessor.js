if (scriptProcessor) {
    // Stop listening the stream from the michrophone
    scriptProcessor.removeEventListener('audioprocess', streamAudioData);
}