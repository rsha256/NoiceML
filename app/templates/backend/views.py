from flask import render_template, Blueprint
backend_blueprint = Blueprint('backend',__name__)

@backend_blueprint.route('/')
def index():
	return render_template("index.html")
