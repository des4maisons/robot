ROBOT
=====

```text
  i_i
 [@_@]
/|___|\
 d   b
```

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

```bash
cd server
python serve.py
```

In your browser, go to `localhost:5000/control/control.html`.
