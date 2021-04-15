lcd1602.setAddress(lcd1602.I2C_ADDR.addr1)
lcd1602.putString("Keyestudio", 3, 0)
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.set_backlight(lcd1602.on_off.on)
let val = 0
basic.forever(function on_forever() {
    
    val += 1
    if (val > 1000) {
        val = 0
    }
    
    lcd1602.putNumber(val, 7, 1)
    lcd1602.putNumber(pins.analogReadPin(AnalogPin.P0), 0, 1)
    lcd1602.putNumber(pins.digitalReadPin(DigitalPin.P9), 12, 1)
    if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    } else {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    }
    
})
