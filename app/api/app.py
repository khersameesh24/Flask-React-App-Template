from flask import Flask


app = Flask(__name__)


@app.route('/greet', methods=['GET'])
def template_route():
    """
    A template route for the flask backend
    """
    return {'greet': "Hello User!"}
