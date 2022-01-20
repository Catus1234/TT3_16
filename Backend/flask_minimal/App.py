from flask import Flask
from flask import Flask, jsonify, request
from pymongo import MongoClient
# from flask_cors import CORS
from dotenv import load_dotenv
import os

#from routes import app
# from routes.get_posts import *
# from routes.user import *

load_dotenv()
MONGO_URI = os.getenv('MONGO_URI')

app = Flask(__name__)
client = MongoClient(MONGO_URI)


#not needed
@app.route('/', methods=['GET'])
def hello_world():
    return jsonify({'message': 'Hello, World!'})


#authentication
#input - {"Email":"Brose","Password":brose123}
@app.route('/DBS/user', methods=['GET'])
def getPassword():
    db = client.DBS.user
    user_details = request.get_json()
    print(user_details)
    details = db.find_one({"Email":user_details['Email']})
    print(details)
    if user_details["Password"] == details["Password"]:
        return jsonify({"User_ID":details['User_ID']})
    else:
        return jsonify({'msg': "Incorrect username or password!"})


#get table names
#not needed
@app.route('/DBS', methods=['GET'])
def listMemberGroups():
    db = client.DBS
    result = db.list_collection_names()
    dic={}
    count=1
    for i in result:
        dic["group "+str(count)] = i
        count+=1
    return jsonify(dic)


if __name__ == "__main__":
    app.run(debug=True)