lcd1602.set_address(lcd1602.I2C_ADDR.ADDR1)
lcd1602.put_string("Keyestudio", 3, 0)
lcd1602.set_LCD_Show(lcd1602.visibled.VISIBLE)
lcd1602.set_backlight(lcd1602.on_off.ON)
val = 0

def on_forever():
    global val
    val += 1
    if val > 1000:
        val = 0 
    lcd1602.put_number(val, 7, 1)
    lcd1602.put_number(pins.analog_read_pin(AnalogPin.P0), 0, 1)
    lcd1602.put_number(pins.digital_read_pin(DigitalPin.P9), 12, 1)
    if pins.digital_read_pin(DigitalPin.P9) == 1:
        basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    else:
        basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
basic.forever(on_forever)
