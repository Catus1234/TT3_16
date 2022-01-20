from flask import Flask
from flask import request
from flask import jsonify
from pymongo import MongoClient
from flask_pymongo import PyMongo
from flask_cors import CORS

# from routes.get_posts import *
# from routes.user import *

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://127.0.0.1:27017"
#client = MongoClient('mongodb://127.0.0.1:27017')
client = PyMongo(app)
CORS(app)

