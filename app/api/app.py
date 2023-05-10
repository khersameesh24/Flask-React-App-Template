from flask import Flask


app = Flask(__name__)


@app.route('/test-route', methods=['GET'])
def template_route():
    """
    A template route for the flask backend
    """
    return {'context': "Test template!"}
