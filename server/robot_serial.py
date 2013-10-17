import serial
import logging


class RobotSerial(object):
    def __init__(self):
        try:
            self.serial = serial.Serial('/dev/ttyUSB0')
        except serial.SerialException, e:
            logging.warning(e.message + "\nfalling back to logger")
            self.serial = lambda: 0
            self.serial.write = logging.debug

    def write(self, message):
        self.serial.write(message)
