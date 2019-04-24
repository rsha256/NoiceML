# NoiceML

## Instructions
Below are the installing and running procedues

### Installing
1. Make sure you have all dependecies installed: python3, npm, and pip
2. Enter in to the directory: *app/templates/static/* and run the command `npm install`. This will download and install all the dependencies listed in *package.json*.
3. In the static directory, start the npm watcher to build the front end code with the command `npm run watch` (leave this running and open a new terminal window)
4. Create a python virtualenv(Optional)
5. Install flask with the command `$ pip install flask`
6. Install React.js with the command `$ npm i react react-dom --save-dev`

### Running
1. Go to the root directory and start the server with `python run.py`
2. If all is working correctly, you will be given an address http://127.0.0.1:5000/ which you can open in your favorite browser and see our application running! 

## Inspiration
Although we did come to HackTCNJ to create an innovative product, we had another goal: a large problem that we felt needed to be fixed. That problem was the fact that a lot of information exists that people need, yet they are unable to acquire it.

## What it does
When you go to our site, you will be greeted with a split screen with a live translated video on the left and space for your notes on the right.

## How we built it
We built our application using the google-cloud speech to text and translation api's and python. Through the use of linearization algorithms, we were able to determine the breaks between sentences and then use text to speech to convert it back to audio.

## Challenges we ran into
Our biggest challenge was that our Dragonboard wasn't working because of a corrupted Operating System. We reflashed it with a new operating system but it took up a lot of time and was a major challenge for us as no python commands worked in bash. 
Our other challenge was finding accurate locations for each sentence in the text version of the file. Because google-cloud isn't perfect and there were a multitude of missing/misinterpreted words, we had to come up with a good linearization algorithm to find locations (in terms of timestamps) of each sentence.  

## Accomplishments that we're proud of
Our project works thanks to our lack of sleep.

## What we learned
We learned how to use the Google Cloud Platform and React.js with flask

## What's next for NoiceML
We will continue NoiceML and you can view our progress at our github: https://github.com/BobbaTea/HackTCNJ



#### Can be implemented in the future to:
- YouTube
- United Nations

Our (Rahul, Samvit, Akash, Sumant) project for HackTCNJ 2019.
