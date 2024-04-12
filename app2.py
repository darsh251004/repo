from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('page1.html')

@app.route('/signup')
def signup():
    return redirect(url_for('page2'))

@app.route('/page2')
def page2():
    return render_template('page2.html')

@app.route('/a1')
def a1():
    return render_template('a1.html')

@app.route('/p6')
def p6():
    return render_template('p6.html')

if __name__ == '__main__':
    app.run(debug=True)
