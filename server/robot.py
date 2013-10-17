from robot_serial import RobotSerial


class Robot(object):
    def __init__(self):
        self.serial = RobotSerial()

    def right(self):
        self.serial.write('r')

    def up(self):
        self.serial.write('u')

    def down(self):
        self.serial.write('d')

    def left(self):
        self.serial.write('l')
