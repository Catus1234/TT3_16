
import json
from flask import Flask, jsonify, request

app = Flask(__name__)
app.config["DEBUG"] = True


with open('Data/POST.json', 'r') as myfile:
    data = myfile.read()
posts = json.loads(data)



@app.route('/get_posts', methods=['GET'])
def home():
    return jsonify({'data': posts})



@app.route('/get_post', methods=['GET'])
def api_id():
    if 'Post_ID' in request.args:
        post_id = int(request.args['Post_ID'])
    else:
        return "Error: No id field provided. Please specify an id."

    results = []
    for post in posts:
        if post['Post_ID'] == post_id:
            results.append(post)

    return jsonify(results)


app.run()
