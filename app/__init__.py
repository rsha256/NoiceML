import os
import app
import json

from flask import Flask, request, url_for, redirect, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')
