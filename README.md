# Flask-React-App-Template
A starter template repository to build an app with backend Python-Flask and frontend ReactJs


## **Package Installions**
```console
$ sudo apt install npm
```

### **Create a React app**
```console
$ npx create-react-app <app-name>
```

### **Install Python Dependencies**
#### **Install dependency packages**
```console
$ sudo apt install python3-pip
$ pip install -r requirements.txt
```

### **Build a template backend**
```console
$ mkdir api && cd api/ && touch app.py
```

### **Flask app (app/api/app.py)**
```python
from flask import Flask

app = Flask(__name__)

@app.route('/template-route', methods=['GET'])
def template_route():
    """
    A template route for the flask backend
    """
    return {'obj': "Test template!"}
```

### Set up "proxy" redirection from React to Flask
Add the following line to the bottom of the package.json file
```json
"proxy": "http://localhost:5000"
```
Flask development server runs on port 5000 by default. In most cases frontend and backend are all served via the same port for seamless integration and avoid cross-origin issues. The React app can be configured to redirect any requests that it receives (on port 3000) to another server.


## **Start the development server**
```console
$ npm start && cd api/ && flask run
```