if (myStream) {
    // stop the browser microphone
    myStream.getTracks()[0].stop();
    myStream = null;
}