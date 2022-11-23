radio.onReceivedValue(function (name, value) {
    if (name == "avanza") {
        if (value == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        }
        if (name == "avanza") {
            if (value == 0) {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
            }
        }
    }
    if (name == "led") {
        if (value == 2) {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.showArrow(ArrowNames.East)
            basic.pause(1000)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.clearScreen()
        }
        if (value == 1) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            basic.showArrow(ArrowNames.West)
            basic.pause(1000)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            basic.clearScreen()
        } else {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            basic.pause(1000)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            basic.clearScreen()
        }
    }
})
radio.setGroup(3)
