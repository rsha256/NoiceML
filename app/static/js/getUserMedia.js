window.AudioContext = window.AudioContext || window.webkitAudioContext;
navigator.mediaDevices.getUserMedia(
	{	
	audio: {
	mandatory: {
		googEchoCancellation: 'false',
		googAutoGainControl: 'false',
		googNoiseSuppression: 'false',
		googHighpassFilter: 'false',
		},
	},
}).then(startRecording)
	.catch( e => {
   /* If there are some errors with parameter configurations or 
   user didn’t give you the access to the microphone inside the browser, you end here. */
	console.log(e);
	}
);