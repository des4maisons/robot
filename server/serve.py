from flask import Flask
app = Flask(__name__)


@app.route('/go/<direction>', methods=['POST'])
def go(direction):
    return direction

if __name__ == "__main__":
    app.run()
