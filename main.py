from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('pages/home.html')

@app.route('/jobs')
def jobs():
    return render_template('pages/jobs.html')

@app.route('/pricing')
def pricing():
    return render_template('pages/pricing.html')