input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        . . # . .
        # . . # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.clearScreen()
    basic.showString("moimoi")
    basic.clearScreen()
})
