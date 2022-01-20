from flask import Flask, json
from flask import jsonify
from flask import request
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb://127.0.0.1:27017')

#not needed
@app.route('/', methods=['GET'])
def hello_world():
    return {'message' : 'Hello, World!'}


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
        return {"User_ID":details['User_ID']}
    else:
        return "Incorrect username or password!"

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