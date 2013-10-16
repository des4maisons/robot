from flask import Flask
from flask import render_template
from flask import url_for
app = Flask(__name__)

app.config['PROPAGATE_EXCEPTIONS'] = True


@app.route('/go/<direction>', methods=['POST'])
def go(direction):
    return direction


@app.route('/control/<filename>')
def control_html(filename='control.html'):
    print url_for('static', filename=filename)
    return render_template(url_for('static', filename=filename))


if __name__ == "__main__":
    app.run()
