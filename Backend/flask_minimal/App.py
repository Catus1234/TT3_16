from flask import Flask
from pymongo import MongoClient
# from flask_cors import CORS
from dotenv import load_dotenv

#from routes import app
from routes.get_posts import *
from routes.user import *

load_dotenv()
MONGO_URI = os.getenv('MONGO_URI')

app = Flask(__name__)
app.config["MONGO_URI"] = MONGO_URI
#client = MongoClient('mongodb://127.0.0.1:27017')
client = MongoClient(app)
# CORS(app)

if __name__ == "__main__":
    app.run(debug=True)