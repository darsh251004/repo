from flask import *
from flask_mysqldb import *
import mysql.connector

app = Flask(__name__)
app.secret_key = 'kavin'

conn=mysql.connector.connect(user='root',password='admin',host='localhost',port='3306',db='simplilearn_db')

cursor=conn.cursor(dictionary=True)

page=""


@app.route('/', methods = ['POST', 'GET'])
def index():
    msg = ''
    if request.method=="POST":
        form_keys=list(dict(request.form).keys())
    if request.method == 'POST' and 'name' in form_keys and 'email' in form_keys and 'password' in form_keys:
        username = request.form['name']
        email_id = request.form['email']
        password = request.form['password']
        cursor.execute(f'SELECT * FROM account WHERE username = "{username}"')
        account = cursor.fetchone()
        print("Request accepted sql porcessing")
        if account:
            msg = 'Account already exists'
        else:
            cursor.execute(f'INSERT INTO account VALUES ("{username}", "{email_id}", "{password}");')
            conn.commit()
            msg = 'Account created sucessfully'
            print(msg)
            return redirect(url_for("home",usr=username))
    print(msg)
    return render_template('page1.html', msg=msg)

@app.route('/home/<usr>',methods=["POST","GET"])
def home(usr):
    global page
    if page=="reading_button":
        print(True)
        return redirect(url_for("reading_page"))

    return render_template("page2.html",username=usr)

@app.route("/button_input",methods=["POST","GET"])
def btn_input():
    global page
    data = request.json
    print(data)
    button_id = data["button_id"]
    page=button_id
    if button_id=="reading_button":
        return redirect(url_for("reading_page"))
    print("Button clicked:", button_id)

@app.route("/reading_page")
def reading_page():
    return render_template("p6.html")


if __name__ == "__main__":
    app.run(threaded=True, port=5000, debug=True)