ROBOT
=====

```text
  i_i
 [@_@]
/|___|\
 d   b
```

Use
[BeagleBone](http://beagleboard.org/Products/BeagleBone)
to control a [Rover 5 Robot](https://www.sparkfun.com/products/10336)
via controls on a web page.

Installation
----

On the Beagle Bone, clone this repo. Then `cd` into the repo and run:

```bash
virtualenv env
. env/bin/activate
pip install -r requirements.txt
```

Using Arduino-IDE, load `robot.ino` onto the arduino connected to your Rover.

Connect the Arduino to the Beagle Bone over serial usb.

Running
---

In the repo on the Beagle Bone, run:
```bash
. env/bin/activate
cd server
python serve.py
```

In your browser, go to `<ip-of-beagle-bone>:5000/control/control.html`.
