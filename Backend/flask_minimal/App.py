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

#[1]
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

#{"User_ID":"None"}
@app.route("/DBS/post", methods=["GET"])
def get_posts():
    db = client.DBS.post
    details = request.get_json(force=True)
    #get all users' posts   #[2]
    if details['User_ID']=='None':
        posts = db.find({})
        dic = {}
        count = 1
        for i in posts:
            print(i)
            dic[count] = i
            count += 1
        return jsonify(dic)
    else:
        #[4]
        #get all posts from selected user
        posts = db.find({"User_ID":details['User_ID']})
        dic = {}
        count = 1
        for i in posts:
            dic[count] = i
            count += 1
        print(dic)
        return dic


#[3]
# insert post to post table
#{"Post_ID":1}
@app.route("/DBS/post", methods=["POST"])
def create_post():
    record = request.get_json()
    db = client.DBS.post
    post = db.find_one({"Post_ID":record["Post_ID"]})
    id = post['_id']
    db.update({"_id":id},{"$set":record})
    return "Updated"

#[5]
#{"User_ID":1,"Post_Title":"New Job","Post_Description":"Finished work","Post_Image":"https://preview.redd.it/op4nak4pvpb81.jpg?width=640&crop=smart&auto=webp&s=615dce736df9a82ae1e2136727e440a863a1ffbe"}
@app.route("/DBS/post", methods=["PUT"])
def put_post():
    record = request.get_json()
    db = client.DBS.post
    #get last post to increment by 1
    last_post = db.find_one(sort=[("Post_ID", -1)])
    last_post = last_post["Post_ID"]
    record["Post_ID"] = last_post+1
    db.insert(record)
    return "Post inserted"

#[6]
#{"Post_ID":1}
@app.route("/DBS/POST", methods=["DELETE"])
def delete_post():
    record = request.get_json()
    db = client.DBS.post
    db.delete_one({"Post_ID":record["Post_ID"]})
    return "Post deleted"


if __name__ == "__main__":
    app.run(debug=True)