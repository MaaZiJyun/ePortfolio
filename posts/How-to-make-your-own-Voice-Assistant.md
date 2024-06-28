---
title: "How to make your own Voice Assistant"
date: "2020-09-18 23:10:37"
categories: "Python Project"
address: "自習スタジオ"
author:
  name: 童夢綺
keywords: ['Python', 'Voice Assistant', 'ChatterBot',]
---

# Preparation

Firstly, I have to introduce the version of the items although it seems not important for your coding. However, you'd better to refer the list below to download these packages in order to reduce the trouble that you will meet during coding time.

1. The **python** version I recommend is **3.6.0**
2. ChatterBot   0.7.4
3. Chatterbot-corpus   1.0.1
4. Pyttsx3   2.9
5. SpeechRecognition   3.8.1
6. Playsound   1.2.2

```
pip3 install pyttsx3
pip3 install SpeechRecognition==3.8.1
pip3 install playsound==1.2.2
```

# The imports and their usages

```python
import pyttsx3                  # speaking program
import datetime                 # time machine
import speech_recognition as sr # speech_recognition 
import wikipedia				# for search something
import random					# random
import webbrowser				# operation of browser
import os						# os
from playsound import playsound	# play sounds
from chatterbot import ChatBot	# the chatting bot
from chatterbot.trainers import ChatterBotCorpusTrainer
```

# Initialization

bot:

in this ChatBot constructor, there are 3 parameters:

 `Alpha` name of the bot, 

`storage_adapter`  ChatterBot comes with built in adapter classes that allow it to connect to different types of databases. In this code, I used the SQLStorageAdapter which allows the chat bot to connect to SQL databases. By default, this adapter will create a SQLite database in the folder storing main.py.

`logic_adapters` parameter is a list of logic adapters. In ChatterBot, a logic adapter is a class that takes an input statement and returns a response to that statement.

`database_uri`  parameter is used to specify the path to the database that the chat bot will use.

```python
bot = ChatBot(
        'Alpha',
        storage_adapter='chatterbot.storage.SQLStorageAdapter',
        logic_adapters=[
            'chatterbot.logic.MathematicalEvaluation',
            #'chatterbot.logic.TimeLogicAdapter',
            'chatterbot.logic.BestMatch'
        ],
        database_uri='sqlite:///database.db'
    )
```

pyttsx3:

```python
engine = pyttsx3.init()
engine.setProperty('rate', 200)    # Speed percent (can go over 100)
engine.setProperty('volume', 1)  # Volume only 0-1
```

# Basic Functions

speak():

The function of speaking is using for read the information(str type) from bot response.

```python
def speak(audio):               # the function of machine speaking controlling
    "speak function"
    print(audio)
    engine.say(audio)
    engine.runAndWait()
```

takeCmd():

The function of taking commands from user. it will record your audio by the microphone and transform audio into string, so please make sure that your microphone is working.

```python
def takeCmd():              # get the commands from users
    r = sr.Recognizer()
    with sr.Microphone() as source:
        r.adjust_for_ambient_noise(source)
        audio = r.listen(source)
    
    try:
        command = r.recognize_google(audio, language = "en")
        print(command)
       

    except Exception as e:
        print(e)
        command = takeCmd()	# if failed then do again

    return command
```

analyzeCmd():

This function will receive the string transformed by takeCmd() and analyse the order.

```
def analyzeCmd(command):
    global KEEPING_ORDER
    command = command.lower()
    print(command)
    if "open google" in command:
        openBrowser()

    elif "shut down" in command:
        speak("good bye sir")
        os._exit(0)

    else:
        chatData(command)
```

chatData():

The function uses chatterbot for chat responding.

```python
def chatData(command):
    
    print('Chatbot is ready')

    user_input = command

    bot_response = bot.get_response(user_input)

    speak(bot_response)
```

# Source Code

