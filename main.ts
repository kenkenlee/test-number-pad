sensors.actuator_keyborad_pin(DigitalPin.P2, DigitalPin.P8)
basic.forever(function () {
    if (sensors.actuator_keyborad_read() == "*") {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # # # .
            # . # . #
            `)
    } else if (sensors.actuator_keyborad_read() == "#") {
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `)
    }
})
