#!../env/bin/python

from flask import Flask
from flask import render_template
from flask import url_for
import logging
from robot import Robot

app = Flask(__name__)
app.config['PROPAGATE_EXCEPTIONS'] = True
app.debug = False
robot = Robot()
logging.getLogger().setLevel(logging.DEBUG)


@app.route('/go/<direction>', methods=['POST'])
def go(direction):
    send_directive = getattr(robot, direction)
    send_directive()
    return direction


@app.route('/control/<filename>')
def control_html(filename='control.html'):
    return render_template(url_for('static', filename=filename))


if __name__ == "__main__":
    app.run(host='0.0.0.0')
