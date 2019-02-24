import pyaudio
import speech_recognition as sr

f=open("output.out","w")
f.close()

f=open("output.out","a+")
while True:
    r = sr.Recognizer()

    mic = sr.Microphone()

    with mic as source:
        r.adjust_for_ambient_noise(source)
        try:
            s=r.recognize_google(r.listen(source))
            f.write(s)
        except:
            pass