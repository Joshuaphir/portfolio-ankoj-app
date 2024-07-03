from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
	return render_template("home.html")

@app.route("/skills")
def skills():
	return render_template("skills.html")

@app.route("/services")
def services():
	return render_template("services.html")

@app.route("/testimonials")
def testimonials():
	return render_template("testimonials.html")

@app.route("/prices")
def prices():
	return render_template("prices.html")

