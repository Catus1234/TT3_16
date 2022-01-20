import json
from flask import Flask, jsonify, request
from pymongo import MongoClient
from routes import app,client

app = Flask(__name__)
app.config["DEBUG"] = True



with open("POST.json", "r") as myfile:
    data = myfile.read()
posts = json.loads(data)


@app.route("/get_posts", methods=["GET"])
def get_posts():
    return jsonify({"data": posts})


@app.route("/get_post/<id>", methods=["GET"])
def get_post_test(id):
    results = []
    for post in posts:
        if post["Post_ID"] == int(id):
            results.append(post)
    return jsonify({"data": results})


@app.route("/create_post", methods=["POST"])
def create_post():
    record = request.get_json()
    posts.append(record)
    return jsonify({"data": record})


@app.route("/put_post", methods=["PUT"])
def put_post():
    record = request.get_json()
    for i, post in enumerate(posts):
        if post["Post_ID"] == record["Post_ID"]:
            posts[i] = record
    return jsonify({"data": record})


@app.route("/delete_post/<id>", methods=["DELETE"])
def delete_post(id):
    for post in posts:
        if post["Post_ID"] == int(id):
            posts.remove(post)
    return jsonify({"status": "deleted"})


app.run(debug=True)
