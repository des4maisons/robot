from robot_serial import RobotSerial


class Robot(object):
    def __init__(self):
        self.serial = RobotSerial()

    def right(self):
        self.serial.write('r')

    def up(self):
        self.serial.write('f')

    def down(self):
        self.serial.write('b')

    def left(self):
        self.serial.write('l')

    def stop(self):
        self.serial.write('s')
