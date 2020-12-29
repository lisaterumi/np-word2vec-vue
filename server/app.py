from flask import Flask, render_template, jsonify
from werkzeug.serving import run_simple
from flask_cors import CORS
from flask_restful import Api
# from gensim.models import Word2Vec

from settings import MODE, ProductionConfig, DevelopmentConfig
from resources.routes import initialize_routes

def create_app():
    app = Flask(__name__, 
        static_folder="./static", 
        template_folder="./static/dist"
    )
    app.config.from_object(ProductionConfig if MODE == "production" else DevelopmentConfig)    
    CORS(app, resources={r"/*": {"origins": "*"}})
    api = Api(app)
    initialize_routes(api)
    return app

app = create_app()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")

if __name__ == '__main__':
    run_simple("0.0.0.0", 5000, app, use_debugger=True, use_reloader=True)
