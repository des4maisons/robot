ROBOT
=====

code to control a
[BeagleBone](http://beagleboard.org/Products/BeagleBone)-controlled
robot via a web page.

Installation
----

```bash
virtualenv env
. env/bin/activate
pip install -r requirements.txt
```

Running
---

If you want to serve the files,

```bash
cd assets
python -m SimpleHTTPServer 8000
```

Now you can go to `<ip-address>:8000/control.html` to access the
controls for the robot.

You'll also need to run the server that will convey your commands
from the web interface to the robot itself:

```bash
cd ../server
python serve.py
```
