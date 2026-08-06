import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from dotenv import load_dotenv

load_dotenv()

from flask import Flask, jsonify
from flask_cors import CORS

from notion_service import get_portfolio_items

app = Flask(__name__)
CORS(app)


@app.get("/api/portfolio")
def portfolio():
    return jsonify(get_portfolio_items())


if __name__ == "__main__":
    app.run(debug=True)
