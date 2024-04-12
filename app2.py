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

@app.route('/w1')
def w1():
    return render_template('w1.html')

@app.route('/s1')
def s1():
    return render_template('s1.html')

@app.route('/beginner')
def beginner():
    return render_template('beginner.html')

@app.route('/intermediate')
def intermediate():
    return render_template('intermediate.html')

@app.route('/expert')
def expert():
    return render_template('expert.html')

if __name__ == '__main__':
    app.run(debug=True)
