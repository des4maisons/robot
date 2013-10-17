import serial


class RobotSerial(object):
    def __init__(self):
        return
        self.serial = serial.Serial('/dev/ttyUSB0')

    def write(self, message):
        print('would-be robot message: ' + message)
