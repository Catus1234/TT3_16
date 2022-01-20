from flask import Flask, json
from flask import jsonify
from flask import request
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)

URL = os.getenv('MONGO_URI')
client = MongoClient(URL)

#not needed
@app.route('/', methods=['GET'])
def hello_world():
    return jsonify({'message': 'Hello, World!'})


#authentication
#input - {"Email":"bmccreery0@bloomberg.com","Password":password1}
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