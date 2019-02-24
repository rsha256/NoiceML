import speech_recognition as sr  

# obtain audio from the microphone  
r = sr.Recognizer()  
r.energy_threshold = 10000
with sr.Microphone() as source:  
    while True:
        audio = r.listen(source)  
        try:  
            print(r.recognize_google(audio))
        except:
            pass