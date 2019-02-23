from flask import Flask
app = Flask(__name__,
 	static_folder = './public',
 	template_folder="./static")

from templates.backend.views import backend_blueprint
# register the blueprints
app.register_blueprint(backend_blueprint)
