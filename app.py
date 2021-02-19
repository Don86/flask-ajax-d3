from flask import Flask, render_template, request, json, jsonify

app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/calc')
def calc():
    return render_template('index.html')

@app.route('/calc_func', methods=["GET", "POST"])
def calc_func():
    """Calc function attached to the button click, via script.js. 
    """
    num1 = request.form['num1']
    num2 = request.form['num2']

    width = float(num1) * 2
    height = float(num2) * 2

    #return json.dumps({'status':'OK', 'width':width, 'height':height})
    return jsonify({'status':'OK', 'width':width, 'height':height})


if __name__=="__main__":
    app.run()