```python
import pyttsx3                  # speaking program
import datetime                 # time machine
import speech_recognition as sr # speech_recognition 
import wikipedia
import random
import webbrowser
import os
from playsound import playsound
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

KEEPING_ORDER = False
bot = ChatBot(
        'Alpha',
        storage_adapter='chatterbot.storage.SQLStorageAdapter',
        logic_adapters=[
            'chatterbot.logic.MathematicalEvaluation',
            #'chatterbot.logic.TimeLogicAdapter',
            'chatterbot.logic.BestMatch'
        ],
        database_uri='sqlite:///database.db'
    )


engine = pyttsx3.init()
engine.setProperty('rate', 200)    # Speed percent (can go over 100)
engine.setProperty('volume', 1)  # Volume 0-1

def speak(audio):               # the function of machine speaking controlling
    "speak function"
    print(audio)
    engine.say(audio)
    engine.runAndWait()


def time():                     # get current time
    "time function"
    Time = datetime.datetime.now().strftime("%I:%M:%S")
    speak("The current time is")
    speak(Time)

def date():                     # get date
    "date function"
    year = int(datetime.datetime.now().year)    # get year in int format
    month = int(datetime.datetime.now().month)  # get month in int format
    day = int(datetime.datetime.now().day)      # get day in int format
    speak("The current date is")
    speak(day)
    speak(month)
    speak(year)

def wishme():                   # the greetings at begining
    hour()
    speak("Welcome back!")
    speak("Alpha-2 at your service. Please tell me how can I help you?")

def hour():                     # judgement of greetings
    Hour = datetime.datetime.now().hour
    if Hour >= 6 and Hour < 12:
        speak("good morning sir!")
    elif Hour >= 12 and Hour < 18:
        speak("good afternoon sir!")
    elif Hour >= 18 and Hour < 20:
        speak("good evening sir!")
    else:
        speak("Good night sir")

def takeCmd():              # get the commands from users
    global KEEPING_ORDER
    r = sr.Recognizer()
    with sr.Microphone() as source:
        #r.pause_threshold = 1
        if KEEPING_ORDER:
            playsound("G:\\JARVIS demo\\jarvis\\jarvis\\Music\\tip1.mp3")

        r.adjust_for_ambient_noise(source)
        audio = r.listen(source)
    
    try:
        if KEEPING_ORDER:
            playsound("G:\\JARVIS demo\\jarvis\\jarvis\\Music\\nono.mp3")
        command = r.recognize_google(audio, language = "en")
        print(command)
       

    except Exception as e:
        print(e)
        if KEEPING_ORDER:
            speak(askRepeat())
        command = takeCmd()

    return command


def wiki(command):              # searching information from wiki
    text = wikipedia.summary(command)
    print(text)
    speak(text)

def askRepeat():                # asking for repeating the commands
    num = random.randint(0,3)
    if num == 0:
        return "Sorry?"
    elif num == 1:
        return "Pardon?"
    elif num == 2:
        return "I beg your pardon, sir."
    else:
        return "Say it again?"

def openBrowser():
    speak('Please waiting. the Google has just been opened')
    url = 'http://www.google.com/'
    path = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s"
    webbrowser.get(path).open(url)
    speak('Done')

def searchingGoogle():
    speak("what\'s you wanna search sir?")
    target = takeCmd().lower()
    if "searching" in target or "stop" in target:
        openBrowser()
    else:
        while True:
            speak("you wanna search: "+target+"right?")
            if "yes" in takeCmd().lower():
                break
            else:
                target = takeCmd().lower()

        path = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s"
        url = "http://google.com/?#q="
        webbrowser.get(path).open_new(url + target)

def closeBrowser():
    os.system('taskkill /F /IM chrome.exe')
    speak('The Google has just been closed, sir')

#----------------------------------------------------------------------------------------

def analyzeCmd(command):
    global KEEPING_ORDER
    command = command.lower()
    print(command)
    if "open google" in command:
        speak("shall I help you to search something?")
        command = takeCmd().lower()
        if "yes" in command or "sure" in command or "okay" in command:
            searchingGoogle()
        else:
            openBrowser()

    elif "close google" in command:
        closeBrowser()

    elif "time" in command:
        time()

    elif "date" in command:
        date()

    elif "your name" in command:
        speak("my name is Alpha")

    elif "what is" in command:
        try:
            wiki(command)
        except:
            speak("there\'s an exception with wiki, please try again")

    elif "shut up" in command or "be quiet" in command:
        playsound("G:\\JARVIS demo\\jarvis\\jarvis\\Music\\unhappy.mp3")
        speak("as you wish sir")
        KEEPING_ORDER = False

    elif "shut down" in command:
        speak("good bye sir")
        os._exit(0)

    else:
        chatData(command)

def chatData(command):
    
    #trainer = ChatterBotCorpusTrainer(bot)
    #bot.set_trainer(ChatterBotCorpusTrainer)
    #trainer.train("chatterbot.corpus.english")
    print('Chatbot is ready')

    user_input = command

    bot_response = bot.get_response(user_input)

    speak(bot_response)


#----------------------------------------------------------------------------------------

def major():
    global KEEPING_ORDER
    wishme()
    while True:
        Cmd = takeCmd()
        if "Alpha" in Cmd or "hello" in Cmd:
            speak("yes?")
            KEEPING_ORDER = True
        elif "shut down" in Cmd:
            speak("good bye sir")
            os._exit(0)
        while KEEPING_ORDER:
            analyzeCmd(takeCmd())


major()
```

