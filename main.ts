input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P9, 180)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P9, 0)
})
basic.forever(function () {
	
})
